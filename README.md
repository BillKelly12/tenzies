# Tenzies (React + Vite)

A tiny dice game: roll until **all 10 dice show the same value**. Click a die to **hold/unhold** it between rolls. When you win, the button switches to **New Game** and confetti appears 🎉.

## Install & Run
```bash
npm install
npm run dev
npm run build
```

## How it works
- 10 dice stored in state `{ value (1–6), isHeld, id }` (ids via `nanoid`).
- Win when **every die is held** and **all values are equal**.
- **Roll** rerolls only non-held dice; **New Game** resets all.
- Accessibility: victory announced via `aria-live` and focus moves to the New Game button.

## Tech
React + Vite · `nanoid` · `react-confetti`

## Deploy
Static hosting (e.g. Netlify).  
Build: `npm run build` → publish `dist/`.
