(() => {
  const button = document.getElementById('mobileMenuButton');
  const drawer = document.getElementById('mobileSidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  const media = matchMedia('(max-width:760px)');
  if (!button || !drawer || !backdrop) return;
  function toggle(open) {
    open = Boolean(open && media.matches);
    document.body.classList.toggle('mobile-menu-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    backdrop.hidden = !open;
    drawer.inert = media.matches && !open;
  }
  button.addEventListener('click', () => toggle(button.getAttribute('aria-expanded') !== 'true'));
  backdrop.addEventListener('click', () => { toggle(false); button.focus(); });
  drawer.addEventListener('click', event => {
    if (event.target.closest('[data-category],a') && media.matches) toggle(false);
  });
  document.addEventListener('keydown', event => {
    if (button.getAttribute('aria-expanded') !== 'true') return;
    if (event.key === 'Escape') { toggle(false); button.focus(); }
    if (event.key === 'Tab') {
      const controls = [button, ...drawer.querySelectorAll('button:not([disabled]),a[href]')];
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  media.addEventListener('change', () => toggle(false));
  toggle(false);
})();
