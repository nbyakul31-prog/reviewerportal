// ==============================================================================
// QCU BSIT REVIEWER PORTAL - APPLICATION LOGIC ENGINE
// Handles: Offline state, Web Audio FX, Flashcard engine, Quiz engine, Cram mode
// ==============================================================================

(function () {
  'use strict';

  // State Management with LocalStorage
  const STORAGE_KEY = 'qcu_reviewer_portal_state_v2_6';
  
  let state = {
    activeSubject: 'SPI101',
    activeView: 'hub', // 'hub' | 'digest' | 'flashcards' | 'quiz' | 'cram'
    activeCheckpoint: 'cp1',
    currentCardIndex: 0,
    currentQuizIndex: 0,
    quizScore: 0,
    quizSelectedAnswer: null,
    quizSubmitted: false,
    soundEnabled: true,
    hapticsEnabled: true,
    streak: 1,
    lastActiveDate: new Date().toDateString(),
    masteredCards: [],
    reviewCards: [],
    completedCheckpoints: [],
    cramTimer: 60,
    cramInterval: null,
    cramScore: 0,
    cramActive: false,
    cramSubject: 'ALL'
  };

  // Load persisted state
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...state, ...parsed };
        
        // Check streak
        const today = new Date().toDateString();
        if (state.lastActiveDate !== today) {
          const yesterday = new Date(Date.now() - 86400000).toDateString();
          if (state.lastActiveDate === yesterday) {
            state.streak += 1;
          }
          state.lastActiveDate = today;
          saveState();
        }
      }
    } catch (e) {
      console.warn('Could not load localStorage state', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        activeSubject: state.activeSubject,
        soundEnabled: state.soundEnabled,
        hapticsEnabled: state.hapticsEnabled,
        streak: state.streak,
        lastActiveDate: state.lastActiveDate,
        masteredCards: state.masteredCards,
        completedCheckpoints: state.completedCheckpoints
      }));
      updateQuickStats();
    } catch (e) {
      console.warn('Could not save state', e);
    }
  }

  // Web Audio Synthesizer (Zero asset dependency)
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12); // G5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now); // A3
        osc.frequency.linearRampToValueAtTime(140, now + 0.2);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'flip') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'checkpoint') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(554.37, now + 0.1);
        osc.frequency.setValueAtTime(659.25, now + 0.2);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      }
    } catch (e) {
      console.warn('Audio play error', e);
    }
  }

  function triggerHaptic(pattern = [30]) {
    if (state.hapticsEnabled && navigator.vibrate) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {}
    }
  }

  function showToast(msg) {
    const toast = document.getElementById('toast-notice');
    if (toast) {
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2200);
    }
  }

  // Update Top Stats Strip
  function updateQuickStats() {
    const statCardsMastered = document.getElementById('stat-mastered');
    const statCheckpoints = document.getElementById('stat-checkpoints');
    const statStreak = document.getElementById('stat-streak');

    if (statCardsMastered) statCardsMastered.textContent = state.masteredCards.length;
    if (statCheckpoints) statCheckpoints.textContent = `${state.completedCheckpoints.length}/3`;
    if (statStreak) statStreak.textContent = `${state.streak}🔥`;
  }

  // Navigation & View Routing
  function switchView(viewName) {
    state.activeView = viewName;
    document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));

    const targetPanel = document.getElementById(`view-${viewName}`);
    const targetNav = document.getElementById(`nav-${viewName}`);

    if (targetPanel) targetPanel.classList.add('active');
    if (targetNav) targetNav.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // View specific activations
    if (viewName === 'digest') {
      renderDigest();
    } else if (viewName === 'flashcards') {
      renderFlashcard();
    } else if (viewName === 'quiz') {
      renderQuizQuestion();
    } else if (viewName === 'hub') {
      renderHub();
    }
  }

  // Render Hub
  function renderHub() {
    const container = document.getElementById('subjects-container');
    if (!container) return;

    container.innerHTML = REVIEWER_DATA.subjects.map(sub => {
      const isSelected = sub.code === state.activeSubject;
      const isReady = sub.status === 'active';
      return `
        <div class="subject-card ${isSelected ? 'active-subject' : ''}" onclick="window.reviewerApp.selectSubject('${sub.code}')">
          <div class="subject-header">
            <span class="subject-code">${sub.code}</span>
            <span class="subject-units">${sub.units} Units</span>
          </div>
          <div class="subject-title">${sub.title}</div>
          <div class="subject-sched">🕒 ${sub.schedule}</div>
          <span class="subject-badge ${isReady ? 'badge-ready' : 'badge-slot'}">
            ${isReady ? (isSelected ? '● Active Studying' : 'Ready to Review ✓') : 'Slot Ready'}
          </span>
        </div>
      `;
    }).join('');
  }

  // Render Checkpoint Navigation Bar dynamically for current subject
  function renderCheckpointNav() {
    const cps = REVIEWER_DATA.checkpoints.filter(c => c.subject === state.activeSubject);
    if (!cps.length) return;

    if (!cps.some(c => c.id === state.activeCheckpoint)) {
      state.activeCheckpoint = cps[0].id;
    }

    const html = cps.map(cp => `
      <div class="cp-btn ${cp.id === state.activeCheckpoint ? 'active' : ''}" data-cp="${cp.id}" onclick="window.reviewerApp.selectCheckpoint('${cp.id}')">
        <div class="cp-btn-week">${cp.week}</div>
        <div class="cp-btn-title">${cp.title}</div>
      </div>
    `).join('');

    document.querySelectorAll('.checkpoint-nav').forEach(container => {
      container.innerHTML = html;
    });
  }

  // HTML Escaper for safe rendering of tags & syntax examples
  function escapeHtml(text) {
    if (typeof text !== 'string') return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Format markdown with code blocks, inline code, bold, italics, and safe HTML escaping
  function formatMarkdown(text) {
    if (!text) return '';
    let out = String(text);

    // Strip unnecessary stray triple quotes
    out = out.replace(/'''/g, '');

    // Extract fenced code blocks first
    const codeBlocks = [];
    out = out.replace(/```(?:[a-zA-Z0-9_-]+)?\n?([\s\S]*?)```/g, (_, code) => {
      const idx = codeBlocks.length;
      codeBlocks.push(`<pre class="code-block"><code>${escapeHtml(code.trim())}</code></pre>`);
      return `___CODE_BLOCK_${idx}___`;
    });

    // Extract inline code snippets
    const inlineCodes = [];
    out = out.replace(/`([^`]+)`/g, (_, code) => {
      const idx = inlineCodes.length;
      inlineCodes.push(`<code class="inline-code">${escapeHtml(code)}</code>`);
      return `___INLINE_CODE_${idx}___`;
    });

    // Escape any raw HTML tags in normal text to prevent UI distortion
    out = escapeHtml(out);

    // Convert bold and italics
    out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Restore protected code snippets
    out = out.replace(/___CODE_BLOCK_(\d+)___/g, (_, i) => codeBlocks[Number(i)]);
    out = out.replace(/___INLINE_CODE_(\d+)___/g, (_, i) => inlineCodes[Number(i)]);

    return out;
  }

  // Formats quiz option text safely with code styling for tags and directives
  function formatQuizText(text) {
    if (!text) return '';
    let cleaned = String(text).replace(/'''/g, '').replace(/```/g, '');
    return formatMarkdown(cleaned);
  }

  // Render Chronological Digest with support for structured tables and safe markdown
  function renderDigest() {
    const cp = REVIEWER_DATA.checkpoints.find(c => c.id === state.activeCheckpoint) || REVIEWER_DATA.checkpoints[0];
    const container = document.getElementById('digest-content-container');
    const headerTitle = document.getElementById('digest-header-title');
    const headerDesc = document.getElementById('digest-header-desc');

    if (headerTitle) headerTitle.textContent = `${cp.week}: ${cp.title}`;
    if (headerDesc) headerDesc.textContent = cp.description;

    if (!container) return;

    container.innerHTML = cp.digest.map(item => {
      const hasPoints = item.points && item.points.length > 0;
      const pointsHtml = hasPoints ? `
        <ul class="digest-points">
          ${item.points.map(pt => `<li>${formatMarkdown(pt)}</li>`).join('')}
        </ul>
      ` : '';

      const tableHtml = item.table ? `
        <div class="table-responsive">
          <table class="digest-table">
            <thead>
              <tr>
                ${item.table.headers.map(h => `<th>${formatMarkdown(h)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${item.table.rows.map(row => `
                <tr>
                  ${row.map(cell => `<td>${formatMarkdown(cell)}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      ` : '';

      const diagramHtml = item.diagramHtml ? `
        <div class="digest-diagram-wrapper">
          ${item.diagramHtml}
        </div>
      ` : '';

      return `
        <div class="digest-card">
          <h3>${formatMarkdown(item.heading)}</h3>
          ${pointsHtml}
          ${diagramHtml}
          ${tableHtml}
          ${item.trap ? `<div class="exam-alert">⚠️ <strong>Exam Trap:</strong> ${formatMarkdown(item.trap)}</div>` : ''}
          ${item.tldr ? `<div class="tldr-box">💡 <strong>Quick Takeaway:</strong> ${formatMarkdown(item.tldr)}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  // Flashcards Logic
  function getFilteredFlashcards() {
    return REVIEWER_DATA.flashcards.filter(fc => fc.checkpointId === state.activeCheckpoint);
  }

  function renderFlashcard() {
    const cards = getFilteredFlashcards();
    if (!cards.length) return;

    if (state.currentCardIndex >= cards.length) {
      state.currentCardIndex = 0;
    }

    const card = cards[state.currentCardIndex];
    const cardBox = document.getElementById('flashcard-box');
    const cardFront = document.getElementById('fc-front-text');
    const cardBack = document.getElementById('fc-back-text');
    const cardTag = document.getElementById('fc-tag');
    const cardCounter = document.getElementById('fc-counter');
    const isMastered = state.masteredCards.includes(card.id);

    if (cardBox) cardBox.classList.remove('flipped');
    if (cardFront) cardFront.innerHTML = formatMarkdown(card.question);
    if (cardBack) cardBack.innerHTML = formatMarkdown(card.answer);
    if (cardTag) cardTag.textContent = `${card.tag} ${isMastered ? '✓ Mastered' : ''}`;
    if (cardCounter) cardCounter.textContent = `${state.currentCardIndex + 1} / ${cards.length}`;
  }

  function flipFlashcard() {
    const cardBox = document.getElementById('flashcard-box');
    if (cardBox) {
      cardBox.classList.toggle('flipped');
      playSound('flip');
      triggerHaptic([20]);
    }
  }

  function markFlashcard(mastered) {
    const cards = getFilteredFlashcards();
    const card = cards[state.currentCardIndex];
    
    if (mastered) {
      if (!state.masteredCards.includes(card.id)) {
        state.masteredCards.push(card.id);
      }
      playSound('correct');
      triggerHaptic([35, 30, 35]);
      showToast('Card marked as Mastered! 🎉');
    } else {
      playSound('flip');
      triggerHaptic([20]);
    }

    saveState();
    nextFlashcard();
  }

  function nextFlashcard() {
    const cards = getFilteredFlashcards();
    state.currentCardIndex = (state.currentCardIndex + 1) % cards.length;
    renderFlashcard();
  }

  function prevFlashcard() {
    const cards = getFilteredFlashcards();
    state.currentCardIndex = (state.currentCardIndex - 1 + cards.length) % cards.length;
    renderFlashcard();
  }

  // ==============================================================================
  // DYNAMIC SHUFFLED QUIZ ENGINE WITH BACK-BUTTON NAVIGATION
  // ==============================================================================
  let activeQuizSession = {
    checkpointId: null,
    questions: [],
    userAnswers: [], // [ { selectedIndex: null, submitted: false, isCorrect: false } ]
    score: 0
  };

  function initQuizSession(checkpointId, forceReshuffle = false) {
    if (!forceReshuffle && activeQuizSession.checkpointId === checkpointId && activeQuizSession.questions.length > 0) {
      return;
    }
    const quizGroup = REVIEWER_DATA.quizzes.find(q => q.checkpointId === checkpointId);
    const sourceQuestions = quizGroup ? quizGroup.questions : [];
    if (!sourceQuestions.length) {
      activeQuizSession = { checkpointId, questions: [], userAnswers: [], score: 0 };
      return;
    }

    // 1. Shuffle questions order (Fisher-Yates)
    const shuffledQ = [...sourceQuestions].sort(() => Math.random() - 0.5);

    // 2. For each question, dynamically shuffle the options and remap correct index
    const preparedQuestions = shuffledQ.map((q, qIndex) => {
      const originalOptions = q.options;
      const indexedOptions = originalOptions.map((text, idx) => ({ text, isCorrect: idx === q.correct }));
      // Shuffle options randomly
      indexedOptions.sort(() => Math.random() - 0.5);
      const newOptions = indexedOptions.map(o => o.text);
      const newCorrect = indexedOptions.findIndex(o => o.isCorrect);

      return {
        id: q.id || `dyn-q-${qIndex}`,
        question: q.question,
        options: newOptions,
        correct: newCorrect,
        explanation: q.explanation
      };
    });

    activeQuizSession = {
      checkpointId,
      questions: preparedQuestions,
      userAnswers: preparedQuestions.map(() => ({ selectedIndex: null, submitted: false, isCorrect: false })),
      score: 0
    };
    state.currentQuizIndex = 0;
    state.quizScore = 0;
    state.quizSelectedAnswer = null;
    state.quizSubmitted = false;
  }

  function getCurrentQuizQuestions() {
    if (activeQuizSession.checkpointId !== state.activeCheckpoint || !activeQuizSession.questions.length) {
      initQuizSession(state.activeCheckpoint);
    }
    return activeQuizSession.questions;
  }

  function renderQuizQuestion() {
    const questions = getCurrentQuizQuestions();
    const container = document.getElementById('quiz-view-container');
    if (!container) return;

    if (!questions.length) {
      container.innerHTML = `
        <div class="quiz-result-card">
          <h2>No Questions Available</h2>
          <p style="color: var(--text-muted); margin-top: 8px;">No quiz questions registered for this checkpoint yet.</p>
        </div>
      `;
      return;
    }

    if (state.currentQuizIndex >= questions.length) {
      renderQuizResult();
      return;
    }

    const q = questions[state.currentQuizIndex];
    const userAns = activeQuizSession.userAnswers[state.currentQuizIndex] || { selectedIndex: null, submitted: false, isCorrect: false };

    state.quizSubmitted = userAns.submitted;
    state.quizSelectedAnswer = userAns.selectedIndex;

    const progressPercent = ((state.currentQuizIndex) / questions.length) * 100;
    const progressFill = document.getElementById('quiz-progress-fill');
    if (progressFill) progressFill.style.width = `${progressPercent}%`;

    const quizProgressLabel = document.getElementById('quiz-progress-label');
    if (quizProgressLabel) quizProgressLabel.textContent = `Question ${state.currentQuizIndex + 1} of ${questions.length}`;

    const letters = ['A', 'B', 'C', 'D'];
    const optionsHtml = q.options.map((opt, idx) => {
      let extraClass = '';
      if (userAns.submitted) {
        if (idx === q.correct) extraClass = 'correct';
        else if (idx === userAns.selectedIndex) extraClass = 'wrong';
      } else if (idx === userAns.selectedIndex) {
        extraClass = 'selected';
      }
      return `
        <button class="option-btn ${extraClass}" id="opt-btn-${idx}" onclick="window.reviewerApp.selectQuizOption(${idx})">
          <span class="option-letter">${letters[idx]}</span>
          <span class="option-text">${formatQuizText(opt)}</span>
        </button>
      `;
    }).join('');

    const isFirst = state.currentQuizIndex === 0;
    const isLast = state.currentQuizIndex + 1 >= questions.length;
    let nextBtnLabel = 'Confirm Answer';
    if (userAns.submitted) {
      nextBtnLabel = isLast ? 'See Final Score 🎉' : 'Next Question →';
    }

    container.innerHTML = `
      <div class="question-card">
        <div class="question-title">${formatMarkdown(q.question)}</div>
        <div class="options-list">
          ${optionsHtml}
        </div>
        <div class="explanation-box ${userAns.submitted ? ('show ' + (userAns.isCorrect ? 'correct-exp' : 'wrong-exp')) : ''}" id="explanation-box">
          ${userAns.submitted ? `<strong>${userAns.isCorrect ? 'Correct! 🎯' : 'Incorrect 💡'}</strong>: ${formatMarkdown(q.explanation)}` : ''}
        </div>
      </div>
      <div class="quiz-footer-actions">
        <button class="secondary-btn" id="quiz-back-btn" onclick="window.reviewerApp.prevQuizQuestion()" ${isFirst ? 'disabled' : ''}>
          ← Previous
        </button>
        <button class="primary-btn" id="quiz-action-btn" onclick="window.reviewerApp.submitOrNextQuiz()">
          ${nextBtnLabel}
        </button>
      </div>
    `;

    // Visual selection restoration for non-submitted answers
    if (!userAns.submitted && userAns.selectedIndex !== null) {
      const btn = document.getElementById(`opt-btn-${userAns.selectedIndex}`);
      if (btn) {
        btn.style.borderColor = 'var(--accent-cyan)';
        btn.style.background = 'rgba(6, 182, 212, 0.12)';
      }
    }
  }

  function selectQuizOption(index) {
    const userAns = activeQuizSession.userAnswers[state.currentQuizIndex];
    if (userAns && userAns.submitted) return; // Prevent changing after submission

    state.quizSelectedAnswer = index;
    if (userAns) userAns.selectedIndex = index;

    document.querySelectorAll('.option-btn').forEach((btn, idx) => {
      if (idx === index) {
        btn.style.borderColor = 'var(--accent-cyan)';
        btn.style.background = 'rgba(6, 182, 212, 0.12)';
      } else {
        btn.style.borderColor = 'rgba(255, 255, 255, 0.09)';
        btn.style.background = 'rgba(255, 255, 255, 0.04)';
      }
    });
    playSound('flip');
    triggerHaptic([15]);
  }

  function prevQuizQuestion() {
    if (state.currentQuizIndex > 0) {
      state.currentQuizIndex -= 1;
      renderQuizQuestion();
      playSound('flip');
      triggerHaptic([15]);
    }
  }

  function submitOrNextQuiz() {
    const questions = getCurrentQuizQuestions();
    const userAns = activeQuizSession.userAnswers[state.currentQuizIndex];
    if (!userAns) return;

    if (userAns.submitted) {
      // Advance to next question or final score
      state.currentQuizIndex += 1;
      renderQuizQuestion();
      return;
    }

    if (state.quizSelectedAnswer === null) {
      showToast('Please select an option first!');
      triggerHaptic([50]);
      return;
    }

    const q = questions[state.currentQuizIndex];
    const isCorrect = state.quizSelectedAnswer === q.correct;
    userAns.submitted = true;
    userAns.isCorrect = isCorrect;
    userAns.selectedIndex = state.quizSelectedAnswer;

    // Recalculate total score
    activeQuizSession.score = activeQuizSession.userAnswers.filter(a => a.submitted && a.isCorrect).length;
    state.quizScore = activeQuizSession.score;

    renderQuizQuestion();

    if (isCorrect) {
      playSound('correct');
      triggerHaptic([30, 40, 30]);
    } else {
      playSound('wrong');
      triggerHaptic([80, 50, 80]);
    }
  }

  // Backwards compatibility alias
  function submitQuizAnswer() {
    submitOrNextQuiz();
  }

  function shuffleAndGenerateQuiz() {
    initQuizSession(state.activeCheckpoint, true);
    renderQuizQuestion();
    showToast('🎲 Generated fresh randomized questions & options!');
    playSound('flip');
  }

  function renderQuizResult() {
    const questions = getCurrentQuizQuestions();
    const container = document.getElementById('quiz-view-container');
    const progressFill = document.getElementById('quiz-progress-fill');
    if (progressFill) progressFill.style.width = '100%';

    // Recalculate verified score
    const totalScore = activeQuizSession.userAnswers.filter(a => a.submitted && a.isCorrect).length;
    state.quizScore = totalScore;
    const percent = Math.round((totalScore / questions.length) * 100);
    const passed = percent >= 70;

    if (passed && !state.completedCheckpoints.includes(state.activeCheckpoint)) {
      state.completedCheckpoints.push(state.activeCheckpoint);
      saveState();
      playSound('checkpoint');
    }

    container.innerHTML = `
      <div class="quiz-result-card">
        <div class="score-circle">
          <div class="score-num">${totalScore}</div>
          <div class="score-total">/ ${questions.length}</div>
        </div>
        <h2 style="font-size: 1.3rem; margin-bottom: 6px;">${passed ? '🎉 Checkpoint Mastered!' : 'Keep Going! 💪'}</h2>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 20px;">
          You scored <strong>${percent}%</strong> in ${state.activeCheckpoint.toUpperCase()}.
          ${passed ? 'This checkpoint badge is now recorded in your profile.' : 'Review the digest and try again to unlock your mastery badge!'}
        </p>
        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
          <button class="sub-tab" onclick="window.reviewerApp.restartQuiz()">Retake Quiz</button>
          <button class="sub-tab" onclick="window.reviewerApp.shuffleAndGenerateQuiz()">🎲 New Shuffled Set</button>
          <button class="primary-btn" onclick="window.reviewerApp.switchView('digest')">Review Notes</button>
        </div>
      </div>
    `;
  }

  function restartQuiz() {
    initQuizSession(state.activeCheckpoint, true);
    renderQuizQuestion();
  }

  // ==============================================================================
  // SUBJECT-SEPARATED 60-SECOND CRAM DRILL
  // ==============================================================================
  function setCramSubject(code) {
    state.cramSubject = code;
    document.querySelectorAll('.cram-subject-nav .cram-sub-btn').forEach(btn => {
      btn.classList.toggle('active', btn.id === `cram-sub-${code}`);
    });

    const titleEl = document.getElementById('cram-starter-title');
    const descEl = document.getElementById('cram-starter-desc');
    const labels = {
      'ALL': 'All Enrolled Subjects',
      'SPI101': 'SPI101 (Social & Professional Issues)',
      'MS101': 'MS101 (Discrete Mathematics)',
      'IPT102': 'IPT102 (Integrative Programming & ASP.NET)',
      'SIA101': 'SIA101 (Systems Integration & Architecture)'
    };
    const subLabel = labels[code] || code;

    if (titleEl) titleEl.textContent = `Ready to Cram ${code === 'ALL' ? 'Everything' : code}?`;
    if (descEl) descEl.textContent = `Answer as many rapid-fire ${subLabel} questions as you can before the 60-second timer hits zero!`;

    showToast(`Cram Subject: ${code}`);
    if (state.cramActive) {
      renderNextCramQuestion();
    }
  }

  function startCramMode() {
    state.cramActive = true;
    state.cramTimer = 60;
    state.cramScore = 0;

    const timerEl = document.getElementById('cram-timer-val');
    if (timerEl) timerEl.textContent = '60s';
    const scoreEl = document.getElementById('cram-score-val');
    if (scoreEl) scoreEl.textContent = '0';

    if (state.cramInterval) clearInterval(state.cramInterval);

    state.cramInterval = setInterval(() => {
      state.cramTimer -= 1;
      const tEl = document.getElementById('cram-timer-val');
      if (tEl) tEl.textContent = `${state.cramTimer}s`;

      if (state.cramTimer <= 0) {
        endCramMode();
      }
    }, 1000);

    renderNextCramQuestion();
  }

  function renderNextCramQuestion() {
    let targetQuizzes = REVIEWER_DATA.quizzes;
    if (state.cramSubject && state.cramSubject !== 'ALL') {
      targetQuizzes = targetQuizzes.filter(q => q.subject === state.cramSubject);
    }
    if (!targetQuizzes.length) targetQuizzes = REVIEWER_DATA.quizzes;

    // Collect questions with attached metadata
    const pool = [];
    targetQuizzes.forEach(qz => {
      qz.questions.forEach(q => {
        pool.push({
          ...q,
          _subject: qz.subject || 'QCU',
          _week: qz.week || ''
        });
      });
    });

    if (!pool.length) return;

    const rawQ = pool[Math.floor(Math.random() * pool.length)];

    // Dynamically shuffle options for cram as well!
    const indexedOpts = rawQ.options.map((t, i) => ({ text: t, isCorrect: i === rawQ.correct }));
    indexedOpts.sort(() => Math.random() - 0.5);
    const shuffledOpts = indexedOpts.map(o => o.text);
    const newCorrect = indexedOpts.findIndex(o => o.isCorrect);

    const container = document.getElementById('cram-card-slot');
    if (!container) return;

    const letters = ['A', 'B', 'C', 'D'];
    container.innerHTML = `
      <div class="question-card" style="margin-bottom: 10px;">
        <div class="cram-q-badge">📌 ${rawQ._subject} • ${rawQ._week}</div>
        <div class="question-title">${formatMarkdown(rawQ.question)}</div>
        <div class="options-list">
          ${shuffledOpts.map((opt, idx) => `
            <button class="option-btn" onclick="window.reviewerApp.answerCram(${idx}, ${newCorrect})">
              <span class="option-letter">${letters[idx]}</span>
              <span class="option-text">${formatQuizText(opt)}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  function answerCram(selected, correct) {
    if (selected === correct) {
      state.cramScore += 1;
      playSound('correct');
      triggerHaptic([20]);
    } else {
      playSound('wrong');
      triggerHaptic([40]);
    }
    const scoreEl = document.getElementById('cram-score-val');
    if (scoreEl) scoreEl.textContent = state.cramScore;
    renderNextCramQuestion();
  }

  function endCramMode() {
    clearInterval(state.cramInterval);
    state.cramActive = false;
    const container = document.getElementById('cram-card-slot');
    if (container) {
      container.innerHTML = `
        <div class="quiz-result-card">
          <div class="score-circle">
            <div class="score-num">${state.cramScore}</div>
            <div class="score-total">Score</div>
          </div>
          <h2>⚡ Cram Drill Complete!</h2>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin: 10px 0 16px;">
            Subject: <strong>${state.cramSubject || 'All'}</strong><br>
            You answered <strong>${state.cramScore}</strong> questions correctly in 60 seconds!
          </p>
          <button class="primary-btn" onclick="window.reviewerApp.startCramMode()">Start Another Drill</button>
        </div>
      `;
    }
    playSound('checkpoint');
  }

  // Checkpoint Selection
  function selectCheckpoint(cpId) {
    state.activeCheckpoint = cpId;
    state.currentCardIndex = 0;
    state.currentQuizIndex = 0;
    state.quizScore = 0;
    initQuizSession(cpId, false);

    document.querySelectorAll('.cp-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cp === cpId);
    });

    if (state.activeView === 'digest') renderDigest();
    if (state.activeView === 'flashcards') renderFlashcard();
    if (state.activeView === 'quiz') renderQuizQuestion();
  }

  function selectSubject(code) {
    const activeCourses = (REVIEWER_DATA.subjects || []).filter(s => s.status === 'active').map(s => s.code);
    if (!activeCourses.includes(code)) {
      showToast(`${code} syllabus slot ready! Add notes when available.`);
      return;
    }
    state.activeSubject = code;
    state.currentCardIndex = 0;
    state.currentQuizIndex = 0;
    state.quizScore = 0;

    const firstCp = REVIEWER_DATA.checkpoints.find(c => c.subject === code);
    if (firstCp) {
      state.activeCheckpoint = firstCp.id;
    }
    initQuizSession(state.activeCheckpoint, true);

    const badgeEl = document.getElementById('header-subject-name');
    if (badgeEl) badgeEl.textContent = code;

    renderCheckpointNav();
    renderHub();
    showToast(`Switched to ${code} Reviewer 📚`);
    switchView('digest');
    saveState();
  }

  function toggleActiveSubject() {
    const activeSubs = (REVIEWER_DATA.subjects || []).filter(s => s.status === 'active').map(s => s.code);
    const cycle = activeSubs.length ? activeSubs : ['SPI101', 'MS101', 'IPT102', 'SIA101'];
    const curIdx = cycle.indexOf(state.activeSubject);
    const nextCode = cycle[(curIdx + 1) % cycle.length];
    selectSubject(nextCode);
  }

  // Touch Swipe Gesture for Flashcards
  function setupTouchGestures() {
    const cardBox = document.getElementById('flashcard-box');
    if (!cardBox) return;

    let touchStartX = 0;
    let touchEndX = 0;

    cardBox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    cardBox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 60) {
        if (diff > 0) {
          // Swiped Right -> Mastered
          markFlashcard(true);
        } else {
          // Swiped Left -> Review again
          markFlashcard(false);
        }
      }
    }
  }

  // Toggle Sound & Haptics
  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    const btn = document.getElementById('btn-sound-toggle');
    if (btn) {
      btn.classList.toggle('active', state.soundEnabled);
      btn.title = state.soundEnabled ? 'Sound On' : 'Sound Muted';
    }
    showToast(state.soundEnabled ? '🔊 Sound Enabled' : '🔇 Sound Muted');
    saveState();
  }

  // ==============================================================================
  // SLIDES & PPTX VIEWER ENGINE
  // ==============================================================================
  const PRELOADED_DECKS = {
    'spi-w2': {
      title: "SPI101: Week 2 - Ethical Theories",
      slides: [
        { title: "WEEK 2: COMMON ETHICAL THEORIES", bullets: ["SPI101 - Social and Professional Issues", "Quezon City University - College of Computer Studies", "1st Semester AY 2026-2027"] },
        { title: "Learning Outcomes", bullets: ["Discuss and differentiate the different ethical theories", "Determine the ethical theory most appropriate to a scenario", "Demonstrate usefulness of specific ethical theory in a given case"] },
        { title: "Introduction to Ethics", bullets: ["Ethics describes how we look and understand life in terms of good/bad or right/wrong", "Branch of knowledge that deals with moral principles", "Frameworks: 'What should I do in this situation?' or 'What is right or wrong for me?'"] },
        { title: "Relativism", bullets: ["Theory that there is NO universal moral norm of right and wrong", "1.1 Subjective Relativism: Each person decides right or wrong for themselves ('What's right for you may not be right for me')", "1.2 Cultural Relativism: Meaning of right/wrong rests with society's moral guidelines; varies place to place & time to time"] },
        { title: "Divine Command Theory", bullets: ["Good actions = aligned with the will of God; Bad actions = contrary to the will of God", "Holy Books serve as moral decision-making guides (e.g. honor parents)", "Based on OBEDIENCE, not REASON"] },
        { title: "Ethical Egoism", bullets: ["Each person should focus exclusively on his or her self-interest", "Morally right action = maximum long-term benefit for the actor", "Does not prohibit helping others, but altruism serves own long-term interest"] },
        { title: "Acts Defying Egoism", bullets: ["Mother depriving herself of the only bread for her child", "Father working overtime solely to sustain family", "Sibling volunteering to stop studying so other siblings can continue"] },
        { title: "Consequentialism & Utilitarianism", bullets: ["'The end will justify the means'", "Consequence of an action determines moral acceptability", "Jeremy Bentham: Utilitarianism - 'The greatest happiness for the greatest number'"] },
        { title: "Kantianism / Deontology", bullets: ["Obligation-based theory by Immanuel Kant (18th Century)", "Emphasizes the TYPE of action rather than the consequences", "Moral decisions based on DUTIES and the RIGHTS of others", "'Act morally regardless of the consequences'"] },
        { title: "Philippine Congress & Kantianism", bullets: ["Art III Sec 26: State shall prohibit political dynasties as defined by law", "NOT a self-executing provision; requires enabling law", "For 28+ years (1987-2015+), no lawmaker passed an anti-dynasty bill due to self-interest"] },
        { title: "Persuasive Power: Ethics vs Law", bullets: ["Persuasive power of ethics is weak compared to coercive power of law", "Siesta illustration: 9 out of 10 people ignore bleeding stranger; but BIR tax letter with criminal prosecution compels immediate compliance", "Contracts & post-dated checks prove we do not rely solely on moral compulsion"] },
        { title: "Civil vs Natural Obligation", bullets: ["Civil obligation: Legal duty with right of action (parents compelled to support minor children)", "Natural obligation: Children supporting elderly parents is natural, but parents currently have no legal right of action to sue children"] },
        { title: "The 2000 LOVE BUG Case", bullets: ["Maliciously created in the Philippines despite author knowing it was unethical", "No copycats dared repeat after the E-Commerce Act (RA 8792) enacted criminal penalties"] }
      ]
    },
    'spi-w3': {
      title: "SPI101: Week 3-4 - Computer Ethics",
      slides: [
        { title: "WEEK 3-4: COMPUTER ETHICS", bullets: ["SPI101 - Social and Professional Issues", "Quezon City University", "Dr. Charlemagne G. Lavina Reference"] },
        { title: "Professional Code of Ethics", bullets: ["Set of guidelines designed to set acceptable behavior of members of a profession", "4 Benefits: 1) Ethical Decision Making, 2) High Standards, 3) Trust from Public, 4) Evaluation Benchmark"] },
        { title: "Filipino IT Code of Ethics (10 Canons)", bullets: ["Promote public IT knowledge", "Consider general welfare & public good", "Truthful advertising", "Comply with IP & patent laws", "Accept full responsibility with competence", "Protect confidential data unless required by law", "Continuing professional development"] },
        { title: "AITP & ACM Principles", bullets: ["AITP 6 Obligations: Management, Fellow Members, Society, University, Employer, Country", "ACM/IEEE 8 Principles: Public, Client/Employer, Product, Judgment, Management, Profession, Colleagues, Self"] },
        { title: "Ten Commandments of Computer Ethics", bullets: ["Do not harm others with a computer", "Do not snoop in files", "Do not steal or bear false witness", "Do not pirate proprietary software", "Do not use resources without authorization", "Think about social consequences of programs designed"] },
        { title: "The Hacking Community's Constitution", bullets: ["14 Believed rights (Bill of Rights)", "Cyberspace democracy, free speech, freedom from oppressive governments", "Hacking to test network integrity", "Support for Open Source movement; reject government-mandated closed commercial software"] },
        { title: "James Moor's 3 Properties of Computers", bullets: ["1. Logical Malleability (molded to perform any logical activity)", "2. Impact on Society (pervasive presence)", "3. Invisibility Factor (hidden operations)"] },
        { title: "3 Invisibility Factors", bullets: ["1. Invisible Abuse (logic bombs, theft, backdoors)", "2. Invisible Programming Values (embedded biases/assumptions)", "3. Invisible Complex Calculation (algorithms beyond human manual check)"] },
        { title: "3 Levels of Computer Ethics", bullets: ["Pop Level: Sensitizing general public via media & TV", "Para Level: Collecting cases, comparing scenarios, attending forums", "Theoretical Level: Applying classical philosophy to computing"] },
        { title: "Social Media Capital & Photo Consent", bullets: ["PH is Social Media Capital: 53 hours/week (vs 42 hrs global average)", "Photo Consent Exceptions: 1) News of the day, 2) General public welfare (viral abusive enforcer), 3) Public personalities in public (Pacquiao in public, never in comfort room)"] }
      ]
    },
    'spi-w5': {
      title: "SPI101: Week 5-6 - Technologies' Impact on Privacy",
      slides: [
        { title: "WEEK 5-6: TECHNOLOGIES' IMPACT ON PRIVACY", bullets: ["SPI101 - Social and Professional Issues", "Quezon City University - College of Computer Studies"] },
        { title: "Constitutional Provision on Privacy", bullets: ["Word 'PRIVACY' mentioned only ONCE in 1987 PH Constitution (Art III Sec 3)", "Privacy of communication is inviolable except upon lawful court order or public safety", "Exclusionary Rule: Evidence obtained in violation is inadmissible in court"] },
        { title: "3 Lawful Exceptions to Privacy", bullets: ["1. Lawful Court Order: Search warrant issued upon Probable Cause personally determined by judge", "2. Public Order/Safety: Security bag inspections in LRT/MRT/malls against terrorism", "3. Express Provision of Law: AMLA reporting deposits >= ₱300,000 to AMLC"] },
        { title: "Rational Relationship Test", bullets: ["Step 1: Does policy have a reasonable purpose (legitimate end)?", "Step 2: Is policy reasonably related to that end?", "RA 3019 (Anti-Graft Act) SALN requirement upheld because curbing corruption promotes honesty in public service"] },
        { title: "Reasonable Expectation of Privacy", bullets: ["Pres. Erap Estrada in 2010 election voting booth", "Anti-Wiretapping Act (RA 4200): Requires authorization of ALL parties to private conversation", "Privacy Between Spouses: Marriage does not allow breaking into drawers/phones for infidelity evidence", "Detainees: Diminished expectation of privacy under RA 7438"] },
        { title: "Data Privacy Act (RA 10173)", bullets: ["Regulates processing of personal information", "Section 11 Principles: Specified/legitimate purpose, fairly/lawfully processed, accurate/updated, adequate & not excessive, retained only as necessary, identifiable form limited", "Personal Information Controller (PIC) is accountable"] },
        { title: "Due Process & Software Engineering", bullets: ["Art III Sec 1: 'No person shall be deprived of life, liberty, or property without due process of law'", "Jurisprudence: 'A law which hears before it condemns, which proceeds upon inquiry, and renders judgment only after trial'", "Programmers apply due process through confirmation dialogs ('Do you want to save changes to complete.doc? Yes/No/Cancel') before data loss"] }
      ]
    },
    'ms-w2': {
      title: "MS101: Week 2-4 - Logic and Sets",
      slides: [
        { title: "WEEK 2-4: LOGIC AND SETS", bullets: ["MS101 - Discrete Mathematics", "Quezon City University - College of Computer Studies", "55 Slides Presentation"] },
        { title: "What is Discrete Mathematics & Logic?", bullets: ["Discrete Mathematics deals with objects with distinct, separated values", "Logic is the study of consequences, the art and science of reasoning", "Argument = Premises + Conclusion (Valid if conclusion must be true when all premises are true)"] },
        { title: "Propositional Logic", bullets: ["Propositions are declarative statements that are either True or False, but not both", "Non-propositions: Questions, exclamations, open formulas with variables"] },
        { title: "Logical Connectives & Precedence", bullets: ["1. NOT (~) [Highest priority]", "2. AND (∧)", "3. OR (∨)", "4. IF-THEN (→)", "5. IF AND ONLY IF (↔) [Lowest priority]"] },
        { title: "Truth Tables & Sentence Types", bullets: ["Formula for rows: R = 2^n (n = number of propositional variables)", "Tautology: Always True in every interpretation", "Contradiction: Always False in every interpretation", "Contingency: True in some, False in others"] },
        { title: "Predicates & Quantifiers", bullets: ["Predicate: statement containing unspecified variables (e.g. P(x): x > 6)", "Universal Quantifier (∀x): True for ALL elements in domain", "Existential Quantifier (∃x): True for AT LEAST ONE element in domain"] },
        { title: "Set Theory Essentials", bullets: ["Collection of distinct objects; Roster method vs Rule method", "Cardinality |A|: number of elements in set", "Power Set P(A): set of all subsets; size = 2^|A|", "Operations: Union (∪), Intersection (∩), Difference (-), Complement (A')"] }
      ]
    },
    'ms-w5': {
      title: "MS101: Week 5 - Number Theory",
      slides: [
        { title: "WEEK 5: APPLICATIONS OF NUMBER THEORY", bullets: ["MS101 - Discrete Mathematics", "Quezon City University"] },
        { title: "Number Theory & Divisibility", bullets: ["Study of natural numbers and divisibility properties", "Divisibility rules for 2, 3, 4, 5, 6, 8, 9, 10 without full division"] },
        { title: "Divisibility Theorems", bullets: ["If a | b and a | c => a | (b + c)", "If a | b => a | bc for all integers c", "If a | b and b | c => a | c (Transitivity)"] },
        { title: "Primes and Composites", bullets: ["Prime: integer > 1 with only factors 1 and itself", "Composite: integer > 1 with other factors", "0 and 1 are NEITHER prime nor composite!"] },
        { title: "Division Algorithm", bullets: ["For integer a and positive divisor d: a = dq + r, 0 ≤ r < d", "q is unique quotient, r is unique remainder"] },
        { title: "GCD and LCM", bullets: ["Greatest Common Divisor (GCD): largest positive integer dividing both (e.g. gcd(48, 72) = 24)", "Identity: gcd(a, b) × lcm(a, b) = a × b"] }
      ]
    },
    'ms-w6': {
      title: "MS101: Week 6 - Mathematical Theory",
      slides: [
        { title: "WEEK 6: MATHEMATICAL THEORY & PROOFS", bullets: ["MS101 - Discrete Mathematics", "Quezon City University"] },
        { title: "Terminologies", bullets: ["Axiom: assumption needing no proof", "Proof: sequence of statements forming a valid argument", "Theorem: statement proven true", "Lemma: simple helper theorem", "Corollary: direct consequence of proven theorem", "Conjecture: unproven statement"] },
        { title: "Methods of Proof", bullets: ["Direct Proof: Assume p is true, show q is true", "Indirect Proof (Contrapositive): p → q ≡ ~q → ~p", "Proof by Contradiction: Assume opposite, derive impossible contradiction"] },
        { title: "Mathematical Induction", bullets: ["Basis Step: Show P(0) or P(1) is true", "Inductive Step: Show P(k) => P(k+1)", "Conclusion: True for all natural numbers", "Limitation: Used to PROVE theorems, NOT to discover them!"] }
      ]
    },
    'ipt-w2': {
      title: "IPT102: Week 2 - Review to ASP.NET with Visual Studio",
      slides: [
        { title: "WEEK 2: (REVIEW TO ASP.NET WITH VISUAL STUDIO)", bullets: ["IPT102 - Integrative Programming and Technologies 2", "Quezon City University - College of Computer Science & IT", "Review to ASP.NET with Visual Studio"] },
        { title: "Learning Outcomes", bullets: ["To understand Dynamic websites", "To review different .NET Framework syntax", "To review Visual Studio .NET programming environment"] },
        { title: "Introduction to Dynamic Website", bullets: ["Displays different types of content every time a user views it", "Changes depending on viewer demographics, time of day, location, language settings", "Achieved through a combination of client-side and server-side scripting"] },
        { title: "Client-side vs Server-side Scripting", bullets: ["Client-side: executed by viewer's browser (e.g. JavaScript); renders UI changes in response to mouse clicks or keyboard", "Server-side: executed by server before sending content to browser (login pages, forms, carts)", "Combining both adapts content while reducing server load"] },
        { title: "Dynamic Website Elements & Benefits", bullets: ["Elements: format changing by screen size, language detection, custom recommendations, animations", "Benefits: personalized browsing, easier to maintain, superior user experience, elevated look"] },
        { title: "ASP.NET Page Syntax", bullets: ["Any HTML page can be renamed .aspx", "Directives: <%@ Page Language=\"C#\" %>", "Server controls: <asp:Button runat=\"server\">", "Code blocks: <script runat=\"server\">...</script>", "Data binding: <%# %>", "Server comments: <%----%>", "Render code: <%= %> (discouraged; use event handlers)"] },
        { title: "Server Controls & runat='server'", bullets: ["Small building blocks of GUI (textboxes, buttons, checkboxes, listboxes, labels)", "runat=\"server\" directive allows controls to be accessed in backend C# code", "5 Types: HTML controls, HTML Server controls, ASP.NET Server controls, Ajax Server controls, User/custom controls"] },
        { title: "Properties & Page Event Lifecycle", bullets: ["Tag attributes map to control properties; case-insensitive", "Execution Sequence: Page_Init -> Restore Control State -> Page_Load -> Control Events (Change / Action) -> Save Control State -> Render -> Page_Unload"] },
        { title: "Types of Controls for UI", bullets: ["HTML controls: native browser elements, purely client-side, invisible to web server", "HTML server controls: include runat=\"server\", automatic state management, server-side events", "4 Categories: Basic controls, List controls, Rich controls (<asp:calendar>), Validation controls"] }
      ]
    },
    'ipt-w3': {
      title: "IPT102: Week 3 - MVC Architecture and Routing",
      slides: [
        { title: "WEEK 3: UNDERSTANDING MVC ARCHITECTURE AND ROUTING", bullets: ["IPT102 - Integrative Programming and Technologies 2", "Quezon City University", "ASP.NET MVC 5 Architecture"] },
        { title: "Learning Outcomes", bullets: ["Understand and explore ASP.NET Core / MVC 5", "Understand how MVC architecture functions", "Describe the MVC folder structure", "Understand the importance of routing in MVC"] },
        { title: "ASP.NET MVC 5 Architecture", bullets: ["Web framework based on Model-View-Controller architecture", "Enables clean Separation of Concerns (SoC)", "Fast development and TDD (Test-Driven Development) friendly"] },
        { title: "Model, View, and Controller", bullets: ["Model: 'Model represents the data' (C# class holding database data)", "View: 'View is the User Interface' (HTML, CSS, Razor syntax)", "Controller: 'Controller is the request handler' (handles HTTP requests, returns views)"] },
        { title: "MVC Request Flow", bullets: ["User enters URL -> Webserver -> Routed to Controller -> Controller coordinates View & Models -> Returns response to Browser"] },
        { title: "MVC Default Folder Structure", bullets: ["App_Data: contains data files (LocalDB, .mdf, XML). IIS will NEVER serve files from App_Data directly!", "Controllers: contains controller classes (must end with 'Controller')", "Fonts: custom font files", "Models: model class files with public properties", "Scripts: JS/VBScript files (Bootstrap, jQuery, Modernizr)", "Views: .cshtml views organized by controller"] },
        { title: "Crucial Configuration Files", bullets: ["Global.asax: application-level events (Application_Start, BeginRequest, Error, Session_Start)", "Packages.config: managed by NuGet to track packages and versions", "Web.config: application-level configuration"] },
        { title: "Routing in MVC", bullets: ["Routing maps URL to physical controller class/action method (not physical disk files)", "Stored in RouteTable and processed by Routing Engine", "Configured in RouteConfig.cs (App_Start folder) and registered in Application_Start in Global.asax", "Default pattern: {controller}/{action}/{id}"] }
      ]
    },
    'ipt-w4': {
      title: "IPT102: Week 4 - Developing Controllers",
      slides: [
        { title: "WEEK 4: DEVELOPING CONTROLLERS", bullets: ["IPT102 - Integrative Programming and Technologies 2", "Quezon City University", "Action Methods & Selectors"] },
        { title: "Controllers in ASP.NET MVC", bullets: ["Handles incoming URL requests", "Derived from base class System.Web.Mvc.Controller", "Class name must end with 'Controller' (e.g. StudentController)", "Located in the Controllers folder"] },
        { title: "Adding a Controller & Scaffolding", bullets: ["Right click Controllers folder > Add > Controller", "Scaffolding: automatic code generation framework reducing setup time", "Templates include MVC 5 Controller - Empty"] },
        { title: "3 Strict Rules for Action Methods", bullets: ["1. Must be public (cannot be private or protected)", "2. Cannot be overloaded (routing cannot distinguish identical names)", "3. Cannot be a static method"] },
        { title: "Action Results Hierarchy", bullets: ["ViewResult: HTML and markup via View()", "ContentResult: string literal via Content()", "FileContentResult: file content via File()", "JsonResult: JSON for AJAX via Json()", "JavaScriptResult: JS script via JavaScript()", "RedirectResult / RedirectToRouteResult: redirection", "HttpUnauthorizedResult: 403 / 401 HTTP response"] },
        { title: "Action Selectors & Verbs", bullets: ["[ActionName('name')]: specifies different public URL action name", "[NonAction]: prevents a public method from being treated as an action method", "ActionVerbs: [HttpGet], [HttpPost], [HttpPut], [HttpDelete]", "Default without verb: handles HttpGet by default", "[AcceptVerbs(HttpVerbs.Post | HttpVerbs.Get)]: handles multiple verbs"] }
      ]
    },
    'ipt-w5': {
      title: "IPT102: Week 5 - Developing Views",
      slides: [
        { title: "WEEK 5: DEVELOPING VIEWS", bullets: ["IPT102 - Integrative Programming and Technologies 2", "Quezon City University", "Razor Syntax & View Engine"] },
        { title: "Creating Views with Razor Syntax", bullets: ["Mix of HTML and server-side code using C# or Visual Basic", "C# Razor syntax uses .cshtml file extension", "Visual Basic syntax uses .vbhtml file extension"] },
        { title: "Main Razor Syntax Rules for C#", bullets: ["Razor code blocks enclosed in @{ ... }", "Inline expressions start with @", "Code statements end with semicolon (;)", "Variables declared with 'var' keyword or data type", "C# code is strictly case sensitive", "Strings enclosed with double quotes"] },
        { title: "How Razor Works on the Server", bullets: ["Server executes Razor code FIRST before sending HTML to browser", "Creates dynamic HTML on the fly", "Client browser receives clean static HTML and never sees the Razor code"] },
        { title: "Variables, Conditionals & Loops", bullets: ["Variables: var greeting = 'Welcome'; DateTime today = DateTime.Today;", "If/Else: @{ if (DateTime.Now.Hour > 12) { txt = 'Good Evening'; } else { txt = 'Good Morning'; } }", "For Loop: @for (int i = 0; i < 5; i++) { <li>@i</li> }"] },
        { title: "Reading User Form Input", bullets: ["Input read via Request['fieldName']", "Tested with if (IsPost) condition", "Type conversion helper: num1.AsInt()"] }
      ]
    },
    'ipt-w6': {
      title: "IPT102: Week 6 - Developing Views – HTML Helpers",
      slides: [
        { title: "WEEK 6: DEVELOPING VIEWS – HTML HELPERS", bullets: ["IPT102 - Integrative Programming and Technologies 2", "Quezon City University", "Standard HTML Helpers"] },
        { title: "Using HTML Helpers", bullets: ["Extension methods of HtmlHelper class that render standard HTML controls", "Always start with @Html.", "Html is a property of type HtmlHelper in WebViewPage base class", "Reduces repetitive HTML and binds to model properties"] },
        { title: "Loosely Typed vs Strongly Typed Helpers", bullets: ["Loosely Typed: uses string names (e.g. @Html.TextBox('firstname'))", "Strongly Typed: uses lambda expressions with model properties (e.g. @Html.TextBoxFor(m => m.FirstName))"] },
        { title: "Master Helper Mapping Table", bullets: ["Html.ActionLink() -> <a>", "Html.TextBox() -> <input type='text'>", "Html.TextArea() -> <textarea>", "Html.Password() -> <input type='password'>", "Html.CheckBox() -> <input type='checkbox'>", "Html.RadioButton() -> <input type='radio'>", "Html.DropDownList() -> <select><option>", "Html.ListBox() -> <select multiple>", "Html.Label() -> <label>", "Html.Editor() -> dynamic input by data type"] },
        { title: "Helper Examples & Code Signatures", bullets: ["@Html.Label('User Name')", "@Html.TextBox('txtUsername')", "@Html.Password('Password')", "@Html.RadioButton('Gender', 'Male', true, new { id = 'male' })", "@Html.TextArea('Address')", "@Html.CheckBox('Dancing')", "@Html.DropDownList('ddlCourses', new SelectList(strCourses), 'Select Course')"] }
      ]
    },
    'pt101-w3': {
      title: "PT101: Week 3 - Memory Management",
      slides: [
        { title: "WEEK 3: MEMORY MANAGEMENT", bullets: ["PT101 - Platform Technologies", "Quezon City University"] },
        { title: "What is Memory Management?", bullets: ["Controlling and coordinating computer memory, assigning blocks to running programs to optimize system performance", "Resides in hardware, operating system, and applications", "Allocates memory efficiently to pack as many processes into memory as possible"] },
        { title: "Primary / Main Memory", bullets: ["Large array of words or bytes with unique addresses", "Provides fast storage accessed directly by the CPU", "For a program to execute, it must reside in main memory"] },
        { title: "OS Memory Management Activities", bullets: ["Tracks which parts of memory are in use and by whom", "Decides memory allocation in multiprogramming", "Allocates and de-allocates memory blocks upon process request and termination"] }
      ]
    },
    'sia-w2': {
      title: "SIA101: Week 2 - SIA Requirements & Elicitation",
      slides: [
        { title: "WEEK 2: SIA REQUIREMENTS", bullets: ["SIA101 - Systems Integration and Architecture 1", "Quezon City University - College of Computer Science & IT", "Academic Year 2026-2027"] },
        { title: "Learning Outcomes", bullets: ["Identify the stakeholder of the system and formulate their needs", "Compare and contrast the various requirements in modeling techniques", "Distinguish the difference between functional and non-functional requirements"] },
        { title: "Introduction to System Integration & Architecture", bullets: ["System Integration: combining different sub-system components to form a large system; ensures functionality of sub-systems", "System Architecture: conceptual model that defines a system; formal description and representation of a system", "Enterprise Application Integration (EAI), Data Integration, Electronic Data Integration"] },
        { title: "Requirement Elicitation Methodologies", bullets: ["Also referred to as 'Requirement gathering and specification'", "1. Brainstorming", "2. Document Analysis", "3. Focus Group", "4. Interface Analysis", "5. Observation", "6. Interview", "7. Prototyping (Rapid Throwaway, Evolutionary, Incremental, Extreme)", "8. Requirements Workshop", "9. Reverse Engineering", "10. Surveying"] },
        { title: "Surveying Best Practices", bullets: ["Communicate survey responses and objective", "Be aware of the survey population and its characteristics", "Keep survey short and ensure content is clear", "Avoid negative questions and complex concepts", "Elicit more details; avoid questions putting respondents on defensive"] },
        { title: "SIA Modeling: Interfaces & Messages", bullets: ["Interfaces: where communication between IT systems occurs", "Messages: IT systems connected via interfaces exchange messages", "UN/EDIFACT (3 parts: Event, Reference Data, Control Information)", "XML: eXtensible Markup Language (W3C standard, XML/EDI, XSL)", "Messages in UML: Two (2) Parts (1. Event, 2. Information)"] }
      ]
    },
    'sia-w3': {
      title: "SIA101: Week 3 - Modeling & Testing Tools",
      slides: [
        { title: "WEEK 3: SIA REQUIREMENTS", bullets: ["Use Case Model, Modeling Tools & Methodologies, Testing Tools & Methodologies", "SIA101 - Systems Integration and Architecture 1", "Quezon City University"] },
        { title: "Learning Outcomes", bullets: ["Explain the purpose and application of Use Case Model", "Determine other modelling tools used for system design construction", "Enumerate different testing tools and their purpose"] },
        { title: "Use Case Model", bullets: ["Model showing how different types of users interact with the system to solve a problem", "Unified Modeling Language (UML) standard", "5 Purposes: Specifying context, capturing requirements, validating architecture, implementing/generating test cases, developed by analysts & experts"] },
        { title: "Business Process Modelling (BPM)", bullets: ["Mainly used to map a workflow; helps visualize process and make better decisions", "10 Techniques: 1. BPMN, 2. UML Diagrams, 3. Flowcharts, 4. Data Flow Diagrams (DFD), 5. Role Activity Diagrams (RAD), 6. Role Interaction Diagrams (RID), 7. Gantt Charts, 8. IDEF, 9. Coloured Petri Nets (CPN), 10. Object-Oriented Methods"] },
        { title: "BPMN Building Blocks & Core Techniques", bullets: ["BPMN 4 Building Blocks: Flow objects, Connecting objects, Swimlanes, Artifacts", "DFD: shows flow of data or information from one place to another", "RAD: maps intangible roles and desired behavior within company", "RID: Sequence and Collaboration diagrams illustrating process interactions", "IDEF: Function modeling (Input, Control, Output, Mechanism)", "CPN: design, specification, simulation and verification", "Object-Oriented: encapsulation, inheritance, polymorphism, message-passing"] },
        { title: "Business Analysis Tools", bullets: ["Why BAs need tools: Track requirements, manage requirements, describe in detail, model diagrammatically, collaborate with teams", "3 Tool Types: 1. Requirement-related tools, 2. Modelling tools, 3. Collaboration tools"] }
      ]
    },
    'sia-w4': {
      title: "SIA101: Week 4 - Project Life-Cycle Phases",
      slides: [
        { title: "WEEK 4: PROJECT LIFE-CYCLE PHASES", bullets: ["SIA101 - Systems Integration and Architecture 1", "Project Life-Cycle Phases and Other Developmental Tools", "Quezon City University"] },
        { title: "Project Management Life Cycle (PMI)", bullets: ["Developed by Project Management Institute (PMI)", "5 Standard Phases: 1. Initiation, 2. Planning, 3. Execution, 4. Monitoring & Controlling, 5. Closure"] },
        { title: "Phase 1: Project Initiation", bullets: ["Conception & Initiation of project existence", "Deliverables: Business Case (why necessary & how it succeeds), Feasibility Study, Project Charter, Project Team, Project Office, Initiation Review"] },
        { title: "Phase 2: Project Planning & Goal Setting", bullets: ["Develops roadmap that everyone will follow", "SMART Method: Specific, Measurable, Actionable, Realistic, Timebound", "CLEAR Method: Collaborative, Limited, Emotional, Appreciable, Refinable", "Key Documents: Scope Statement, Work Breakdown Structure (WBS), Milestones, Gantt Chart, Communication Plan, Risk Management Plan"] },
        { title: "Risk Severity Matrix & Communication Plan", bullets: ["Communication Plan: Description, Frequency, Method, Audience, Owner", "Risk Matrix 5 Severity Levels: 5 (Severe), 4 (Significant), 3 (Moderate), 2 (Minor), 1 (Minimal) evaluated against Performance, Cost, Schedule"] },
        { title: "Phase 3: Execution & Phase 4: Monitoring", bullets: ["Execution: Develop team, assign resources, execute plans, procurement, PM directs, tracking, task execution, status meetings", "Monitoring: Measuring progression against plan; 4 KPIs: 1. Project Objectives, 2. Quality Deliverables, 3. Effort & Cost Tracking, 4. Project Performance"] },
        { title: "Phase 5: Project Closure", bullets: ["Formal recognition of project completion", "5 Steps: Transfer all deliverables, complete contracts, retrospective meeting, disband team, document all learnings"] }
      ]
    },
    'sia-w5': {
      title: "SIA101: Week 5 - Organizational Context",
      slides: [
        { title: "WEEK 5: SIA ORGANIZATIONAL CONTEXT", bullets: ["Business Processes, IT Environment, Organizational Culture", "SIA101 - Systems Integration and Architecture 1", "Quezon City University"] },
        { title: "What is a Business Process?", bullets: ["Series of steps performed by stakeholders to achieve a concrete goal", "Collection of linked tasks culminating in delivery of service/product", "Importance: Identify important tasks, improve efficiency, streamline communications, set approvals, prevent chaos, standardize procedures"] },
        { title: "7 Steps of Business Process Lifecycle", bullets: ["1. Define your goals (know purpose)", "2. Plan and map your process (strategies)", "3. Set actions and assign stakeholders (distribute tasks)", "4. Test the process (small scale environment)", "5. Implement the process (live environment)", "6. Monitor the results (review & analyze)", "7. Repeat (replicate & optimize)"] },
        { title: "Business Process Integration (BPI)", bullets: ["Automates business processes, integrates systems & services, enables secure sharing of data across applications", "Benefits: Services integration, simplified operations, lower costs, improved quality, enhanced productivity, standardized workflows"] },
        { title: "IT Environments & 3 Core Components", bullets: ["Integrated collection of technology components serving needs of users and owner", "1. Computing Platforms", "2. Applications/Apps", "3. Connectivity (Wireless, Wired, Personal, Local, Distance/DSL)", "Drivers: Needs (Functionality, Cost, Reliability), Rules (Laws, regulations, policies), Choices (Balance of all three)"] },
        { title: "Organizational Structures (4 Types)", bullets: ["Centralized (hierarchical, uniform) vs Decentralized (democratic, adaptable)", "1. Functional: bureaucratic, departmental divisions (specialization, economies of scale; slow)", "2. Divisional/Multidivisional: parent owns subsidiaries under same brand (local responsiveness; cost duplication)", "3. Flatarchy: startups, flattens chain of command (high autonomy; risk of chaos)", "4. Matrix: dual reporting managers, solid and dotted line reporting"] }
      ]
    },
    'sia-w6': {
      title: "SIA101: Week 6 - Acquisition and Sourcing",
      slides: [
        { title: "WEEK 6: SIA ACQUISITION AND SOURCING", bullets: ["Build and Buy, In-Sourcing, Procurement Guidelines", "SIA101 - Systems Integration and Architecture 1", "Quezon City University"] },
        { title: "Procurement Sourcing & Acquisition Process", bullets: ["Purchase requisition order submitted to procurement unit", "Sourcing: identify, assess, select, and engage best suppliers", "Acquisition 3 Stages: Requirements analysis, Request for Proposal (RFP), Vendor selection"] },
        { title: "Market Survey & Sourcing Requirements", bullets: ["Market survey evaluates: Quantities available, Quality, Pricing, Source & origin, Technical specifications", "Determining Source of Supply: Local, National, International", "Golden First Principle: Source all commodities locally and in-country as close to field as possible to reduce transport time and cost", "International Sourcing: used when unavailable locally; pre-positioned items, pre-supply agreements, peer NGOs"] },
        { title: "Vendor Selection: Sole vs Single Sourcing", bullets: ["Sole Source: ONLY ONE source is available (e.g. local water utility)", "Single Source: Multiple suppliers available, but organization purposefully selects ONE", "Request for Quotations (RFQ) & Sealed Bids: governed by bidding thresholds; tracked on Tracking Sheet for Sealed Bids; bid committees review"] },
        { title: "Vendor Screening Checklist", bullets: ["Preferred vendors must be screened before confirming orders or contracts", "1. Complete vendor questionnaire", "2. Check references (preferably from peer NGOs)", "3. Screen against anti-terrorism and debarred listings"] },
        { title: "In-Sourcing: Advantages & Disadvantages", bullets: ["Assignment of project to person/department within company rather than third party", "Advantages: Competitive advantage, Trade secrets, Organization culture, Cost, Direction & control", "Disadvantages: Overhead cost, Internal capabilities limitations, Loss of core business focus"] }
      ]
    }
  };

  let currentDeck = PRELOADED_DECKS['spi-w2'];
  let currentSlideIndex = 0;

  function loadPreloadedDeck(deckKey) {
    if (PRELOADED_DECKS[deckKey]) {
      currentDeck = PRELOADED_DECKS[deckKey];
      currentSlideIndex = 0;
      document.querySelectorAll('.tab-scroller .sub-tab').forEach(b => b.classList.remove('active'));
      const activeBtn = document.getElementById(`btn-deck-${deckKey.replace('-w', '')}`) || document.getElementById(`btn-deck-${deckKey}`);
      if (activeBtn) activeBtn.classList.add('active');
      renderSlide();
      playSound('flip');
      showToast(`Loaded: ${currentDeck.title}`);
    }
  }

  function renderSlide() {
    if (!currentDeck || !currentDeck.slides || !currentDeck.slides.length) return;
    const s = currentDeck.slides[currentSlideIndex];
    const deckTitleEl = document.getElementById('slide-deck-title');
    const slideNumEl = document.getElementById('slide-num-label');
    const slideTitleEl = document.getElementById('slide-title-text');
    const slideBodyEl = document.getElementById('slide-body-content');

    if (deckTitleEl) deckTitleEl.textContent = currentDeck.title;
    if (slideNumEl) slideNumEl.textContent = `Slide ${currentSlideIndex + 1} of ${currentDeck.slides.length}`;
    if (slideTitleEl) slideTitleEl.textContent = s.title;

    if (slideBodyEl) {
      if (s.bullets && s.bullets.length) {
        slideBodyEl.innerHTML = `<ul>${s.bullets.map(b => `<li>${formatMarkdown(b)}</li>`).join('')}</ul>`;
      } else {
        slideBodyEl.innerHTML = `<p style="color: var(--text-subtle);">No text content on this slide.</p>`;
      }
    }
  }

  function nextSlide() {
    if (!currentDeck || !currentDeck.slides) return;
    currentSlideIndex = (currentSlideIndex + 1) % currentDeck.slides.length;
    renderSlide();
    playSound('flip');
    triggerHaptic([15]);
  }

  function prevSlide() {
    if (!currentDeck || !currentDeck.slides) return;
    currentSlideIndex = (currentSlideIndex - 1 + currentDeck.slides.length) % currentDeck.slides.length;
    renderSlide();
    playSound('flip');
    triggerHaptic([15]);
  }

  function createCardFromCurrentSlide() {
    if (!currentDeck || !currentDeck.slides) return;
    const s = currentDeck.slides[currentSlideIndex];
    const newCard = {
      id: `fc-custom-${Date.now()}`,
      checkpointId: state.activeCheckpoint,
      week: "Slide Deck",
      question: s.title,
      answer: s.bullets && s.bullets.length ? s.bullets.join("\n• ") : "No slide bullets",
      tag: "Custom Slide Card"
    };

    REVIEWER_DATA.flashcards.unshift(newCard);
    showToast('✨ Slide converted to interactive Flashcard!');
    playSound('correct');
    triggerHaptic([30, 40]);
  }

  // Client-Side In-Browser PPTX Parser using JSZip
  async function handlePptxUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (typeof JSZip === 'undefined') {
      showToast('Loading parser library...');
      return;
    }

    try {
      showToast('Extracting PPTX slides...');
      const zip = await JSZip.loadAsync(file);
      const slideEntries = Object.keys(zip.files).filter(f => /^ppt\/slides\/slide\d+\.xml$/.test(f));

      // Natural sort
      slideEntries.sort((a, b) => {
        const numA = parseInt(a.match(/slide(\d+)\.xml/)[1], 10);
        const numB = parseInt(b.match(/slide(\d+)\.xml/)[1], 10);
        return numA - numB;
      });

      if (!slideEntries.length) {
        showToast('No slides found in .pptx file.');
        return;
      }

      const extractedSlides = [];
      const parser = new DOMParser();

      for (let i = 0; i < slideEntries.length; i++) {
        const xmlText = await zip.files[slideEntries[i]].async('text');
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const paragraphs = xmlDoc.getElementsByTagName('a:p');
        const lines = [];

        for (let p of paragraphs) {
          const textRuns = p.getElementsByTagName('a:t');
          let fullLine = '';
          for (let r of textRuns) {
            fullLine += r.textContent;
          }
          fullLine = fullLine.trim();
          if (fullLine) lines.push(fullLine);
        }

        const title = lines[0] || `Slide ${i + 1}`;
        const bullets = lines.slice(1);
        extractedSlides.push({ title, bullets });
      }

      currentDeck = {
        title: file.name.replace('.pptx', ''),
        slides: extractedSlides
      };
      currentSlideIndex = 0;
      renderSlide();
      playSound('checkpoint');
      showToast(`🎉 Loaded ${extractedSlides.length} slides from ${file.name}!`);
    } catch (err) {
      console.error('PPTX parse error:', err);
      showToast('Error parsing PPTX file.');
    }
  }

  // Drag and drop setup for PPTX
  function setupDragAndDrop() {
    const dropzone = document.getElementById('pptx-dropzone');
    if (!dropzone) return;

    ['dragenter', 'dragover'].forEach(name => {
      dropzone.addEventListener(name, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(name => {
      dropzone.addEventListener(name, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      }, false);
    });

    dropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files.length) {
        handlePptxUpload({ target: { files } });
      }
    });
  }

  // Init App
  function init() {
    loadState();
    const badgeEl = document.getElementById('header-subject-name');
    if (badgeEl) badgeEl.textContent = state.activeSubject;

    renderCheckpointNav();
    updateQuickStats();
    renderHub();
    renderDigest();
    renderFlashcard();
    renderSlide();
    setupTouchGestures();
    setupDragAndDrop();
  }

  // Force Refresh & Cache Busting Helper
  function forceRefresh() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('qcu_reviewer_portal_state_v1');
      if ('caches' in window) {
        caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
      }
    } catch (e) {}
    showToast('Clearing cache and loading v2.5...');
    setTimeout(() => {
      const cleanUrl = window.location.origin + window.location.pathname + '?v=' + Date.now();
      window.location.href = cleanUrl;
    }, 200);
  }

  // Expose API to window for inline HTML onclick handlers
  window.reviewerApp = {
    forceRefresh,
    switchView,
    selectSubject,
    toggleActiveSubject,
    selectCheckpoint,
    flipFlashcard,
    markFlashcard,
    nextFlashcard,
    prevFlashcard,
    selectQuizOption,
    submitQuizAnswer,
    submitOrNextQuiz,
    prevQuizQuestion,
    shuffleAndGenerateQuiz,
    restartQuiz,
    startCramMode,
    answerCram,
    setCramSubject,
    toggleSound,
    loadPreloadedDeck,
    renderSlide,
    nextSlide,
    prevSlide,
    createCardFromCurrentSlide,
    handlePptxUpload
  };

  document.addEventListener('DOMContentLoaded', init);
})();

