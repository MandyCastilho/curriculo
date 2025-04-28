const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Só pra dar um toque, muda o texto do botão também
  if (body.classList.contains('dark-theme')) {
    toggleButton.textContent = 'Tema Claro';
  } else {
    toggleButton.textContent = 'Tema Escuro';
  }
});
