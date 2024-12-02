let hamburger = document.getElementById("hamburger");
let cross = document.getElementById("cross");
let nav_links = document.getElementById("nav_links");

hamburger.addEventListener("click", () => {
  nav();
});

cross.addEventListener("click", () => {
  nav();
});

function nav() {
  nav_links.classList.toggle("responsive_nav");
  cross.classList.toggle("responsive_cross");
}
