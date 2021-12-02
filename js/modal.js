let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




///////////////////////






let selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    let formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  let formData = {};
  formData["course"] = document.getElementById("course").value;
  formData["dateFinish"] = document.getElementById("dateFinish").value;
  formData["university"] = document.getElementById("university").value;
  return formData;
}

function insertNewRecord(data) {
  let table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.course;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.dateFinish;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.university;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<a onClick="onDelete(this)"><i class="fas fa-trash"></i></a>`;

  //cell4.innerHTML = `<a onClick="onEdit(this)"><i class="far fa-edit"></i></a>
  //                   <a onClick="onDelete(this)"><i class="fas fa-trash"></i></a>`;

}

function resetForm() {
  document.getElementById("course").value = "";
  document.getElementById("dateFinish").value = "";
  document.getElementById("university").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("course").value = selectedRow.cells[0].innerHTML;
  document.getElementById("dateFinish").value = selectedRow.cells[1].innerHTML;
  document.getElementById("university").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.course;
  selectedRow.cells[1].innerHTML = formData.dateFinish;
  selectedRow.cells[2].innerHTML = formData.university;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("course").value == "") {
    isValid = false;
    document.getElementById("courseValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("courseValidationError")
        .classList.contains("hide")
    )
      document.getElementById("courseValidationError").classList.add("hide");
  }
  return isValid;
}
