var selectedRow = null

function FormSimpan(x) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    addData(formData);
  }
  else {
    updateData(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["merek"] = document.getElementById("merek").value;
  formData["model"] = document.getElementById("model").value;
  formData["tahun"] = document.getElementById("tahun").value;
  formData["harga"] = document.getElementById("harga").value;
  return formData;
}

function addData(data) {
  var table = document.getElementById("listMobil").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.merek;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.model;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.tahun;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.harga;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<button onClick="editData(this)">Edit</button> <button onClick="hapusData(this)">Delete</button>`;
}

function editData(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("merek").value = selectedRow.cells[0].innerHTML;
  document.getElementById("model").value = selectedRow.cells[1].innerHTML;
  document.getElementById("tahun").value = selectedRow.cells[2].innerHTML;
  document.getElementById("harga").value = selectedRow.cells[3].innerHTML;
}
function updateData(formData) {
  selectedRow.cells[0].innerHTML = formData.merek;
  selectedRow.cells[1].innerHTML = formData.model;
  selectedRow.cells[2].innerHTML = formData.tahun;
  selectedRow.cells[3].innerHTML = formData.harga;
}

function hapusData(td) {
  if (confirm('Apakah Anda akan menghapus data ini?')) {
    row = td.parentElement.parentElement;
    document.getElementById('listMobil').deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("merek").value = '';
  document.getElementById("model").value = '';
  document.getElementById("tahun").value = '';
  document.getElementById("harga").value = '';
  selectedRow = null;
}