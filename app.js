// app.js
/* Programming Logic Trainer - vanilla JS */
const $ = (sel) => document.querySelector(sel);

const LS_KEYS = {
  progress: "plt_progress_v1",
  theme: "plt_theme_v1",
};

const DEFAULT_PROGRESS = {
  totalAnswered: 0,
  totalCorrect: 0,
  streak: 0,
  bestStreak: 0,
  xp: 0,
  level: 1,
  completedDailyChallengeDate: null, // YYYY-MM-DD
  missedQuestionIds: [],
    // níveis/trilha
  levels: {
    unlockedIndex: 0,     // qual módulo está liberado (0 = primeiro)
    stars: {},            // ex: { "L1": 1, "L2": 3 }
  },
  daily: {
  lastDate: null,          // "YYYY-MM-DD"
  attempted: false,        // tentou hoje?
  completed: false         // acertou hoje (ou concluiu)
},
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(LS_KEYS.progress);
    if (!raw) return structuredClone(DEFAULT_PROGRESS);
    const obj = JSON.parse(raw);
    return { ...structuredClone(DEFAULT_PROGRESS), ...obj };
  } catch {
    return structuredClone(DEFAULT_PROGRESS);
  }
}

function saveProgress(p) {
  localStorage.setItem(LS_KEYS.progress, JSON.stringify(p));
}

function xpForDifficulty(d) {
  if (d === "easy") return 10;
  if (d === "medium") return 20;
  return 30;
}

function computeLevel(xp) {
  return Math.max(1, Math.floor(xp / 200) + 1);
}

function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function hashStringToInt(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0);
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function unique(arr) {
  return Array.from(new Set(arr));
}

// ---------- App State ----------
let progress = loadProgress();

const state = {
  mode: "quiz", // quiz | practice | daily | review
  queue: [],
  index: 0,
  selected: null,
  locked: false,
  lastResult: null,
  modeLabel: "Modo Quiz",
};

// ---------- Levels (Trilha) ----------
const LEVELS = [
  { id:"L1", name:"Variáveis",  topics:["variables"],            types:["output","reasoning"], difficulty:["easy"], target: { correct:7, total:10 } },
  { id:"L2", name:"Operadores", topics:["operators"],            types:["output","reasoning"], difficulty:["easy","medium"], target: { correct:7, total:10 } },
  { id:"L3", name:"If/Else",    topics:["if_else"],              types:["conditionals","output","debug"], difficulty:["easy","medium"], target: { correct:7, total:10 } },
  { id:"L4", name:"If Aninhado",topics:["nested_if"],            types:["conditionals","debug","output"], difficulty:["medium","hard"], target: { correct:7, total:10 } },
  { id:"L5", name:"Loops",      topics:["for_loop","while_loop","do_while"], types:["loops","output","reasoning"], difficulty:["easy","medium"], target: { correct:7, total:10 } },
  { id:"L6", name:"Funções",    topics:["functions"],            types:["functions","output","reasoning"], difficulty:["medium","hard"], target: { correct:7, total:10 } },
  { id:"L7", name:"Vetores",    topics:["arrays"],               types:["arrays","debug","output"], difficulty:["easy","medium","hard"], target: { correct:7, total:10 } },
  { id:"L8", name:"Debug Mix",  topics:["variables","operators","if_else","nested_if","for_loop","while_loop","do_while","functions","arrays"], types:["debug"], difficulty:["medium","hard"], target: { correct:7, total:10 } },
];

// ---------- Curso / Aprender ----------
const LEARN_MODULES = [
  {
    id: "C01",
    title: "1) O que é lógica de programação",
    html: `
      <h3>O que é lógica de programação?</h3>
      <p>Lógica de programação é a forma de pensar <b>passo a passo</b> para resolver problemas usando um computador.</p>

      <p>Todo programa normalmente segue três etapas:</p>
      <ul>
        <li><b>Entrada</b> (dados que você recebe)</li>
        <li><b>Processamento</b> (regras e cálculos)</li>
        <li><b>Saída</b> (resultado que você mostra)</li>
      </ul>

      <h4>Exemplo simples</h4>
      <pre class="code">algoritmo "media"
var a,b,media: real
inicio
  leia(a)
  leia(b)
  media <- (a + b) / 2
  escreva(media)
fimalgoritmo</pre>

      <h4>Como estudar (método prático)</h4>
      <ol>
        <li>Entenda o que entra e o que deve sair.</li>
        <li>Quebre em passos pequenos.</li>
        <li>Simule com exemplos (inclusive valores “limite”).</li>
        <li>Depois faça exercícios e corrija seus erros.</li>
      </ol>
    `
  },

  {
    id: "C02",
    title: "2) Algoritmo e pseudocódigo (Portugol/Visualg)",
    html: `
      <h3>Algoritmo</h3>
      <p>Algoritmo é uma sequência de passos para resolver uma tarefa. No seu app, usamos pseudocódigo estilo Portugol/Visualg.</p>

      <h4>Estrutura básica</h4>
      <pre class="code">algoritmo "exemplo"
var x: inteiro
inicio
  x <- 10
  escreva(x)
fimalgoritmo</pre>

      <h4>Boas práticas</h4>
      <ul>
        <li>Nomeie bem variáveis (ex: <b>idade</b>, <b>soma</b>, <b>contador</b>).</li>
        <li>Evite “mágica”: números soltos sem sentido (ex: 37 sem explicação).</li>
        <li>Comente quando for necessário (mas sem exagero).</li>
      </ul>
    `
  },

  {
    id: "C03",
    title: "3) Variáveis e tipos",
    topic: "variables",
    html: `
      <h3>Variáveis</h3>
      <p>Uma variável é uma “caixinha” que guarda um valor. Você pode atualizar esse valor durante o programa.</p>

      <h4>Tipos comuns</h4>
      <ul>
        <li><b>inteiro</b>: 1, 2, -10</li>
        <li><b>real</b>: 2.5, 3.14</li>
        <li><b>logico</b>: verdadeiro / falso</li>
        <li><b>caractere</b>: "texto"</li>
      </ul>

      <h4>Atribuição (mudança de valor)</h4>
      <pre class="code">x <- 10
x <- x + 1   // agora x vale 11
x <- x * 2   // agora x vale 22</pre>

      <h4>Erros comuns</h4>
      <ul>
        <li>Usar variável sem inicializar.</li>
        <li>Confundir atualização: <b>x <- x + 1</b> (isso é normal e muito usado).</li>
      </ul>
    `
  },

  {
    id: "C04",
    title: "4) Entrada e saída (leia/escreva)",
    topic: "variables",
    html: `
      <h3>Entrada e saída</h3>
      <p><b>leia()</b> recebe um valor do usuário. <b>escreva()</b> mostra um valor na tela.</p>

      <h4>Exemplo</h4>
      <pre class="code">algoritmo "dobro"
var n: inteiro
inicio
  escreva("Digite um número: ")
  leia(n)
  escreva("Dobro: ", n * 2)
fimalgoritmo</pre>

      <h4>Dica</h4>
      <p>Sempre que uma questão envolver <b>leia</b>, pense: “qual valor entrou?” e siga a conta.</p>
    `
  },

  {
    id: "C05",
    title: "5) Operadores e precedência",
    topic: "operators",
    html: `
      <h3>Operadores</h3>
      <ul>
        <li><b>+</b> soma, <b>-</b> subtrai, <b>*</b> multiplica, <b>/</b> divide</li>
        <li><b>mod</b> resto (17 mod 5 = 2)</li>
        <li>Comparações: &gt;, &lt;, &gt;=, &lt;=, =, &lt;&gt;</li>
        <li>Lógicos: <b>e</b>, <b>ou</b>, <b>nao</b></li>
      </ul>

      <h4>Precedência (ordem de cálculo)</h4>
      <p>( ) primeiro → * / → + - → comparações → e/ou</p>

      <h4>Exemplo clássico</h4>
      <pre class="code">x <- 10 + 6 / 2   // 6/2=3, então x=13</pre>

      <h4>Teste rápido</h4>
      <p>Quanto dá: 5 + 2 * 3 ? (Resposta: 11, porque multiplica primeiro)</p>
    `
  },

  {
    id: "C06",
    title: "6) Condicionais (if/else)",
    topic: "if_else",
    html: `
      <h3>If/Else</h3>
      <p>Você escolhe um caminho dependendo de uma condição.</p>

      <pre class="code">se (idade >= 18) entao
  escreva("Pode entrar")
senao
  escreva("Somente com autorização")
fimse</pre>

      <h4>Como resolver questão de if</h4>
      <ol>
        <li>Descubra o valor das variáveis.</li>
        <li>Teste a condição (verdadeiro/falso).</li>
        <li>Execute só o bloco correspondente.</li>
      </ol>
    `
  },

  {
    id: "C07",
    title: "7) Condicionais aninhadas",
    topic: "nested_if",
    html: `
      <h3>If dentro de if</h3>
      <p>Usado quando uma decisão depende de outra.</p>

      <pre class="code">se (n > 0) entao
  se (n mod 2 = 0) entao
    escreva("positivo e par")
  senao
    escreva("positivo e ímpar")
  fimse
senao
  escreva("não positivo")
fimse</pre>

      <h4>Dica de ouro</h4>
      <p>Resolva <b>de fora para dentro</b>: primeiro o if externo, depois o interno.</p>
    `
  },

  {
    id: "C08",
    title: "8) Laço Para (for)",
    topic: "for_loop",
    html: `
      <h3>Para (for)</h3>
      <p>Repete um bloco um número definido de vezes.</p>

      <pre class="code">para i <- 1 ate 5 faca
  escreva(i)
fimpara</pre>

      <h4>Como simular</h4>
      <p>Faça uma tabelinha: i = 1,2,3,4,5 e veja o que acontece a cada volta.</p>

      <h4>Erro comum</h4>
      <p>Confundir se o limite final entra. No Portugol aqui, <b>ate 5 inclui o 5</b>.</p>
    `
  },

  {
    id: "C09",
    title: "9) Laço Enquanto (while)",
    topic: "while_loop",
    html: `
      <h3>Enquanto (while)</h3>
      <p>Repete enquanto a condição for verdadeira.</p>

      <pre class="code">i <- 1
enquanto (i <= 5) faca
  escreva(i)
  i <- i + 1
fimenquanto</pre>

      <h4>Ponto crítico</h4>
      <p>Se você não atualizar a variável (ex: i <- i + 1), pode virar <b>loop infinito</b>.</p>
    `
  },

  {
    id: "C10",
    title: "10) Repita...até (do-while)",
    topic: "do_while",
    html: `
      <h3>Repita...até</h3>
      <p>Executa o bloco pelo menos 1 vez, e só depois testa a condição.</p>

      <pre class="code">i <- 1
repita
  escreva(i)
  i <- i + 1
ate (i > 5)</pre>

      <h4>Diferença principal</h4>
      <ul>
        <li><b>while</b>: testa antes de executar</li>
        <li><b>repita...até</b>: executa e depois testa</li>
      </ul>
    `
  },

  {
    id: "C11",
    title: "11) Funções (parâmetros e retorno)",
    topic: "functions",
    html: `
      <h3>Funções</h3>
      <p>Funções ajudam a organizar e reutilizar código. Elas podem receber parâmetros e retornar um valor.</p>

      <pre class="code">funcao dobro(n: inteiro): inteiro
inicio
  retorne n * 2
fimfuncao</pre>

      <h4>Usando</h4>
      <pre class="code">x <- dobro(7)   // x = 14</pre>

      <h4>Como resolver questões com função</h4>
      <ol>
        <li>Calcule o retorno da função primeiro.</li>
        <li>Depois aplique no programa principal.</li>
      </ol>
    `
  },

  {
    id: "C12",
    title: "12) Vetores (arrays) + como evitar erros",
    topic: "arrays",
    html: `
      <h3>Vetores (arrays)</h3>
      <p>Vetor é uma lista de valores. Aqui usamos índice <b>1..N</b> no pseudocódigo.</p>

      <pre class="code">v[1] <- 10
v[2] <- 20
v[3] <- v[1] + v[2]
escreva(v[3])  // 30</pre>

      <h4>Erros comuns</h4>
      <ul>
        <li>Índice fora do limite (ex: v[0] ou v[999]).</li>
        <li>Dentro de loop, usar v[1] em vez de v[i].</li>
      </ul>

      <h4>Exemplo com loop</h4>
      <pre class="code">soma <- 0
para i <- 1 ate 3 faca
  soma <- soma + v[i]
fimpara
escreva(soma)</pre>
    `
  }
];

let learnSelectedId = "C01";

function renderLearn(){
  const menu = $("#learnMenu");
  const content = $("#learnContent");
  if (!menu || !content) return;

  menu.innerHTML = "";

  LEARN_MODULES.forEach(m => {
    const btn = document.createElement("button");
    btn.className = "learnItem";
    btn.type = "button";
    btn.textContent = m.title;

    if (m.id === learnSelectedId) btn.classList.add("active");

    btn.addEventListener("click", () => {
      learnSelectedId = m.id;
      renderLearn();
    });

    menu.appendChild(btn);
  });

  const mod = LEARN_MODULES.find(m => m.id === learnSelectedId) || LEARN_MODULES[0];
  content.innerHTML = mod.html;
}
function startPracticeFromTopic(topic){
  let pool = QUESTIONS.filter(q => q.topic === topic);

  if (pool.length === 0){
    toast("Ainda não existem questões para esse tema.");
    return;
  }

  state.mode = "practice";
  state.modeLabel = "Prática do Módulo";
  state.queue = shuffle(pool).slice(0, Math.min(15, pool.length));
  state.index = 0;

  setView("quiz");
  renderQuestion();
}

function learnIndexById(id){
  return LEARN_MODULES.findIndex(m => m.id === id);
}

function learnPrev(){
  const i = learnIndexById(learnSelectedId);
  if (i > 0){
    learnSelectedId = LEARN_MODULES[i-1].id;
    renderLearn();
  } else {
    toast("Você já está no primeiro módulo.");
  }
}

function learnNext(){
  const i = learnIndexById(learnSelectedId);
  if (i < LEARN_MODULES.length - 1){
    learnSelectedId = LEARN_MODULES[i+1].id;
    renderLearn();
  } else {
    toast("Você chegou no último módulo.");
  }
}

let levelSession = null; // { levelId, correct, total }

// ---------- UI Helpers ----------
function setView(view) {
  document.querySelectorAll("[data-view]").forEach((sec) => sec.classList.add("hidden"));
  const target = document.querySelector(`[data-view="${view}"]`);
  if (!target) {
    console.error("View não encontrada:", view);
    return;
  }
  target.classList.remove("hidden");
  renderHeaderStats();
}

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 1600);
}

function renderHeaderStats() {
  $("#statAnswered").textContent = progress.totalAnswered;
  $("#statCorrect").textContent = progress.totalCorrect;
  $("#statStreak").textContent = progress.streak;
  $("#statBest").textContent = progress.bestStreak;
  $("#statXP").textContent = progress.xp;
  $("#statLevel").textContent = progress.level;
}

// ---------- Question Rendering ----------
function getCurrentQuestion() {
  return state.queue[state.index] || null;
}

function renderQuestion() {
  const q = getCurrentQuestion();
  if (!q) {
    renderFinish();
    return;
  }

  state.selected = null;
  state.locked = false;
  state.lastResult = null;

  $("#qTitle").textContent = `${state.modeLabel} • Questão ${state.index + 1} de ${state.queue.length}`;
  $("#qMeta").textContent = `Tipo: ${q.type} • Tema: ${q.topic} • Dificuldade: ${q.difficulty}`;
  $("#qPrompt").textContent = q.prompt;

  const codeBox = $("#qCode");
  if (q.code) {
    codeBox.textContent = q.code;
    codeBox.parentElement.classList.remove("hidden");
  } else {
    codeBox.textContent = "";
    codeBox.parentElement.classList.add("hidden");
  }

  $("#qExplanation").classList.add("hidden");
  $("#qExplanation").textContent = "";

  const wrap = $("#options");
  wrap.innerHTML = "";
  for (const letter of ["A","B","C","D","E"]) {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.type = "button";
    btn.dataset.letter = letter;
    btn.innerHTML = `<span class="badge">${letter}</span><span class="optText">${q.options[letter]}</span>`;
    btn.addEventListener("click", () => selectOption(letter));
    wrap.appendChild(btn);
  }

  $("#btnSubmit").disabled = false;
  $("#btnNext").disabled = true;
  $("#btnHint").disabled = false;
  $("#btnSkip").disabled = false;

  updateOptionStyles();
}

function selectOption(letter) {
  if (state.locked) return;
  state.selected = letter;
  updateOptionStyles();
}

function updateOptionStyles() {
  document.querySelectorAll(".option").forEach((btn) => {
    const letter = btn.dataset.letter;
    btn.classList.toggle("selected", letter === state.selected);
    btn.classList.remove("correct", "wrong");
  });
}

function revealAnswer() {
  const q = getCurrentQuestion();
  if (!q) return;

  const correctLetter = q.answer;
  document.querySelectorAll(".option").forEach((btn) => {
    const letter = btn.dataset.letter;
    if (letter === correctLetter) btn.classList.add("correct");
    if (state.selected && letter === state.selected && letter !== correctLetter) btn.classList.add("wrong");
  });

  $("#qExplanation").textContent = q.explanation;
  $("#qExplanation").classList.remove("hidden");
}

function submitAnswer() {
  const q = getCurrentQuestion();
  if (!q) return;

  if (!state.selected) {
    toast("Escolha uma alternativa antes de enviar.");
    return;
  }

  state.locked = true;
  const correct = state.selected === q.answer;

  // --- regra do Desafio do Dia: só conta na 1ª tentativa do dia ---
const isDaily = (state.mode === "daily");
const day = todayISO();
progress.daily = progress.daily || { lastDate: day, attempted: false, completed: false };

// se mudou o dia (segurança extra)
if (progress.daily.lastDate !== day) {
  progress.daily.lastDate = day;
  progress.daily.attempted = false;
  progress.daily.completed = false;
}

// somente a 1ª tentativa do dia "conta"
const countsForDaily = isDaily && !progress.daily.attempted;

// se for daily e já tentou, não pontua (é só treino)
if (isDaily && progress.daily.attempted) {
  revealAnswer();
  $("#btnSubmit").disabled = true;
  $("#btnNext").disabled = false;
  $("#btnHint").disabled = true;
  $("#btnSkip").disabled = true;
  toast(correct ? "✅ Treino: acertou (sem XP)" : "❌ Treino: errou (sem XP)");
  return; // para aqui, não soma nada
}

  if (levelSession && correct) {
  levelSession.correct += 1;
}

  if (!isDaily || countsForDaily) {
  progress.totalAnswered += 1;

  if (correct) {
    progress.totalCorrect += 1;
    progress.streak += 1;
    progress.bestStreak = Math.max(progress.bestStreak, progress.streak);
    progress.xp += xpForDifficulty(q.difficulty);
  } else {
    progress.streak = 0;
    progress.missedQuestionIds = unique([...progress.missedQuestionIds, q.id]);
  }
}

// marca daily como tentado (na 1ª tentativa)
if (isDaily) {
  progress.daily.attempted = true;
  progress.daily.completed = correct ? true : false;
}
  progress.level = computeLevel(progress.xp);
  saveProgress(progress);

  revealAnswer();
  renderHeaderStats();

  $("#btnSubmit").disabled = true;
  $("#btnNext").disabled = false;
  $("#btnHint").disabled = true;
  $("#btnSkip").disabled = true;

  toast(correct ? "✅ Acertou!" : "❌ Errou!");
}

function nextQuestion() {
  if (state.index < state.queue.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    renderFinish();
  }
}

function skipQuestion() {
  if (state.locked) return;
  nextQuestion();
}

function showHint() {
  const q = getCurrentQuestion();
  if (!q) return;
  const tips = {
    variables: "Dica: acompanhe o valor das variáveis passo a passo.",
    operators: "Dica: cuidado com precedência e com `mod` (resto).",
    if_else: "Dica: verifique qual condição é verdadeira primeiro.",
    nested_if: "Dica: resolva por etapas: condição de fora, depois a de dentro.",
    for_loop: "Dica: conte o início e o fim do laço (inclui os limites?).",
    while_loop: "Dica: veja quando a condição deixa de ser verdadeira.",
    do_while: "Dica: `repita...ate` executa pelo menos uma vez.",
    functions: "Dica: calcule o retorno da função antes de somar/juntar.",
    arrays: "Dica: atenção ao índice (aqui usamos 1..N no pseudocódigo).",
  };
  toast(tips[q.topic] || "Dica: simule o código com calma.");
}

// ---------- Modes ----------
function startQuiz() {
  state.mode = "quiz";
  state.modeLabel = "Modo Quiz";
  state.queue = shuffle(QUESTIONS).slice(0, 10);
  state.index = 0;
  setView("quiz");
  renderQuestion();
}

function startPracticeFromFilters() {
  const topic = $("#filterTopic").value;
  const difficulty = $("#filterDifficulty").value;
  const type = $("#filterType").value;

  let pool = QUESTIONS.slice();
  if (topic !== "all") pool = pool.filter(q => q.topic === topic);
  if (difficulty !== "all") pool = pool.filter(q => q.difficulty === difficulty);
  if (type !== "all") pool = pool.filter(q => q.type === type);

  if (pool.length === 0) {
    toast("Nenhuma questão encontrada com esses filtros.");
    return;
  }

  state.mode = "practice";
  state.modeLabel = "Prática";
  state.queue = shuffle(pool).slice(0, Math.min(15, pool.length));
  state.index = 0;
  setView("quiz");
  renderQuestion();
}

function startDailyChallenge() {
  const day = todayISO();
  const idx = hashStringToInt("daily:" + day) % QUESTIONS.length;
  const q = QUESTIONS[idx];

  state.mode = "daily";
  state.modeLabel = "Desafio do Dia";
  state.queue = [q];
  state.index = 0;

  setView("quiz");
  renderQuestion();

  // mensagem pro usuário
  if (progress.daily?.attempted) {
    toast("Desafio do Dia já tentado hoje. Refaça por treino (sem XP).");
  } else {
    toast("🎯 Primeira tentativa do dia vale XP e bônus!");
  }

}

function startReviewMistakes() {
  const ids = progress.missedQuestionIds || [];
  const pool = QUESTIONS.filter(q => ids.includes(q.id));
  if (pool.length === 0) {
    toast("Você ainda não tem erros salvos. Bora treinar no Quiz!");
    return;
  }
  state.mode = "review";
  state.modeLabel = "Revisão de Erros";
  state.queue = shuffle(pool);
  state.index = 0;
  setView("quiz");
  renderQuestion();
}

function clearMistakes() {
  progress.missedQuestionIds = [];
  saveProgress(progress);
  renderHeaderStats();
  toast("Lista de erros limpa.");
}

function renderFinish() {
    finalizeLevelIfAny();
  setView("finish");
  const total = state.queue.length;
  $("#finishTitle").textContent = "Sessão concluída!";
  $("#finishText").textContent = `Você finalizou ${total} questão(ões). Quer continuar?`;

  if (state.mode === "daily") {
  const day = todayISO();

  // só dá bônus se acertou hoje e ainda não recebeu
  if (progress.daily?.completed && progress.completedDailyChallengeDate !== day) {

    progress.completedDailyChallengeDate = day;

    progress.xp += 25;

    progress.level = computeLevel(progress.xp);

    saveProgress(progress);

    renderHeaderStats();

    toast("🎯 Desafio do Dia concluído! +25 XP");
  }
}
}

function isLevelUnlocked(index){
  return index <= (progress.levels?.unlockedIndex ?? 0);
}

function getStarsForLevel(levelId){
  return (progress.levels?.stars?.[levelId] ?? 0);
}

function renderLevelsView(){
  const grid = $("#levelsGrid");
  grid.innerHTML = "";

  LEVELS.forEach((lvl, idx) => {
    const unlocked = isLevelUnlocked(idx);
    const stars = getStarsForLevel(lvl.id);

    const card = document.createElement("div");
    card.className = "levelCard";

    const left = document.createElement("div");
    left.className = "levelInfo";
    left.innerHTML = `
      <div class="levelName">${idx+1}. ${lvl.name}</div>
      <div class="levelMeta">
        Meta: <b>${lvl.target.correct}/${lvl.target.total}</b> acertos •
        Dificuldade: ${lvl.difficulty.join(", ")}
      </div>
      <div class="pill ${unlocked ? "ok" : "locked"}">
        ${unlocked ? "✅ Liberado" : "🔒 Bloqueado"}
        <span style="opacity:.8">•</span>
        ⭐ ${stars}
      </div>
    `;

    const right = document.createElement("div");
    right.className = "levelActions";

    const btn = document.createElement("button");
    btn.className = "btn primary";
    btn.textContent = unlocked ? "Jogar" : "Bloqueado";
    btn.disabled = !unlocked;

    btn.addEventListener("click", () => startLevel(lvl.id));
    right.appendChild(btn);

    card.appendChild(left);
    card.appendChild(right);
    grid.appendChild(card);
  });
}

function startLevel(levelId){
  const lvl = LEVELS.find(l => l.id === levelId);
  if (!lvl) return;

  // pool base
  let pool = QUESTIONS.slice();

  // 1) filtra por tópico (se tiver)
  if (lvl.topics?.length) {
    pool = pool.filter(q => lvl.topics.includes(q.topic));
  }

  // 2) filtra por dificuldade (se tiver)
  if (lvl.difficulty?.length) {
    pool = pool.filter(q => lvl.difficulty.includes(q.difficulty));
  }

  // 3) filtra por tipo (se tiver)
  if (lvl.types?.length) {
    pool = pool.filter(q => lvl.types.includes(q.type));
  }

  // ✅ Se ficou pequeno demais, relaxa filtros em etapas
  const totalTarget = lvl.target.total;

  // relaxa tipo
  if (pool.length < totalTarget) {
    let relaxed = QUESTIONS.slice();
    if (lvl.topics?.length) relaxed = relaxed.filter(q => lvl.topics.includes(q.topic));
    if (lvl.difficulty?.length) relaxed = relaxed.filter(q => lvl.difficulty.includes(q.difficulty));
    pool = relaxed;
  }

  // relaxa dificuldade também
  if (pool.length < totalTarget) {
    let relaxed = QUESTIONS.slice();
    if (lvl.topics?.length) relaxed = relaxed.filter(q => lvl.topics.includes(q.topic));
    pool = relaxed;
  }

  // se ainda assim não tiver nada, avisa com diagnóstico
  if (pool.length === 0){
    toast("Não achei questões compatíveis. Verifique topic/type/difficulty das QUESTIONS.");
    console.warn("Diagnóstico nível:", lvl);
    console.warn("Exemplos QUESTIONS:", QUESTIONS.slice(0, 5));
    return;
  }

  // monta sessão (se tiver menos que 10, joga com o que tem)
  const total = Math.min(totalTarget, pool.length);

  state.mode = "practice";
  state.modeLabel = `Nível • ${lvl.name}`;
  state.queue = shuffle(pool).slice(0, total);
  state.index = 0;

  levelSession = { levelId, correct: 0, total: state.queue.length };
  setView("quiz");
  renderQuestion();
}


function finalizeLevelIfAny(){
  if (!levelSession) return;

  const lvl = LEVELS.find(l => l.id === levelSession.levelId);
  if (!lvl) { levelSession = null; return; }

  const got = levelSession.correct;
  const need = lvl.target.correct;

  // estrelas simples: 1 estrela = meta, 2 = meta+1, 3 = 100%
  let stars = 0;
  if (got >= need) stars = 1;
  if (got >= need + 1) stars = 2;
  if (got === levelSession.total) stars = 3;

  progress.levels = progress.levels || { unlockedIndex:0, stars:{} };
  progress.levels.stars[levelSession.levelId] = Math.max(progress.levels.stars[levelSession.levelId] ?? 0, stars);

  // desbloqueio: se bateu meta, libera o próximo
  const idx = LEVELS.findIndex(l => l.id === levelSession.levelId);
  if (got >= need && idx >= 0){
    progress.levels.unlockedIndex = Math.max(progress.levels.unlockedIndex ?? 0, idx + 1);
  }

  saveProgress(progress);
  renderHeaderStats();

  toast(got >= need ? `🏆 Nível concluído! ⭐ ${stars}` : `Quase! Fez ${got}/${levelSession.total}. Tente de novo.`);
  levelSession = null;
}

// ---------- Theme ----------
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(LS_KEYS.theme, theme);
  $("#themeToggle").textContent = theme === "dark" ? "🌙" : "☀️";
}

function initTheme() {
  const saved = localStorage.getItem(LS_KEYS.theme) || "dark";
  applyTheme(saved);
}

// ---------- Init ----------
function fillFilters() {
  const topics = ["all","variables","operators","if_else","nested_if","for_loop","while_loop","do_while","functions","arrays"];
  const types  = ["all","output","conditionals","loops","debug","reasoning"];
  const diffs  = ["all","easy","medium","hard"];

  const fill = (sel, items, labelMap) => {
    const el = $(sel);
    el.innerHTML = "";
    for (const it of items) {
      const opt = document.createElement("option");
      opt.value = it;
      opt.textContent = labelMap?.[it] || it;
      el.appendChild(opt);
    }
  };

  fill("#filterTopic", topics, {
    all:"Todos",
    variables:"Variáveis",
    operators:"Operadores",
    if_else:"Condicionais (if/else)",
    nested_if:"Condicionais (aninhadas)",
    for_loop:"Laço for",
    while_loop:"Laço while",
    do_while:"Repita...até",
    functions:"Funções",
    arrays:"Vetores (arrays)",
  });

  fill("#filterType", types, {
    all:"Todos",
    output:"Saída do código",
    conditionals:"Condicionais",
    loops:"Loops",
    debug:"Debug",
    reasoning:"Raciocínio",
  });

  fill("#filterDifficulty", diffs, {
    all:"Todas",
    easy:"Fácil",
    medium:"Médio",
    hard:"Difícil",
  });
}

function bindUI() {
  $("#btnHomeQuiz").addEventListener("click", startQuiz);
  $("#btnHomePractice").addEventListener("click", () => setView("practice"));
  $("#btnHomeDaily").addEventListener("click", startDailyChallenge);
  $("#btnHomeReview").addEventListener("click", startReviewMistakes);

  $("#btnGoHome1").addEventListener("click", () => setView("home"));
  $("#btnGoHome2").addEventListener("click", () => setView("home"));

  $("#btnStartPractice").addEventListener("click", startPracticeFromFilters);

  $("#btnSubmit").addEventListener("click", submitAnswer);
  $("#btnNext").addEventListener("click", nextQuestion);
  $("#btnSkip").addEventListener("click", skipQuestion);
  $("#btnHint").addEventListener("click", showHint);

  $("#btnLearnPrev").addEventListener("click", learnPrev);
$("#btnLearnNext").addEventListener("click", learnNext);

  $("#btnClearMistakes").addEventListener("click", clearMistakes);
  $("#btnStartReview").addEventListener("click", startReviewMistakes);

  $("#btnHomeLearn").addEventListener("click", () => {
  setView("learn");
});

$("#btnHomeLearn").addEventListener("click", () => {
  setView("learn");
  renderLearn();
});

$("#btnGoHomeLearn").addEventListener("click", () => setView("home"));

$("#btnGoHomeLearn").addEventListener("click", () => setView("home"));

const btnLearnPractice = $("#btnLearnPractice");
if (btnLearnPractice){
  btnLearnPractice.addEventListener("click", () => {
    const mod = LEARN_MODULES.find(m => m.id === learnSelectedId);

    if (!mod || !mod.topic){
      toast("Este módulo é teórico, sem tema de prática.");
      return;
    }

    startPracticeFromTopic(mod.topic);
  });
}

  // ✅ NÍVEIS (fora do themeToggle!)
  $("#btnHomeLevels").addEventListener("click", () => {
    setView("levels");
    renderLevelsView();
  });

  $("#btnGoHomeLevels").addEventListener("click", () => setView("home"));

  // ✅ Tema (somente o tema aqui)
  $("#themeToggle").addEventListener("click", () => {
    const current = document.documentElement.dataset.theme || "dark";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

function init() {

    progress.levels = progress.levels || { unlockedIndex: 0, stars: {} };
  saveProgress(progress);

  // reset diário ao mudar a data
const day = todayISO();
progress.daily = progress.daily || { lastDate: null, attempted: false, completed: false };
if (progress.daily.lastDate !== day) {
  progress.daily.lastDate = day;
  progress.daily.attempted = false;
  progress.daily.completed = false;
  saveProgress(progress);
}

  initTheme();
  fillFilters();
  bindUI();
  renderHeaderStats();
  setView("home");
}

document.addEventListener("DOMContentLoaded", init);