*, *::before, *::after { box-sizing: border-box; }

:root {
  --pie-bg: #f4f6f3;
  --pie-card: #ffffff;
  --pie-text: #111312;
  --pie-muted: #6b706b;
  --pie-accent: #5fa22e;
  --pie-border: #e3e7e1;
}

html[data-theme="dark"] {
  --pie-bg: #0f0f0f;
  --pie-card: #17191a;
  --pie-text: #f2f4f1;
  --pie-muted: #9ba29b;
  --pie-accent: #7cc142;
  --pie-border: #262a26;
}

body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  background: var(--pie-bg);
  color: var(--pie-text);
}

main { flex: 1; padding: 16px; max-width: 960px; margin: 0 auto; width: 100%; }

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 16px;
  background: var(--pie-card);
  border-bottom: 1px solid var(--pie-border);
}
.brand { display: flex; align-items: center; gap: 12px; }
.logo { width: 72px; height: auto; border-radius: 12px; }
.top h1 { margin: 0; font-size: 24px; color: var(--pie-accent); }
.muted { color: var(--pie-muted); margin: 0; }

.controls { display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; }
.filters, .actions-row { display: flex; gap: 8px; flex-wrap: wrap; }

.btn {
  font: inherit;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 999px;
  border: 2px solid var(--pie-border);
  background: var(--pie-card);
  color: var(--pie-text);
  cursor: pointer;
  transition: background 160ms ease, color 160ms ease, transform 160ms ease;
}
.btn:hover { background: var(--pie-accent); color: #fff; border-color: var(--pie-accent); }
.btn:focus-visible { outline: 3px solid var(--pie-accent); outline-offset: 3px; }
.btn:active { transform: translateY(1px); }
.btn--primary { background: var(--pie-accent); color: #fff; border-color: var(--pie-accent); }
.btn.is-active { background: var(--pie-accent); color: #fff; border-color: var(--pie-accent); }

.menu {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.card {
  background: var(--pie-card);
  border: 1px solid var(--pie-border);
  border-radius: 14px;
  padding: 16px;
  cursor: pointer;
  transition: transform 160ms ease;
}
.card:hover { transform: translateY(-2px); }
.card h3 { margin: 0 0 8px; font-size: 18px; }
.price { font-weight: 700; color: var(--pie-accent); margin: 0 0 4px; }
.out { font-weight: 700; min-height: 1.5em; }

.hours { margin-top: 24px; }
.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; background: var(--pie-card); border-radius: 14px; overflow: hidden; }
caption { text-align: left; font-weight: 600; padding: 8px 0; }
th, td { padding: 12px 16px; text-align: left; border-bottom: 1px solid var(--pie-border); }

.bottom { padding: 16px; background: var(--pie-card); border-top: 1px solid var(--pie-border); color: var(--pie-muted); }

.modal { position: fixed; inset: 0; background: rgba(17,19,18,.5); display: grid; place-items: center; padding: 16px; }
.modal.hidden { display: none; }
.modal__box { background: var(--pie-card); border-radius: 14px; padding: 24px; max-width: 420px; width: 100%; }

@media (min-width: 600px) { .menu { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 900px) { .menu { grid-template-columns: repeat(3, 1fr); } }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
