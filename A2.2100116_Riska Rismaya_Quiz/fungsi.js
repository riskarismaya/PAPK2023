let data = [];

function addData() {
  const merek = document.getElementById("merek").value;
  const model = document.getElementById("model").value;
  const tahun = document.getElementById("tahun").value;
  const harga = document.getElementById("harga").value;

  if (merek && model && tahun && harga) {
    const mobil = {
      merek: merek,
      model: model,
      tahun: tahun,
      harga: harga
    };

    data.push(mobil);
    updateDataList();
    reset();
  }
}

function updateDataList() {
  const dataList = document.getElementById("data-list");
  dataList.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const mobil = data[i];
    dataList.innerHTML += `<li>${mobil.merek} ${mobil.model} (${mobil.tahun}) - Rp.${mobil.harga} 
    <button onclick="editData(${i})">Edit</button> 
    <button onclick="deleteData(${i})">Delete</button></li>`;
  }
}

function editData(index) {
  const mobil = data[index];
  document.getElementById("merek").value = mobil.merek;
  document.getElementById("model").value = mobil.model;
  document.getElementById("tahun").value = mobil.tahun;
  document.getElementById("harga").value = mobil.harga;

  data.splice(index, 1);
  updateDataList();
}

function deleteData(index) {
  const confirmation = confirm("Apakah Anda yakin ingin menghapus data ini?");
  if (confirmation) {
    data.splice(index, 1);
    updateDataList();
  }
}

function reset() {
  document.getElementById("merek").value = "";
  document.getElementById("model").value = "";
  document.getElementById("tahun").value = "";
  document.getElementById("tahun").value = "";
}