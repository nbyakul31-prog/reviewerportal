// ==============================================================================
// QCU BSIT REVIEWER PORTAL - APPLICATION LOGIC ENGINE
// Handles: Offline state, Web Audio FX, Flashcard engine, Quiz engine, Cram mode
// ==============================================================================

(function () {
  'use strict';

  // State Management with LocalStorage
  const STORAGE_KEY = 'qcu_reviewer_portal_state_v1';
  
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
    cramActive: false
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
      const isActive = sub.code === 'SPI101';
      return `
        <div class="subject-card ${isActive ? 'active-subject' : ''}" onclick="window.reviewerApp.selectSubject('${sub.code}')">
          <div class="subject-header">
            <span class="subject-code">${sub.code}</span>
            <span class="subject-units">${sub.units} Units</span>
          </div>
          <div class="subject-title">${sub.title}</div>
          <div class="subject-sched">🕒 ${sub.schedule}</div>
          <span class="subject-badge ${isActive ? 'badge-ready' : 'badge-slot'}">
            ${sub.badge}
          </span>
        </div>
      `;
    }).join('');
  }

  // Render Chronological Digest
  function renderDigest() {
    const cp = REVIEWER_DATA.checkpoints.find(c => c.id === state.activeCheckpoint) || REVIEWER_DATA.checkpoints[0];
    const container = document.getElementById('digest-content-container');
    const headerTitle = document.getElementById('digest-header-title');
    const headerDesc = document.getElementById('digest-header-desc');

    if (headerTitle) headerTitle.textContent = `${cp.week}: ${cp.title}`;
    if (headerDesc) headerDesc.textContent = cp.description;

    if (!container) return;

    container.innerHTML = cp.digest.map(item => `
      <div class="digest-card">
        <h3>${item.heading}</h3>
        <ul class="digest-points">
          ${item.points.map(pt => `<li>${formatMarkdown(pt)}</li>`).join('')}
        </ul>
        ${item.trap ? `<div class="exam-alert">⚠️ <strong>Exam Trap:</strong> ${formatMarkdown(item.trap)}</div>` : ''}
        ${item.tldr ? `<div class="tldr-box">💡 <strong>Quick Takeaway:</strong> ${formatMarkdown(item.tldr)}</div>` : ''}
      </div>
    `).join('');
  }

  function formatMarkdown(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
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
    if (cardFront) cardFront.textContent = card.question;
    if (cardBack) cardBack.textContent = card.answer;
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

  // Quiz Engine
  function getCurrentQuizQuestions() {
    const quizGroup = REVIEWER_DATA.quizzes.find(q => q.checkpointId === state.activeCheckpoint);
    return quizGroup ? quizGroup.questions : [];
  }

  function renderQuizQuestion() {
    const questions = getCurrentQuizQuestions();
    const container = document.getElementById('quiz-view-container');
    if (!container) return;

    if (state.currentQuizIndex >= questions.length) {
      renderQuizResult();
      return;
    }

    const q = questions[state.currentQuizIndex];
    const progressPercent = ((state.currentQuizIndex) / questions.length) * 100;
    const progressFill = document.getElementById('quiz-progress-fill');
    if (progressFill) progressFill.style.width = `${progressPercent}%`;

    const quizProgressLabel = document.getElementById('quiz-progress-label');
    if (quizProgressLabel) quizProgressLabel.textContent = `Question ${state.currentQuizIndex + 1} of ${questions.length}`;

    state.quizSubmitted = false;
    state.quizSelectedAnswer = null;

    const letters = ['A', 'B', 'C', 'D'];
    const optionsHtml = q.options.map((opt, idx) => `
      <button class="option-btn" id="opt-btn-${idx}" onclick="window.reviewerApp.selectQuizOption(${idx})">
        <span class="option-letter">${letters[idx]}</span>
        <span>${opt}</span>
      </button>
    `).join('');

    container.innerHTML = `
      <div class="question-card">
        <div class="question-title">${q.question}</div>
        <div class="options-list">
          ${optionsHtml}
        </div>
        <div class="explanation-box" id="explanation-box"></div>
      </div>
      <div class="quiz-footer-actions">
        <button class="primary-btn" id="quiz-action-btn" onclick="window.reviewerApp.submitQuizAnswer()">
          Confirm Answer
        </button>
      </div>
    `;
  }

  function selectQuizOption(index) {
    if (state.quizSubmitted) return;
    state.quizSelectedAnswer = index;
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

  function submitQuizAnswer() {
    const questions = getCurrentQuizQuestions();
    const q = questions[state.currentQuizIndex];
    const btn = document.getElementById('quiz-action-btn');

    if (state.quizSubmitted) {
      // Go to next question
      state.currentQuizIndex += 1;
      renderQuizQuestion();
      return;
    }

    if (state.quizSelectedAnswer === null) {
      showToast('Please select an option first!');
      triggerHaptic([50]);
      return;
    }

    state.quizSubmitted = true;
    const isCorrect = state.quizSelectedAnswer === q.correct;
    const selectedBtn = document.getElementById(`opt-btn-${state.quizSelectedAnswer}`);
    const correctBtn = document.getElementById(`opt-btn-${q.correct}`);
    const expBox = document.getElementById('explanation-box');

    if (isCorrect) {
      state.quizScore += 1;
      selectedBtn.classList.add('correct');
      playSound('correct');
      triggerHaptic([30, 40, 30]);
    } else {
      selectedBtn.classList.add('wrong');
      if (correctBtn) correctBtn.classList.add('correct');
      playSound('wrong');
      triggerHaptic([80, 50, 80]);
    }

    if (expBox) {
      expBox.className = `explanation-box show ${isCorrect ? 'correct-exp' : 'wrong-exp'}`;
      expBox.innerHTML = `<strong>${isCorrect ? 'Correct! 🎯' : 'Incorrect 💡'}</strong>: ${q.explanation}`;
    }

    if (btn) {
      btn.textContent = state.currentQuizIndex + 1 >= questions.length ? 'See Final Score' : 'Next Question →';
    }
  }

  function renderQuizResult() {
    const questions = getCurrentQuizQuestions();
    const container = document.getElementById('quiz-view-container');
    const progressFill = document.getElementById('quiz-progress-fill');
    if (progressFill) progressFill.style.width = '100%';

    const percent = Math.round((state.quizScore / questions.length) * 100);
    const passed = percent >= 70;

    if (passed && !state.completedCheckpoints.includes(state.activeCheckpoint)) {
      state.completedCheckpoints.push(state.activeCheckpoint);
      saveState();
      playSound('checkpoint');
    }

    container.innerHTML = `
      <div class="quiz-result-card">
        <div class="score-circle">
          <div class="score-num">${state.quizScore}</div>
          <div class="score-total">/ ${questions.length}</div>
        </div>
        <h2 style="font-size: 1.3rem; margin-bottom: 6px;">${passed ? '🎉 Checkpoint Mastered!' : 'Keep Going! 💪'}</h2>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 20px;">
          You scored <strong>${percent}%</strong> in ${state.activeCheckpoint.toUpperCase()}.
          ${passed ? 'This checkpoint badge is now recorded in your profile.' : 'Review the digest and try again to unlock your mastery badge!'}
        </p>
        <div style="display: flex; gap: 10px; justify-content: center;">
          <button class="sub-tab" onclick="window.reviewerApp.restartQuiz()">Retake Quiz</button>
          <button class="primary-btn" onclick="window.reviewerApp.switchView('digest')">Review Notes</button>
        </div>
      </div>
    `;
  }

  function restartQuiz() {
    state.currentQuizIndex = 0;
    state.quizScore = 0;
    state.quizSelectedAnswer = null;
    state.quizSubmitted = false;
    renderQuizQuestion();
  }

  // Cram Mode (60s Drills)
  function startCramMode() {
    state.cramActive = true;
    state.cramTimer = 60;
    state.cramScore = 0;
    
    const container = document.getElementById('cram-container');
    if (state.cramInterval) clearInterval(state.cramInterval);

    state.cramInterval = setInterval(() => {
      state.cramTimer -= 1;
      const timerEl = document.getElementById('cram-timer-val');
      if (timerEl) timerEl.textContent = `${state.cramTimer}s`;

      if (state.cramTimer <= 0) {
        endCramMode();
      }
    }, 1000);

    renderNextCramQuestion();
  }

  function renderNextCramQuestion() {
    // Pick random question from all checkpoints
    const allQuestions = REVIEWER_DATA.quizzes.flatMap(q => q.questions);
    const randomQ = allQuestions[Math.floor(Math.random() * allQuestions.length)];
    const container = document.getElementById('cram-card-slot');
    if (!container) return;

    const letters = ['A', 'B', 'C', 'D'];
    container.innerHTML = `
      <div class="question-card" style="margin-bottom: 10px;">
        <div class="question-title">${randomQ.question}</div>
        <div class="options-list">
          ${randomQ.options.map((opt, idx) => `
            <button class="option-btn" onclick="window.reviewerApp.answerCram(${idx}, ${randomQ.correct})">
              <span class="option-letter">${letters[idx]}</span>
              <span>${opt}</span>
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
            You answered <strong>${state.cramScore}</strong> questions correctly in 60 seconds.
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

    document.querySelectorAll('.cp-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cp === cpId);
    });

    if (state.activeView === 'digest') renderDigest();
    if (state.activeView === 'flashcards') renderFlashcard();
    if (state.activeView === 'quiz') renderQuizQuestion();
  }

  function selectSubject(code) {
    if (code !== 'SPI101') {
      showToast(`${code} syllabus slot ready! Add notes when available.`);
      return;
    }
    state.activeSubject = code;
    showToast('Switched to SPI101 Reviewer');
    switchView('digest');
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

  // Init App
  function init() {
    loadState();
    updateQuickStats();
    renderHub();
    renderDigest();
    renderFlashcard();
    setupTouchGestures();

    // Set active checkpoint buttons
    document.querySelectorAll('.cp-btn').forEach(btn => {
      btn.addEventListener('click', () => selectCheckpoint(btn.dataset.cp));
    });
  }

  // Expose API to window for inline HTML onclick handlers
  window.reviewerApp = {
    switchView,
    selectSubject,
    selectCheckpoint,
    flipFlashcard,
    markFlashcard,
    nextFlashcard,
    prevFlashcard,
    selectQuizOption,
    submitQuizAnswer,
    restartQuiz,
    startCramMode,
    answerCram,
    toggleSound
  };

  document.addEventListener('DOMContentLoaded', init);
})();
