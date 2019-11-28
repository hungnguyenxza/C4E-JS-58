let myInfo = {
  "name": "Hùng",
  'age': 20,
  favorite: ['coding', 'watching'],
}
// console.log(myInfo);
// console.log(myInfo["name"]);// cách 1
// console.log(myInfo.age); // Cách 2
// let key = "favorite"; // Cách 3 ~ cách 1
// console.log(myInfo[key]);


// myInfo["school"] = "ĐH HN";// Thêm key mới
// myInfo.age = 30; // Sửa key đã tồn tại

// delete myInfo.favorite; // Xóa key đã có
// console.log(myInfo);

// console.log('========== Duyệt từng key ================');
// for (const key in myInfo) {
//   if (myInfo.hasOwnProperty(key)) {
//     const element = myInfo[key];
//     console.log(key + ": " + element);
//   }
// }

// Bài tập: 
// 1. Khởi tạo 1 object: Person rỗng
// Cho người dùng nhập vào 3 key và value,
// thêm các cặp key-value này vào Person.
// In lại ra màn hình theo cú pháp: key: value
let Person = {};
// for (let i = 0; i < 3; i++) {
//   let key = prompt("Nhập key thứ " + (i + 1));
//   let value = prompt("Nhập value tương ứng: ");
//   Person[key] = value;
// }
Person.name = "Hung";
Person.age = 20;
Person.school = "DH HN";

// for (const key in Person) {
//   const value = Person[key];
//   console.log(`${key}: ${value}`);
// }
// 2. Sửa, cho người nhập vào key cần sửa, 
// kiểm tra nếu key đúng thì cho nhập giá trị mới vào update.
// In lại Person ra màn hình.
// Ngược lại, báo không tồn tại key
// let keyEdit = prompt("Nhập key cần sửa");
// while(!Person.hasOwnProperty(keyEdit)){
//   keyEdit = prompt("Nhập lại key");
// }
// if (Person.hasOwnProperty(keyEdit)) {
//   let newValue = prompt("Nhập value mới");
//   Person[keyEdit] = newValue;
//   console.log("======== Sau khi sửa ==========");
//   for (const key in Person) {
//     const value = Person[key];
//     console.log(`${key}: ${value}`);
//   }
// } else {
//   console.log("Không tồn tại key");
// }
// 3. Xóa, cho nhập key, xóa key tương ứng nếu tồn tại,
// Không có thông báo Không tồn tại key
// let keyDelete = prompt("Nhập key cần xóa");
// if (Person.hasOwnProperty(keyDelete)) {
//   delete Person[keyDelete];
//   console.log("======== Sau khi xóa ==========");
//   for (const key in Person) {
//     const value = Person[key];
//     console.log(`${key}: ${value}`);
//   }
// } else {
//   console.log("Không tồn tại key");
// }
// 4. Trong các trường hợp nhập key để sửa và xóa trên,
// nghĩ cách để cho người dùng nhập đến khi nào đúng thì mới thực hiện nhiệm vụ.
// let keyExisted = prompt("Nhập key");
// while(!Person.hasOwnProperty(keyExisted)){
//   keyExisted = prompt("Nhập lại key");
// }
// console.log(keyExisted);


// Cửa hàng bán điện thoại

//1. Tạo danh sách 3 điện thoại (tên, giá, nsx)
let defaultPhone = {
  name: '',
  price: 0,
  brand: '',
};
let listPhone = [
  {
    name: "iPhone X",
    price: 20e6,
    brand: 'Apple',
  },
  {
    name: "Note 8",
    price: 22e6,
    brand: 'Samsung',
  },
  {
    name: "Xperia 1",
    price: 25e6,
    brand: 'Sony',
  }
];
for (let i = 0; i < listPhone.length; i++) { // Duyệt từng điện thoại
  const phone = listPhone[i];
  console.log(`${i + 1}.`);
  for (const key in phone) { // Duyệt từng key trong điện thoại
    const value = phone[key];
    console.log(`${key}: ${value}`);
  }
  console.log('---------------------');
}

//1. Thêm
console.log('Thêm điện thoại');
// let addPhone = {};
// for (const key in defaultPhone) {
//     let newValue = prompt(` Nhập ${key} mới`);
//     addPhone[key] = newValue;
// }
// listPhone.push(addPhone);
//In
// for (let i = 0; i < listPhone.length; i++) { // Duyệt từng điện thoại
//   const phone = listPhone[i];
//   console.log(`${i + 1}.`);
//   for (const key in phone) { // Duyệt từng key trong điện thoại
//     const value = phone[key];
//     console.log(`${key}: ${value}`);
//   }
//   console.log('---------------------');
// }

//2. Sửa
// console.log('Sửa điện thoại');
// let stt = prompt("Nhập số thứ tự điện thoại muốn sửa:");
// let name = prompt("Nhập tên mới:");
// let price = prompt("Nhập giá mới:");
// let brand = prompt("Nhập hãng mới:");

// listPhone[stt - 1].name = name;
// listPhone[stt - 1].price = price;
// listPhone[stt - 1].brand = brand;
//In
// for (let i = 0; i < listPhone.length; i++) { // Duyệt từng điện thoại
//   const phone = listPhone[i];
//   console.log(`${i + 1}.`);
//   for (const key in phone) { // Duyệt từng key trong điện thoại
//     const value = phone[key];
//     console.log(`${key}: ${value}`);
//   }
//   console.log('---------------------');
// }
// //3. Xóa
// let stt1 = parseInt(prompt("Nhập số thứ tự điện thoại cần xóa"));
// listPhone.splice(stt1 - 1, 1);
// for (let i = 0; i < listPhone.length; i++) { // Duyệt từng điện thoại
//   const phone = listPhone[i];
//   console.log(`${i + 1}.`);
//   for (const key in phone) { // Duyệt từng key trong điện thoại
//     const value = phone[key];
//     console.log(`${key}: ${value}`);
//   }
//   console.log('---------------------');
// }

// //4. Tìm theo thêm
// // let searchName = 'Note';
// // console.log(`---------- Kết quả tìm kiếm "${searchName}":`);
// // for (let i = 0; i < listPhone.length; i++) {
// //   const phone = listPhone[i];
// //   if (phone.name.toLowerCase().includes(searchName.toLowerCase())) {
// //     console.log(phone);
// //   }
// // }

// //5. Tìm theo giá
// console.log("-------- Tìm theo giá");
// let pricePhone = parseInt(prompt("Nhap gia dt "));
// console.log(`-------- ket qua gia dt "${pricePhone}"`);
// let result = [];
// for (let i = 0; i < listPhone.length; i++) {
//   const phone = listPhone[i];
//   if (phone.price === pricePhone) {
//     result.push(phone);
//   }
// }
// if (result.length === 0) {
//   console.log(`Không có điện thoại nào giá ${pricePhone}`);
// } else {
//   for (let i = 0; i < result.length; i++) { // Duyệt từng điện thoại
//     const phone = result[i];
//     console.log(`${i + 1}.`);
//     for (const key in phone) { // Duyệt từng key trong điện thoại
//       const value = phone[key];
//       console.log(`${key}: ${value}`);
//     }
//     console.log('---------------------');
//   }
// }
// //6.Tìm theo hãng

// //7. Sắp xếp
for (let i = 0; i < listPhone.length; i++) { // Bước 1 2 3 ...
  for (let j = i + 1; j < listPhone.length; j++) {
    // Ss vị trí x với các vị trí phía sau
    if (listPhone[i].name > listPhone[j].name) { // Tiêu chí sắp xếp và kiểu sắp xếp
      let temp = listPhone[i]; // đổi chỗ
      listPhone[i] = listPhone[j];
      listPhone[j] = temp;
    }
  }
}

let stop = true;
while (stop) {
  console.log("===MENU===");
  console.log("1. Hien Thi");
  console.log("2. Them");
  console.log("3. Sua");
  console.log("4. Xoa");
  console.log("5. Thoat");
  let input = prompt("Nhap lua chon");
  switch (input) {
    case "1":
      console.log("Hien thi");
      break;
    case "2":
      console.log("Them");
      break;
    case "3":
      console.log("Sua");
      break;
    case "4":
      console.log("Xoa");
      break;
    case "5":
      console.log("Thoat");
      stop = false;
      break
  }
}
console.log("Hẹn gặp lại. Cảm ơn bạn");





