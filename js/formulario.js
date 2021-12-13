const openModal = document.getElementById("openModal");
const myModal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal");
const formBtn = document.getElementById("formBtn");

openModal.onclick = function () {
  myModal.style.display = "block";
};

closeModal.onclick = function () {
  myModal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == myModal) {
    myModal.style.display = "none";
  }
};

formBtn.onclick = function (e) {
  e.preventDefault();
  if (campos.course && campos.university === true) {
    console.log("Formulario enviado");
    form.reset();
    myModal.style.display = "none";

    document.querySelectorAll(".form__grupo-correcto").forEach((icono) => {
      icono.classList.remove("form__grupo-correcto");
    });
  }
};

const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const expresiones = {
  textoValida: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
};

const campos = {
  course: false,
  university: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "course":
      validarCampo(expresiones.textoValida, e.target, "course");
      break;
    case "university":
      validarCampo(expresiones.textoValida, e.target, "university");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`group__${campo}`)
      .classList.remove("form__grupo-incorrecto");
    document
      .getElementById(`group__${campo}`)
      .classList.add("form__grupo-correcto");
    document
      .querySelector(`#group__${campo} i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#group__${campo} i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#group__${campo} .form__input-error`)
      .classList.remove("form__input-error-active");
    campos[campo] = true;
  } else {
    document
      .getElementById(`group__${campo}`)
      .classList.add("form__grupo-incorrecto");
    document
      .getElementById(`group__${campo}`)
      .classList.remove("form__grupo-correcto");
    document
      .querySelector(`#group__${campo} i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#group__${campo} i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#group__${campo} .form__input-error`)
      .classList.add("form__input-error-active");
    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});
