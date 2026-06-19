# BMC – Business Model Canvas Quiz

Quiz didattico interattivo sul Business Model Canvas e l'approccio Lean Startup, ideato da Dott. Salvatore Trono.

**[Apri il quiz →](#)**

---

## 📋 Descrizione

Questo test di autovalutazione è composto da **30 domande a risposta multipla**, suddivise tra:

- **Livello Base** (domande 1–15): concetti fondamentali del Business Model Canvas, Lean Startup, MVP, Value Proposition Canvas
- **Livello Intermedio** (domande 16–30): approccio risk-first, desirability, actionable metrics, pivot, Problem-Solution Fit, disciplina italiana startup innovative

Ad ogni avvio le domande e le opzioni vengono presentate in ordine casuale.

---

## 🚀 Pubblicazione su GitHub Pages

### Prerequisiti

- Account GitHub ([crea un account se non l'hai](https://github.com/))

---

### Step 1 — Crea un nuovo repository su GitHub

1. Vai su [github.com/new](https://github.com/new)
2. **Repository name**: `bmc-quiz` (o il nome che preferisci)
3. **Description**: `Quiz didattico sul Business Model Canvas`
4. Scegli **Public** (GitHub Pages funziona solo con repository pubblici)
5. Clicca **Create repository**

---

### Step 2 — Carica i 3 file nel repository

Dalla pagina del repository appena creato:

**Opzione A — Upload diretto (più semplice)**

1. Clicca sul pulsante **Add file** → **Upload files**
2. Trascina o seleziona i 3 file:
   - `index.html`
   - `style.css`
   - `script.js`
3. Clicca **Commit changes**

**Opzione B — Da riga di comando**

```bash
git clone https://github.com/TUO-USERNAME/bmc-quiz.git
cd bmc-quiz
# copia i 3 file nella cartella cloned
git add .
git commit -m "Initial commit: BMC Quiz"
git push origin main
```

---

### Step 3 — Abilita GitHub Pages

1. Nel tuo repository, vai su **Settings** (scheda in alto)
2. Nel menu laterale sinistro, clicca **Pages**
3. Sezione **Build and deployment**:
   - **Source**: seleziona **Deploy from a branch**
   - **Branch**: seleziona `main` e cartella `/ (root)`
   - Clicca **Save**
4. Attendi 1–2 minuti

---

### Step 4 — Accedi al quiz online

Il quiz sarà disponibile all'indirizzo:

```
https://TUO-USERNAME.github.io/bmc-quiz/
```

> ⚠️ Sostituisci `TUO-USERNAME` con il tuo username GitHub effettivo.
>
> Se hai chiamato il repository in modo diverso, l'URL sarà:
> `https://TUO-USERNAME.github.io/NOME-REPOSITORY/`

---

## 🧪 Verifica rapida (antes习ante della pubblicazione)

Per testare il quiz localmente sul tuo computer:

1. Apri una nuova finestra del terminale
2. Naviga nella cartella contenente i 3 file
3. Avvia un server locale:

```bash
# Con Python (già installato su macOS/Linux)
python3 -m http.server 8000

# Oppure con Node.js (se installato)
npx serve .
```

4. Apri nel browser: [http://localhost:8000](http://localhost:8000)

---

## 📁 Struttura dei file

```
bmc-quiz/
├── index.html   ← Pagina principale (struttura HTML)
├── style.css    ← Stili CSS (tema amber/arancione + slate scuro)
├── script.js    ← Logica JavaScript (quiz, timer, risultati)
└── README.md    ← Questa guida
```

---

## ⚙️ Configurazione (modificabile in `script.js`)

All'inizio del file `script.js` è presente l'oggetto `CONFIG`:

```javascript
const CONFIG = {
  NUM_DOMANDE: 30,           // Numero domande totali estratte
  DURATA_TIMER: 3600,        // Durata in secondi (3600 = 60 minuti)
  SOGLIA_ECCELLENTE: 80,     // Percentuale per giudizio Eccellente (🏆)
  SOGLIA_SUFFICIENTE: 60,    // Percentuale per giudizio Sufficiente (👍)
  ALERT_TIMER_SOGLIA: 300    // Avviso timer a 5 minuti dalla fine
};
```

---

## 🧮 Simulazione di estrazione

L'estrazione è Fisher-Yates con rimescolamento delle opzioni A/B/C/D. La lettera della risposta corretta viene tracciata dopo il rimescolamento.

**Esempi di calcolo punteggio:**

| Risposte corrette | Punteggio | Percentuale | Giudizio | Badge |
|---|---|---|---|---|
| 30/30 | 30 | 100% | Eccellente | 🏆 |
| 24/30 | 24 | 80% | Eccellente | 🏆 |
| 23/30 | 23 | 77% | Sufficiente | 👍 |
| 18/30 | 18 | 60% | Sufficiente | 👍 |
| 17/30 | 17 | 57% | Insufficiente | 📚 |
| 16/30 | 16 | 53% | Insufficiente | 📚 |

---

## 🔒 Nota legale

Il presente materiale è protetto dalla normativa sul diritto d'autore (L. 633/1941). Ogni utilizzo è subordinato all'autorizzazione esplicita dell'autore, **Dott. Salvatore Trono**.

---

## 👨‍🏫 Credits

**Dott. Salvatore Trono** — Laureato in Servizi Giuridici per l'Impresa • Formatore • Esperto in Sicurezza sui Luoghi di Lavoro

Finalità didattica/formativa. **NON costituisce formazione certificata.**