document.getElementById('current-year').textContent = new Date().getFullYear();

  const toggleMode = document.getElementById("toggle-dark-mode");

  toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });



