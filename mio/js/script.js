let menuToggle = document.querySelector(".menu-toggle");

let menu = document.getElementById("menu");

menuToggle.addEventListener("click", (e) => {
  menu.classList.toggle("mostrar");
});
