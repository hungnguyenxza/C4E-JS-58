let sanPham = [
  {
    'title': 'iPhone X',
    'description': 'Apple'
  },
  {
    'title': 'Galaxy Note 10',
    'description': 'Samsung'
  },
  {
    'title': 'Xperia 1',
    'description': 'Sony'
  },
];
// lưu dữ liệu mẫu vào localstorage.
let isExist = localStorage.getItem("listSanPham");
if(!isExist){
  localStorage.setItem('listSanPham', JSON.stringify(sanPham));
}
// hiển thị danh sách sản phẩm lên html.

let ul = document.getElementById('listSanPham');
ul.innerHTML = '';
for (let i = 0; i < sanPham.length; i++) {
  const element = sanPham[i];
  let html = `
    <li><a href="#" onclick="goToChiTiet('${element.title}')">${element.title}</a></li>
  `;
  ul.innerHTML += html;
}

function goToChiTiet(title){
  // alert(title);
  localStorage.setItem("sanPhamDangChon", title);
  window.location.href = "chitiet.html";
}