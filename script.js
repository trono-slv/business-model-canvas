/* ============================================
   BMC QUIZ - JavaScript
   Business Model Canvas Quiz
   Dott. Salvatore Trono
   ============================================ */

/**
 * CONFIGURAZIONE
 * MODIFICARE SOLO QUESTI VALORI
 */
const CONFIG = {
  NUM_DOMANDE: 30,          // Numero totale di domande disponibili
  DURATA_TIMER: 3600,       // Durata in secondi (60 min = 3600s)
  SOGLIA_ECCELLENTE: 80,   // Soglia percentuale per giudizio Eccellente
  SOGLIA_SUFFICIENTE: 60,   // Soglia percentuale per giudizio Sufficiente
  ALERT_TIMER_SOGLIA: 300   // Secondi rimanenti per avviso timer (5 min = 300s)
};

/* ============================================
   PANIERE DOMANDE
   Categoria: "Livello Base" = id 1-15
   Categoria: "Livello Intermedio" = id 16-30
   ============================================ */
const PANIERE = [
  {
    id: 1,
    category: "Livello Base",
    q: "Perché un Business Plan tradizionale può generare falsa sicurezza in una startup?",
    a: {
      A: "Perché può trasformare ipotesi non validate in previsioni apparentemente certe",
      B: "Perché impedisce sempre di ottenere finanziamenti",
      C: "Perché elimina la necessità di conoscere il cliente",
      D: "Perché sostituisce automaticamente il prodotto"
    },
    correct: "A",
    exp: "Il Business Plan tradizionale può dare l'impressione di certezza se tratta come dati reali ipotesi non ancora validate."
  },
  {
    id: 2,
    category: "Livello Base",
    q: "Qual è la differenza principale tra idea e modello di business?",
    a: {
      A: "L'idea riguarda solo il prezzo, il modello solo la comunicazione",
      B: "L'idea è uno spunto iniziale, il modello descrive come l'impresa crea, distribuisce e cattura valore",
      C: "L'idea è sempre validata, il modello no",
      D: "L'idea coincide con il bilancio economico"
    },
    correct: "B",
    exp: "L'idea è uno spunto; il modello di business descrive il sistema con cui l'impresa crea, distribuisce e cattura valore."
  },
  {
    id: 3,
    category: "Livello Base",
    q: "Il Business Model Canvas è composto da:",
    a: {
      A: "5 blocchi",
      B: "7 blocchi",
      C: "9 blocchi",
      D: "12 blocchi"
    },
    correct: "C",
    exp: "Il Business Model Canvas di Osterwalder è composto da 9 blocchi collegati tra loro."
  },
  {
    id: 4,
    category: "Livello Base",
    q: "Quale tra i seguenti è un blocco del Business Model Canvas?",
    a: {
      A: "Piano ferie",
      B: "Organigramma gerarchico",
      C: "Bilancio consuntivo",
      D: "Segmenti di clientela"
    },
    correct: "D",
    exp: "I Segmenti di clientela sono uno dei blocchi fondamentali del BMC."
  },
  {
    id: 5,
    category: "Livello Base",
    q: "Nel Business Model Canvas, la \"Proposta di Valore\" descrive:",
    a: {
      A: "Il motivo per cui un cliente dovrebbe scegliere l'offerta dell'impresa",
      B: "Solo il prezzo finale del prodotto",
      C: "Il numero di dipendenti necessari",
      D: "Il capitale sociale dell'azienda"
    },
    correct: "A",
    exp: "La proposta di valore chiarisce perché un cliente dovrebbe scegliere una determinata offerta."
  },
  {
    id: 6,
    category: "Livello Base",
    q: "In un contesto innovativo, l'incertezza indica:",
    a: {
      A: "Un errore contabile già misurato",
      B: "Una situazione in cui non si conoscono ancora con precisione clienti, bisogni o mercato",
      C: "Una perdita economica già avvenuta",
      D: "Un problema esclusivamente legale"
    },
    correct: "B",
    exp: "Nei mercati innovativi spesso non sono ancora noti clienti, problemi, comportamenti e condizioni di mercato."
  },
  {
    id: 7,
    category: "Livello Base",
    q: "Il Lean Canvas di Ash Maurya nasce come:",
    a: {
      A: "Documento fiscale per startup",
      B: "Piano commerciale per grandi imprese mature",
      C: "Rielaborazione più operativa e orientata al rischio del Business Model Canvas",
      D: "Strumento per disegnare il logo aziendale"
    },
    correct: "C",
    exp: "Il Lean Canvas rielabora il BMC in chiave più operativa, sperimentale e orientata ai rischi."
  },
  {
    id: 8,
    category: "Livello Base",
    q: "Nell'approccio Lean Startup, il ciclo Build–Measure–Learn serve a:",
    a: {
      A: "Scrivere un piano definitivo prima di incontrare i clienti",
      B: "Evitare qualsiasi modifica al prodotto",
      C: "Sostituire completamente la contabilità",
      D: "Testare ipotesi, misurare risultati e apprendere in modo iterativo"
    },
    correct: "D",
    exp: "Build–Measure–Learn è il ciclo iterativo della Lean Startup per costruire, misurare e apprendere."
  },
  {
    id: 9,
    category: "Livello Base",
    q: "Che cosa significa MVP, Minimum Viable Product?",
    a: {
      A: "La versione minima utile per apprendere qualcosa da clienti o utenti reali",
      B: "Il prodotto finale completo e perfetto",
      C: "Il prototipo più costoso possibile",
      D: "Una versione scadente del prodotto"
    },
    correct: "A",
    exp: "L'MVP è il minimo necessario per apprendere da clienti reali, non una versione scadente."
  },
  {
    id: 10,
    category: "Livello Base",
    q: "Quale tra i seguenti è un esempio possibile di MVP?",
    a: {
      A: "Un bilancio annuale certificato",
      B: "Una landing page che testa l'interesse dei clienti",
      C: "Un contratto di assunzione",
      D: "Una brochure interna per i dipendenti"
    },
    correct: "B",
    exp: "Una landing page può validare interesse, conversioni o disponibilità a lasciare un contatto."
  },
  {
    id: 11,
    category: "Livello Base",
    q: "Nel Value Proposition Canvas, il Customer Profile comprende:",
    a: {
      A: "Costi, ricavi e investitori",
      B: "Canali, partner e attività chiave",
      C: "Jobs, Pains e Gains del cliente",
      D: "Brevetti, marchi e licenze"
    },
    correct: "C",
    exp: "Il Customer Profile comprende Jobs, Pains e Gains del cliente."
  },
  {
    id: 12,
    category: "Livello Base",
    q: "I \"Pains\" nel Value Proposition Canvas rappresentano:",
    a: {
      A: "Le caratteristiche tecniche del prodotto",
      B: "I benefici desiderati dagli investitori",
      C: "Le attività operative interne",
      D: "Problemi, ostacoli o frustrazioni vissute dal cliente"
    },
    correct: "D",
    exp: "I Pains sono problemi, ostacoli, risi chi o frustrazioni vissute dal cliente."
  },
  {
    id: 13,
    category: "Livello Base",
    q: "Quale tra i seguenti è un errore tipico nella progettazione della proposta di valore?",
    a: {
      A: "Partire da una soluzione senza aver compreso bene il problema del cliente",
      B: "Osservare il comportamento dei clienti",
      C: "Formulare ipotesi da validare",
      D: "Confrontare bisogni e benefici attesi"
    },
    correct: "A",
    exp: "Progettare una soluzione senza aver compreso il problema è un errore tipico di value proposition design."
  },
  {
    id: 14,
    category: "Livello Base",
    q: "Le vanity metrics sono pericolose perché:",
    a: {
      A: "Sono sempre illegali",
      B: "Possono apparire positive ma non aiutano davvero a prendere decisioni utili",
      C: "Misurano solo i costi di produzione",
      D: "Sono usate esclusivamente nella contabilità fiscale"
    },
    correct: "B",
    exp: "Le vanity metrics sembrano positive ma non orientano decisioni concrete."
  },
  {
    id: 15,
    category: "Livello Base",
    q: "Un pivot è:",
    a: {
      A: "Una reazione impulsiva a una critica ricevuta",
      B: "L'abbandono definitivo dell'impresa",
      C: "Una modifica strategica basata su evidenze raccolte",
      D: "Una campagna pubblicitaria più costosa"
    },
    correct: "C",
    exp: "Il pivot è un cambiamento strategico fondato su evidenze, non una reazione emotiva."
  },
  {
    id: 16,
    category: "Livello Intermedio",
    q: "Una startup sviluppa un'app senza aver verificato se il problema esiste davvero per il cliente. Quale rischio sta trascurando per primo?",
    a: {
      A: "Rischio di desiderabilità",
      B: "Rischio fiscale",
      C: "Rischio di magazzino",
      D: "Rischio di rendicontazione"
    },
    correct: "A",
    exp: "Prima di costruire bisogna capire se il cliente desidera davvero una soluzione al problema."
  },
  {
    id: 17,
    category: "Livello Intermedio",
    q: "Nell'approccio risk-first, l'ordine più corretto di indagine è:",
    a: {
      A: "Monetizzazione, logo, ufficio",
      B: "Desiderabilità, fattibilità, sostenibilità",
      C: "Sostenibilità, pubblicità, assunzioni",
      D: "Fatturato, utile, dividendi"
    },
    correct: "B",
    exp: "L'approccio risk-first parte dalla desiderabilità, poi verifica fattibilità e sostenibilità."
  },
  {
    id: 18,
    category: "Livello Intermedio",
    q: "Perché Facebook, nella fase iniziale ad Harvard, può essere letto come esempio di validazione della desiderabilità?",
    a: {
      A: "Perché monetizzò immediatamente con abbonamenti premium",
      B: "Perché partì da un mercato globale già maturo",
      C: "Perché osservò forte adozione comportamentale in un perimetro inizialmente ristretto",
      D: "Perché evitò qualsiasi espansione successiva"
    },
    correct: "C",
    exp: "Facebook validò inizialmente l'interesse osservando comportamenti reali in un contesto ristretto."
  },
  {
    id: 19,
    category: "Livello Intermedio",
    q: "Quale affermazione descrive meglio il ruolo del Business Model Canvas in ottica Lean?",
    a: {
      A: "È un modulo estetico da compilare una sola volta",
      B: "È una mappa di ipotesi collegate da verificare con esperimenti",
      C: "È un documento valido solo per il commercialista",
      D: "È un elenco di mansioni interne"
    },
    correct: "B",
    exp: "In ottica Lean, il BMC è una mappa di ipotesi da testare, non un modulo statico."
  },
  {
    id: 20,
    category: "Livello Intermedio",
    q: "Una landing page riceve molte visite ma pochissime iscrizioni. Quale metrica è più utile per valutare l'interesse reale?",
    a: {
      A: "Numero totale di colori presenti nella pagina",
      B: "Numero di slide nella presentazione aziendale",
      C: "Numero assoluto di visualizzazioni non contestualizzate",
      D: "Tasso di conversione da visitatore a iscritto"
    },
    correct: "D",
    exp: "Il tasso di conversione misura un comportamento più significativo delle semplici visite."
  },
  {
    id: 21,
    category: "Livello Intermedio",
    q: "Quale formulazione rappresenta meglio un'ipotesi falsificabile?",
    a: {
      A: "\"I giovani professionisti freelance hanno difficoltà a gestire le fatture e almeno il 20% lascerà l'email su una landing page dedicata entro 7 giorni\"",
      B: "\"Il nostro prodotto sarà sicuramente apprezzato da tutti\"",
      C: "\"Il mercato è interessante\"",
      D: "\"La nostra idea è innovativa\""
    },
    correct: "A",
    exp: "L'ipotesi è falsificabile perché indica segmento, problema, comportamento misurabile e soglia temporale."
  },
  {
    id: 22,
    category: "Livello Intermedio",
    q: "Nel progettare un esperimento, perché è importante definire prima una soglia di successo?",
    a: {
      A: "Per evitare interpretazioni arbitrarie dei risultati dopo il test",
      B: "Per aumentare automaticamente il fatturato",
      C: "Per eliminare la necessità di raccogliere dati",
      D: "Per impedire qualunque modifica futura"
    },
    correct: "A",
    exp: "Una soglia definita prima del test impedisce di interpretare i dati in modo opportunistico."
  },
  {
    id: 23,
    category: "Livello Intermedio",
    q: "Nel caso Netflix, il passaggio da DVD a streaming può essere interpretato come:",
    a: {
      A: "Un rifiuto dell'innovazione digitale",
      B: "Una scelta casuale non collegata agli utenti",
      C: "Un adattamento del modello di business a tecnologie, comportamenti e dati di consumo",
      D: "Una semplice modifica del logo"
    },
    correct: "C",
    exp: "Netflix è un esempio di evoluzione del modello basata su tecnologia, dati e comportamenti degli utenti."
  },
  {
    id: 24,
    category: "Livello Intermedio",
    q: "Quale tra le seguenti è una metrica actionable?",
    a: {
      A: "Numero generico di \"like\" senza collegamento a un comportamento rilevante",
      B: "Numero di visualizzazioni non segmentate",
      C: "Retention degli utenti dopo 30 giorni",
      D: "Numero di comunicati stampa pubblicati"
    },
    correct: "C",
    exp: "La retention a 30 giorni misura se gli utenti continuano a usare il prodotto."
  },
  {
    id: 25,
    category: "Livello Intermedio",
    q: "Nel Lean Canvas, il blocco \"Problem\" aiuta principalmente a:",
    a: {
      A: "Stabilire la sede legale",
      B: "Chiarire quale problema rilevante si intende risolvere per un segmento specifico",
      C: "Calcolare le ferie del personale",
      D: "Definire il colore del marchio"
    },
    correct: "B",
    exp: "Il blocco Problem serve a chiarire il problema rilevante di uno specifico segmento cliente."
  },
  {
    id: 26,
    category: "Livello Intermedio",
    q: "Un esperimento \"Wizard of Oz\" consiste nel:",
    a: {
      A: "Simulare manualmente dietro le quinte un servizio che all'utente appare automatizzato",
      B: "Vendere un prodotto già industrializzato",
      C: "Sostituire ogni test con un sondaggio teorico",
      D: "Eliminare il contatto con i clienti"
    },
    correct: "A",
    exp: "Nel Wizard of Oz l'esperienza sembra automatizzata, ma viene gestita manualmente dietro le quinte."
  },
  {
    id: 27,
    category: "Livello Intermedio",
    q: "Quale situazione descrive meglio il Problem-Solution Fit?",
    a: {
      A: "L'azienda ha assunto un team commerciale completo",
      B: "Il prodotto è già quotato in borsa",
      C: "Esiste evidenza che una soluzione proposta risponde a un problema reale di uno specifico segmento",
      D: "L'impresa ha scelto il proprio nome definitivo"
    },
    correct: "C",
    exp: "Il Problem-Solution Fit indica coerenza validata tra problema reale e soluzione proposta."
  },
  {
    id: 28,
    category: "Livello Intermedio",
    q: "Quale tra i seguenti è un esempio di vanity metric?",
    a: {
      A: "Costo di acquisizione cliente per canale",
      B: "Percentuale di clienti che riacquistano",
      C: "Tasso di conversione da prova gratuita a pagamento",
      D: "Numero totale di download non collegato ad attivazione o uso reale"
    },
    correct: "D",
    exp: "I download totali, se non collegati ad attivazione o uso reale, possono essere metriche di vanità."
  },
  {
    id: 29,
    category: "Livello Intermedio",
    q: "Nel contesto italiano, lo status di startup innovativa è collegato a:",
    a: {
      A: "Una disciplina normativa specifica e all'iscrizione nella sezione speciale del Registro delle Imprese",
      B: "Una semplice autocertificazione commerciale senza requisiti",
      C: "Un obbligo valido per tutte le imprese individuali",
      D: "Una licenza concessa automaticamente alle attività turistiche"
    },
    correct: "A",
    exp: "In Italia la startup innovativa è regolata da una disciplina specifica e dall'iscrizione nella sezione speciale del Registro Imprese."
  },
  {
    id: 30,
    category: "Livello Intermedio",
    q: "Se un test produce risultati ambigui, quale comportamento è più coerente con la fase Learn?",
    a: {
      A: "Ignorare i dati e procedere comunque",
      B: "Dichiarare fallita l'impresa",
      C: "Ripetere o riprogettare l'esperimento per ridurre l'ambiguità",
      D: "Cambiare completamente mercato senza analisi"
    },
    correct: "C",
    exp: "Se i dati sono ambigui, è corretto riprogettare o ripetere il test per ottenere apprendimento più affidabile."
  }
];

/* ============================================
   STATO APPLICATIVO
   ============================================ */
let state = {
  currentQuestionIndex: 0,
  correctAnswers: 0,
  timerSeconds: CONFIG.DURATA_TIMER,
  timerInterval: null,
  quizStarted: false,
  questions: []  // Domande estratte e rimescolate per questa sessione
};

/* ============================================
   UTILITIES
   ============================================ */

/**
 * Fisher-Yates Shuffle Algorithm
 * Rimescola un array restituendo una copia
 */
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Formatta secondi in MM:SS
 */
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/**
 * mostra/nasconde una schermata
 */
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');
}

/**
 * nasconde un elemento
 */
function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('hidden');
}

/**
 * mostra un elemento
 */
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('hidden');
}

/* ============================================
   LOCALSTORAGE (predisposto per future implementazioni)
   ============================================ */

/**
 * Salva stato quiz in localStorage
 */
function saveQuizState() {
  try {
    const data = {
      currentQuestionIndex: state.currentQuestionIndex,
      correctAnswers: state.correctAnswers,
      timerSeconds: state.timerSeconds,
      quizStarted: state.quizStarted,
      questions: state.questions
    };
    localStorage.setItem('bmc_quiz_state', JSON.stringify(data));
  } catch (e) {
    // localStorage non disponibile - ignora silenziosamente
  }
}

/**
 * Carica stato quiz da localStorage
 */
function loadQuizState() {
  try {
    const saved = localStorage.getItem('bmc_quiz_state');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    // localStorage non disponibile o dati corrotti
  }
  return null;
}

/**
 * Pulisce lo stato salvato
 */
function clearQuizState() {
  try {
    localStorage.removeItem('bmc_quiz_state');
  } catch (e) {
    // ignora
  }
}

/* ============================================
   ESTRAZIONE DOMANDE
   ============================================ */

/**
 * Estrae tutte le domande e rimescola opzioni
 * Traccia la risposta corretta dopo rimescolamento
 */
function extractQuestions() {
  // Tutte le 30 domande
  const extracted = PANIERE.map(q => {
    const letters = ['A', 'B', 'C', 'D'];
    const options = letters.map(letter => ({
      letter,
      text: q.a[letter]
    }));
    // Rimescola opzioni
    const shuffledOptions = shuffle(options);
    // Costruisce mappa inversa: nuova lettera -> testo originale
    const shuffledAnswers = {};
    shuffledOptions.forEach(opt => {
      shuffledAnswers[opt.letter] = opt.text;
    });
    // Trova la nuova lettera della risposta corretta
    let newCorrect = null;
    for (const opt of shuffledOptions) {
      if (opt.text === q.a[q.correct]) {
        newCorrect = opt.letter;
        break;
      }
    }
    return {
      id: q.id,
      category: q.category,
      q: q.q,
      a: shuffledAnswers,
      correct: newCorrect, // Nuova lettera tracciata
      exp: q.exp
    };
  });
  return extracted;
}

/* ============================================
   TIMER
   ============================================ */

function startTimer() {
  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    updateTimerDisplay();

    // Avviso a 5 minuti dalla fine
    if (state.timerSeconds === CONFIG.ALERT_TIMER_SOGLIA) {
      showTimerWarning();
    }

    // Scadenza
    if (state.timerSeconds <= 0) {
      stopTimer();
      finishQuiz();
    }

    saveQuizState();
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const display = document.getElementById('timer-display');
  if (display) {
    display.textContent = formatTime(state.timerSeconds);
    if (state.timerSeconds <= CONFIG.ALERT_TIMER_SOGLIA) {
      display.classList.add('urgent');
    } else {
      display.classList.remove('urgent');
    }
  }
}

function showTimerWarning() {
  const banner = document.getElementById('timer-warning-banner');
  if (banner) banner.classList.remove('hidden');
}

/* ============================================
   QUIZ LOGIC
   ============================================ */

function startQuiz() {
  // Reset stato
  state.currentQuestionIndex = 0;
  state.correctAnswers = 0;
  state.timerSeconds = CONFIG.DURATA_TIMER;
  state.quizStarted = true;

  // Estrai domande
  state.questions = extractQuestions();

  // Avvia timer
  startTimer();

  // Mostra schermata quiz
  showScreen('screen-quiz');
  hideModal('modal-legal');

  // Carica prima domanda
  loadQuestion(0);

  saveQuizState();
}

function loadQuestion(index) {
  const q = state.questions[index];

  // Aggiorna categoria header
  const quizCat = document.getElementById('quiz-category');
  if (quizCat) quizCat.textContent = q.category;

  // Contatore domanda
  const counter = document.getElementById('quiz-counter');
  if (counter) counter.textContent = `${index + 1} / ${CONFIG.NUM_DOMANDE}`;

  // Categoria domanda
  const qCat = document.getElementById('question-category');
  if (qCat) qCat.textContent = q.category;

  // Numero domanda
  const qNum = document.getElementById('question-number');
  if (qNum) qNum.textContent = `Domanda ${index + 1}`;

  // Testo domanda
  const qText = document.getElementById('question-text');
  if (qText) qText.textContent = q.q;

  // Opzioni
  const optionsContainer = document.getElementById('options-container');
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    letters.forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-label', `Opzione ${letter}: ${q.a[letter]}`);
      btn.setAttribute('data-letter', letter);
      btn.innerHTML = `
        <span class="option-letter">${letter}</span>
        <span class="option-text">${q.a[letter]}</span>
      `;
      btn.addEventListener('click', () => selectAnswer(letter));
      optionsContainer.appendChild(btn);
    });
  }

  // Progress bar
  updateProgress();
}

function selectAnswer(letter) {
  const currentQ = state.questions[state.currentQuestionIndex];
  const isCorrect = letter === currentQ.correct;

  if (isCorrect) {
    state.correctAnswers++;
  }

  // Disabilita tutte le opzioni
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.style.pointerEvents = 'none';
    const btnLetter = btn.getAttribute('data-letter');
    if (btnLetter === currentQ.correct) {
      btn.classList.add('selected');
      btn.style.borderColor = '#22c55e';
      btn.style.background = 'rgba(34, 197, 94, 0.15)';
    } else if (btnLetter === letter && !isCorrect) {
      btn.style.borderColor = '#ef4444';
      btn.style.background = 'rgba(239, 68, 68, 0.15)';
    }
  });

  saveQuizState();

  // Passa alla prossima dopo un breve ritardo
  setTimeout(() => {
    state.currentQuestionIndex++;
    if (state.currentQuestionIndex < CONFIG.NUM_DOMANDE) {
      loadQuestion(state.currentQuestionIndex);
    } else {
      finishQuiz();
    }
  }, 600);
}

function updateProgress() {
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  if (progressBar && progressText) {
    const pct = (state.currentQuestionIndex / CONFIG.NUM_DOMANDE) * 100;
    progressBar.style.width = pct + '%';
    progressText.textContent = `${state.currentQuestionIndex} di ${CONFIG.NUM_DOMANDE} domande completate`;
  }
}

function finishQuiz() {
  stopTimer();
  clearQuizState();
  showResults();
}

function resetQuiz() {
  stopTimer();
  clearQuizState();
  state.currentQuestionIndex = 0;
  state.correctAnswers = 0;
  state.timerSeconds = CONFIG.DURATA_TIMER;
  state.quizStarted = false;
  state.questions = [];

  // Reset UI
  const timerDisplay = document.getElementById('timer-display');
  if (timerDisplay) {
    timerDisplay.textContent = formatTime(CONFIG.DURATA_TIMER);
    timerDisplay.classList.remove('urgent');
  }

  const timerBanner = document.getElementById('timer-warning-banner');
  if (timerBanner) timerBanner.classList.add('hidden');

  // Torna alla welcome
  showScreen('screen-welcome');
  showModal('modal-legal');
}

/* ============================================
   RISULTATI
   ============================================ */

function showResults() {
  showScreen('screen-results');

  const scoreDiv = document.getElementById('results-score');
  const summaryDiv = document.getElementById('results-summary');

  if (!scoreDiv || !summaryDiv) return;

  const pct = Math.round((state.correctAnswers / CONFIG.NUM_DOMANDE) * 100);
  let badge = '';
  let judgment = '';
  let scoreClass = '';

  if (pct >= CONFIG.SOGLIA_ECCELLENTE) {
    badge = '🏆';
    judgment = 'Eccellente';
    scoreClass = 'score-excellent';
  } else if (pct >= CONFIG.SOGLIA_SUFFICIENTE) {
    badge = '👍';
    judgment = 'Sufficiente';
    scoreClass = 'score-sufficient';
  } else {
    badge = '📚';
    judgment = 'Insufficiente';
    scoreClass = 'score-insufficient';
  }

  // Score card
  scoreDiv.className = `results-score ${scoreClass}`;
  scoreDiv.innerHTML = `
    <div class="score-badge">${badge} ${state.correctAnswers}/${CONFIG.NUM_DOMANDE}</div>
    <div class="score-percentage">${pct}%</div>
    <div class="score-judgment">${judgment}</div>
  `;

  // Riepilogo domande
  summaryDiv.innerHTML = '';
  state.questions.forEach((q, i) => {
    const userAnswer = null; // Non abbiamo tracciato la risposta utente singola qui per semplicità
    // Mostriamo sempre la risposta corretta per ogni domanda
    const correctLetter = q.correct;
    const correctText = q.a[correctLetter];

    // Nota: non abbiamo memorizzato la risposta utente nella sessione,
    // ma mostriamo comunque la spiegazione per ogni domanda
    const item = document.createElement('div');
    item.className = 'result-item';
    item.innerHTML = `
      <div class="result-item-header">
        <span class="result-item-number">Domanda ${i + 1}</span>
        <span class="result-item-category" style="color: var(--slate-500); font-size: 0.8rem;">${q.category}</span>
      </div>
      <p class="result-question">${q.q}</p>
      <div class="result-answers">
        <div class="result-answer correct-reveal">
          <i class="fas fa-check-circle" aria-hidden="true"></i>
          <span class="result-answer-letter">${correctLetter}:</span>
          <span class="result-answer-text">${correctText}</span>
        </div>
      </div>
      <div class="result-explanation">
        <div class="result-explanation-label">Spiegazione</div>
        <p class="result-explanation-text">${q.exp}</p>
      </div>
    `;
    summaryDiv.appendChild(item);
  });
}

/* ============================================
   EVENT LISTENERS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- LEGAL MODAL ----
  document.getElementById('btn-legal-cancel')?.addEventListener('click', () => {
    hideModal('modal-legal');
  });

  document.getElementById('btn-legal-accept')?.addEventListener('click', () => {
    startQuiz();
  });

  // ---- HOME CONFIRM MODAL ----
  document.getElementById('btn-home-quiz')?.addEventListener('click', () => {
    showModal('modal-home-confirm');
  });

  document.getElementById('modal-home-no')?.addEventListener('click', () => {
    hideModal('modal-home-confirm');
  });

  document.getElementById('modal-home-yes')?.addEventListener('click', () => {
    hideModal('modal-home-confirm');
    resetQuiz();
  });

  // ---- RESULTS BUTTONS ----
  document.getElementById('btn-retake')?.addEventListener('click', () => {
    resetQuiz();
    showModal('modal-legal');
  });

  document.getElementById('btn-home-results')?.addEventListener('click', () => {
    resetQuiz();
  });

  // ---- START BUTTON ----
  document.getElementById('btn-start')?.addEventListener('click', () => {
    showModal('modal-legal');
  });

  // Schermata welcome attiva di default
  showScreen('screen-welcome');
  showModal('modal-legal');
});
