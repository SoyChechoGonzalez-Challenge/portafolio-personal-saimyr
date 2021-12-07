let menuToggle = document.querySelector(".menu-toggle");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

//autoclose
let close = document.querySelector("ul"); //selector
close.addEventListener("click", () => {
  menu.classList.remove("active");
});
