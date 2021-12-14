const openModal = document.getElementById("openModal");
const myModal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal");
const btnSend = document.getElementById("btnSend");
const form = document.getElementById("form");

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

btnSend.onclick = function (e) {
  e.preventDefault();
  if (fields.course && fields.university !== null) {
    insertNewItem();
    resetForm();
    alert("Se ha añadido el curso correctamente");
    myModal.style.display = "none";
    document.querySelectorAll(".form__grupo-correcto").forEach((icono) => {
      icono.classList.remove("form__grupo-correcto");
    });
  } else {
    myModal.style.display = "block";
    alert("Por favor, completa el formulario correctamente");
  }
};

const resetForm = () => {
  form.reset();
  fields["course"] = false;
  fields["university"] = false;
  console.log(fields);
};

const inputs = document.querySelectorAll("#form input");

const expressions = {
  textRules: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
};

const fields = {
  course: false,
  university: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "course":
      validarCampo(expressions.textRules, e.target, "course");
      break;
    case "university":
      validarCampo(expressions.textRules, e.target, "university");
      break;
  }
};

const validarCampo = (expression, input, field) => {
  if (expression.test(input.value)) {
    document
      .getElementById(`group__${field}`)
      .classList.remove("form__grupo-incorrecto");
    document
      .getElementById(`group__${field}`)
      .classList.add("form__grupo-correcto");
    document
      .querySelector(`#group__${field} i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#group__${field} i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#group__${field} .form__input-error`)
      .classList.remove("form__input-error-active");
    fields[field] = true;
  } else {
    document
      .getElementById(`group__${field}`)
      .classList.add("form__grupo-incorrecto");
    document
      .getElementById(`group__${field}`)
      .classList.remove("form__grupo-correcto");
    document
      .querySelector(`#group__${field} i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#group__${field} i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#group__${field} .form__input-error`)
      .classList.add("form__input-error-active");
    fields[field] = false;
  }
};

const getKey = inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

/* loadCourses(courses); */
