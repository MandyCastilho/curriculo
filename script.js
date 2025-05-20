document.getElementById('current-year').textContent = new Date().getFullYear();


  const toggleButton = document.getElementById("toggle-dark-mode");
  const icon = toggleButton.querySelector(".icon");
  const text = toggleButton.querySelector(".text");

  // Verifica o localStorage
  if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("dark-mode");
    icon.textContent = "☀️";
    text.textContent = "Modo Claro";
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");

    icon.textContent = isDark ? "☀️" : "🌙";
    text.textContent = isDark ? "Modo Claro" : "Modo Escuro";

    localStorage.setItem("tema", isDark ? "escuro" : "claro");
  });





