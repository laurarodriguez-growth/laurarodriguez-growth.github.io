(() => {
  const root = document.documentElement;
  const saved = localStorage.getItem('laura-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  root.dataset.theme = saved || (prefersLight ? 'light' : 'dark');
  const btn = document.querySelector('[data-theme-toggle]');
  const sync = () => { if(btn) btn.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'); };
  sync();
  btn?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('laura-theme', root.dataset.theme);
    sync();
  });
})();
