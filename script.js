(() => {
  // Use the institution's portrait when available; keep the supplied local image as fallback.
  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    img.addEventListener('error', () => {
      const fallback = img.dataset.fallback;
      if (fallback && !img.src.endsWith(fallback)) img.src = fallback;
    }, { once: true });
  });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      toggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('open', !expanded);
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
        nav.classList.remove('open');
      });
    });
  }


  // Keep the active navigation underline in step with the visible homepage section.
  const sectionLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  const sectionTargets = sectionLinks
    .map((link) => ({ link, target: document.querySelector(link.getAttribute('href')) }))
    .filter((item) => item.target);
  if ('IntersectionObserver' in window && sectionTargets.length) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      sectionTargets.forEach(({ link, target }) => {
        const active = target === visible.target;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-22% 0px -62% 0px', threshold: [0, 0.15, 0.35, 0.6] });
    sectionTargets.forEach(({ target }) => observer.observe(target));
  }

  const filterButtons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('.library-item[data-theme]');
  if (filterButtons.length && items.length) {
    filterButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.classList.contains('active')));
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterButtons.forEach((other) => {
          const active = other === button;
          other.classList.toggle('active', active);
          other.setAttribute('aria-pressed', String(active));
        });
        items.forEach((item) => {
          item.hidden = filter !== 'all' && item.dataset.theme !== filter;
        });
      });
    });
  }
})();
