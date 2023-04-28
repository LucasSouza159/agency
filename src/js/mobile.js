const nav = document.getElementById("nav");
const btn = document.getElementById("toggle").addEventListener("click", () => {
  nav.classList.toggle("-right-full");
  nav.classList.toggle("right-0");
});
