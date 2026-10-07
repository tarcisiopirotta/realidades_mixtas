document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const previousButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const currentLabel = document.getElementById('current-slide');
  const totalLabel = document.getElementById('total-slides');
  const progress = document.querySelector('.progress-track');
  const progressFill = document.getElementById('progress-fill');
  const themeButton = document.getElementById('theme-toggle');
  const fullscreenButton = document.getElementById('fullscreen');
  const root = document.documentElement;
  let current = 0;

  totalLabel.textContent = String(slides.length).padStart(2, '0');
  progress.setAttribute('aria-valuemax', String(slides.length));

  const showSlide = index => {
    const nextIndex = Math.max(0, Math.min(index, slides.length - 1));
    slides[current].classList.remove('is-active');
    slides[current].setAttribute('aria-hidden', 'true');
    current = nextIndex;
    slides[current].classList.add('is-active');
    slides[current].setAttribute('aria-hidden', 'false');
    currentLabel.textContent = String(current + 1).padStart(2, '0');
    previousButton.disabled = current === 0;
    nextButton.disabled = current === slides.length - 1;
    progressFill.style.width = `${((current + 1) / slides.length) * 100}%`;
    progress.setAttribute('aria-valuenow', String(current + 1));
  };

  previousButton.addEventListener('click', () => showSlide(current - 1));
  nextButton.addEventListener('click', () => showSlide(current + 1));
  document.querySelector('[data-go="1"]').addEventListener('click', () => showSlide(1));

  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const target = event.target;
    if (target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))) return;
    if (event.key === ' ' && target instanceof HTMLElement && target.closest('button, a')) return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showSlide(current - 1);
    } else if (event.key === 'ArrowRight' || event.key === ' ') {
      event.preventDefault();
      showSlide(current + 1);
    } else if (event.key.toLowerCase() === 'f') {
      toggleFullscreen();
    } else if (event.key === 'Home') {
      showSlide(0);
    } else if (event.key === 'End') {
      showSlide(slides.length - 1);
    } else if (event.key === 'Escape' && document.fullscreenElement) {
      document.exitFullscreen();
    }
  });

  const setTheme = theme => {
    root.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    themeButton.setAttribute('aria-label', `Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`);
    themeButton.title = `Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`;
  };

  themeButton.addEventListener('click', () => {
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await root.requestFullscreen();
      }
    } catch (error) {
      console.error('No se pudo cambiar el modo de pantalla completa.', error);
    }
  }

  fullscreenButton.addEventListener('click', toggleFullscreen);
  document.addEventListener('fullscreenchange', () => {
    const active = Boolean(document.fullscreenElement);
    fullscreenButton.setAttribute('aria-label', active ? 'Salir de pantalla completa' : 'Activar pantalla completa');
    fullscreenButton.title = active ? 'Salir de pantalla completa' : 'Pantalla completa';
  });

  showSlide(0);
});
