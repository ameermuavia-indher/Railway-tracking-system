const themeToggleBtn = document.querySelector("#themeToggleBtn");
const themeIcon = themeToggleBtn.querySelector("i");

// Check the previously saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeIcon.classList.replace("bi-moon-stars", "bi-sun");
}

// Change theme when the button is clicked
themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.replace("bi-moon-stars", "bi-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.replace("bi-sun", "bi-moon-stars");
    localStorage.setItem("theme", "light");
  }
});