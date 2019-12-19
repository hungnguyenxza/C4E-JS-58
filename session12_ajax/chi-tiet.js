let listSanPham = JSON.parse(localStorage.getItem("listSanPham"));

let sanPhamDangChon = localStorage.getItem("sanPhamDangChon");

let sanPham;
for (let i = 0; i < listSanPham.length; i++) {
  const element = listSanPham[i];
  if (element.title === sanPhamDangChon) {
    sanPham = element;
    break;
  }
}

document.getElementById('title').innerHTML = sanPham.title;
document.getElementById('description').innerHTML = sanPham.description;
