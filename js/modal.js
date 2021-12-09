let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let newList = document.getElementById("newList");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

newList.onclick = function () {
  modal.style.display = "none";
  alert("Se ha agregado un nuevo curso");
};
