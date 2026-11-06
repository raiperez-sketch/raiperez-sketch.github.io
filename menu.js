document.addEventListener('DOMContentLoaded', () => {
  const botonMenu = document.getElementById('boton-menu');
  const navegacion = document.getElementById('navegacion');
  const enlaces = navegacion.querySelectorAll('a');

  // Alternar apertura y cierre del menú
  botonMenu.addEventListener('click', () => {
    const abierto = botonMenu.getAttribute('aria-expanded') === 'true';
    botonMenu.setAttribute('aria-expanded', String(!abierto));
    botonMenu.setAttribute('aria-label', abierto ? 'Abrir menú' : 'Cerrar menú');
    navegacion.classList.toggle('activa');
  });

  // Cerrar menú al hacer clic en cualquier enlace (para navegación por anclas)
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
      if (navegacion.classList.contains('activa')) {
        botonMenu.setAttribute('aria-expanded', 'false');
        botonMenu.setAttribute('aria-label', 'Abrir menú');
        navegacion.classList.remove('activa');
      }
    });
  });

  // Cerrar menú con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navegacion.classList.contains('activa')) {
      botonMenu.setAttribute('aria-expanded', 'false');
      botonMenu.setAttribute('aria-label', 'Abrir menú');
      navegacion.classList.remove('activa');
      botonMenu.focus();
    }
  });
});