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
    if (code !== 'SPI101' && code !== 'MS101') {
      showToast(`${code} syllabus slot ready! Add notes when available.`);
      return;
    }
    state.activeSubject = code;
    state.currentCardIndex = 0;
    state.currentQuizIndex = 0;
    state.quizScore = 0;

    const firstCp = REVIEWER_DATA.checkpoints.find(c => c.subject === code);
    const badgeEl = document.getElementById('header-subject-name');
    if (badgeEl) badgeEl.textContent = code;

    renderCheckpointNav();
    renderHub();
    showToast(`Switched to ${code} Reviewer 📚`);
    switchView('digest');
    saveState();
  }

  function toggleActiveSubject() {
    if (state.activeSubject === 'SPI101') {
      selectSubject('MS101');
    } else {
      selectSubject('SPI101');
    }
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
    'pt101-w3': {
      title: "PT101: Week 3 - Memory Management",
      slides: [
        { title: "WEEK 3: MEMORY MANAGEMENT", bullets: ["PT101 - Platform Technologies", "Quezon City University"] },
        { title: "What is Memory Management?", bullets: ["Controlling and coordinating computer memory, assigning blocks to running programs to optimize system performance", "Resides in hardware, operating system, and applications", "Allocates memory efficiently to pack as many processes into memory as possible"] },
        { title: "Primary / Main Memory", bullets: ["Large array of words or bytes with unique addresses", "Provides fast storage accessed directly by the CPU", "For a program to execute, it must reside in main memory"] },
        { title: "OS Memory Management Activities", bullets: ["Tracks which parts of memory are in use and by whom", "Decides memory allocation in multiprogramming", "Allocates and de-allocates memory blocks upon process request and termination"] }
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

  // Expose API to window for inline HTML onclick handlers
  window.reviewerApp = {
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
    restartQuiz,
    startCramMode,
    answerCram,
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

