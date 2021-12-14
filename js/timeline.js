// Tomamos el botón del formulario
const newItem = document.getElementById("btnSend");

// Creamos la función que toma los datos del modal y los incrusta en el article
const insertNewItem = () => {
  let date = document.getElementById("dateFinish").value;
  let course = document.getElementById("course").value;
  let university = document.getElementById("university").value;
  let article = document.querySelector(".btn-actions");
  const newList = `
  <li>
      <div>
          <time>${date}</time>
          <span>${course} - ${university}</span>
      </div>
  </li>`;
  article.insertAdjacentHTML("afterend", newList);
};
