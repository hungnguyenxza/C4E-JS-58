
let h1 = document.getElementById('welcome');
console.dir(h1); //Lấy ra

h1.innerHTML = "Welcome C4E 60 <h1>Tên tôi là Hùng</h1>"; // Sửa dữ liệu

let h3 = document.getElementsByClassName("xin-chao-class");
console.dir(h3);

for (let i = 0; i < h3.length; i++) { //Duyệt dữ liệu
  h3[i].innerHTML = "Welcome C4E 60"; // Update data
}

let ul = document.getElementById("food");
// ul.innerHTML = "<li>Phở</li>" +
//               "<li>Cơm</li>" + 
//               "<li>Bún</li>";

let foods = ["Phở", "Cơm", "Bún"];
for (let i = 0; i < foods.length; i++) {
  const element = "<li>" + foods[i] + "</li>";
  ul.innerHTML += element;
}

let objects = [
  {
    'title': 'Javascript',
    'explain': 'Là ngôn ngữ back-end',
  },
  {
    'title': 'Html',
    'explain': 'Là ngôn ngữ front-end',
  },
  {
    'title': 'Css',
    'explain': 'Là ngôn ngữ stylesheet',
  },
];

for (let i = 0; i < objects.length; i++) {
  const element = objects[i];
  let html = `
            <dt>${element.title}</dt>
            <dd>${element.explain}</dd>`;
  document.getElementById("objects").innerHTML += html;
}


let persons = [
  {
    'name': "Hùng",
    'age': 20,
    'school': "ĐHBK",
  },
  {
    'name': "Tùng",
    'age': 22,
    'school': "ĐHHN",
  },
  {
    'name': "Quang",
    'age': 25,
    'school': "ĐHCN",
  },
]