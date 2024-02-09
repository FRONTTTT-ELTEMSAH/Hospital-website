let menuIcone = document.getElementById("menu-icone");
let navBar = document.getElementById("navlist");
let scrollTop = document.getElementById("Scroll-Top");
menuIcone.addEventListener("click", () => {
  menuIcone.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  menuIcone.classList.remove("fa-times");
  navBar.classList.remove("active");
  if (scrollY >= 400) {
    scrollTop.style.display = "flex";
  } else {
    scrollTop.style.display = "none";
  }
});
