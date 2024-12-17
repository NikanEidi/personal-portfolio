window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");
    setTimeout(() => {
      loader.style.display = "none";
      mainContent.style.display = "block";
    }, 5000);
  });
  
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    themeToggle.textContent = document.body.classList.contains("light-mode")
      ? "Dark Mode"
      : "Light Mode";
  });