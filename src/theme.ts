// src/theme.ts
export function initTheme() {
  const stored = localStorage.getItem('theme'); // "dark" | "light"
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldDark = stored ? stored === 'dark' : prefersDark;
  document.documentElement.classList.toggle('dark', shouldDark);
}

export function toggleTheme() {
  const html = document.documentElement;
  const next = !html.classList.contains('dark');
  html.classList.toggle('dark', next);
  localStorage.setItem('theme', next ? 'dark' : 'light');
}
