let dsTen = ["Hung", 'Quang', `Tung`];

// console.log(dsTen);
// console.log(dsTen.length);
// console.log(dsTen[1]);
// console.log(dsTen);

// for (let index = 0; index < dsTen.length; index++) {
//   const element = dsTen[index];
//   console.log(`${index + 1}. ${element}`);
// }

// let numbers = [2, 5, 10, 15, 9, 8];
// //1. Tính tổng
// let s = 0;
// for (let i = 0; i < numbers.length; i++) {
//   s += numbers[i];
// }
// console.log("Tổng: " + s);
// let avg = s / numbers.length;
// console.log("Giá trị trung bình: " + avg);

// let lessThanAvg = '';
// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] < avg){
//     lessThanAvg = lessThanAvg + numbers[i] + ", ";
//     // console.log(numbers[i]);
//   }
// }
// lessThanAvg = lessThanAvg.substring(0, lessThanAvg.length - 2);
// console.log("Các số nhỏ hơn giá trị trung bình: " 
//               + lessThanAvg);


// let n = Number(prompt("Nhập N"));
// for (let i = 0; i < numbers.length; i++) {
//   if(N === numbers[i]){
//     console.log(numbers[i]);
//   }  
// }
// numbers.push(7, 8);

// let max = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if(max < numbers[i]){
//     max = numbers[i];
//   }
// }

// Bài tập: sắp xếp mảng.

let names = ["Phạm Văn A", "Nguyễn Thị B"];
//1. Thêm tên mới, hỏi người dùng tên,
// thêm tên này vào mảng.
// let A = prompt("Nhập tên:");
// names.push(A);

//2. In mảng ra theo cấu trúc: STT, Tên
console.log("STT: Tên");
for (let index = 0; index < names.length; index++) {
  console.log(`${index + 1} : ${names[index]}`);

}
//3. Hỏi người dùng STT muốn sửa, và tên mới muốn sửa
// sửa tên trong mảng tại đúng ví trí.
// In lại mảng theo cấu trúc
// let stt = parseInt(prompt("Nhập số thứ tự muốn sửa "));
// if (stt > 0 && stt <= names.length) {
//   let newName = prompt("nhập tên mới");
//   names[stt - 1] = newName;
//   console.log("===================\nSTT: Tên");
//   for (let index = 0; index < names.length; index++) {
//     console.log(`${index + 1} : ${names[index]}`);
//   }
// } else {
//   alert("Sai stt");
// }
// //4. Hỏi người dùng STT cần xóa, xóa tên tại STT này.
// // In lại mảng theo cấu trúc.
// stt = parseInt(prompt("nhập stt muốn xóa"));
// if (stt > 0 && stt <= names.length) {
//   names.splice(stt - 1, 1);
//   for (let i = 0; i < names.length; i++) {
//     console.log(`${i + 1} : ${names[i]}`);
//   }
// } else {
//   alert("Sai stt");
// // }
// // 5. Hỏi 1 tên, ktra xem mảng có tên này không?
// let inputName = prompt("Nhap ten");
// let isExist = false;
// for (let i = 0; i < names.length; i++) {
//   const element = names[i];
//   isExist = element.toLowerCase().includes(inputName.toLowerCase());
//   if (isExist) {
//     console.log("Có tồn tại");
//     break;
//   }
// }
// if (!isExist) {
//   console.log("Không tồn tại");
// }

// // 6. Hỏi 1 tên, tìm tất cả tên chứa từ này.
// let name1 = prompt("Nhập tên");
// let result = [];
// for (let i = 0; i < names.length; i++) {
//   const element = names[i];
//   if (element.toLowerCase().includes(name1.toLowerCase())) {
//     result.push(element);
//   }
// }
// if (result.length === 0) {
//   console.log("Không tìm thấy kết quả nào");
// } else {
//   console.log(`==== Kết quả tìm kiếm ${name1}:\nSTT: Tên`);
//   for (let index = 0; index < result.length; index++) {
//     console.log(`${index + 1} : ${result[index]}`);

//   }
// }
// 7. Sắp xếp tên.
names.sort();
names.reverse();
console.log(`===============\nSTT: Tên`);
for (let index = 0; index < names.length; index++) {
  console.log(`${index + 1} : ${names[index]}`);

}