let password = prompt("Nhập mật khẩu");

let doDaiMatKhau = password.length;

if (doDaiMatKhau < 8) {
  //Code 
  alert("Mật khẩu quá ngắn");
} else {
  alert("OK");
}
// Nhập vào 1 tháng trong năm, in ra số ngày của tháng đó,
// nếu tháng không hợp lệ, in ra "Tháng không hợp lệ".

// let month = parseInt(prompt("Nhập 1 tháng"));

// if (month === 1
//   || month === 3
//   || month === 5
//   || month === 7
//   || month === 8
//   || month === 10
//   || month === 12
// ) {
//   alert("31 ngày");
// } else if (month === 2) {
//   alert("28 hoặc 29 ngày");
// } else if (
//   month === 4
//   || month === 6
//   || month === 9
//   || month === 11
// ) {
//   alert("30 ngày");
// }
// //BMI

// let chieuCao = Number(prompt("Nhập chiều cao (cm)"));
// let canNang = Number(prompt("Nhập cân nặng (kg)"));

// chieuCao = chieuCao / 100;

// let bmi = canNang / (chieuCao * chieuCao);
// if (bmi <= 18.5) {
//   console.log("Gầy");
// } else if (bmi < 24.9) {
//   console.log("Bình thường");
// }
// else {
//   console.log("Béo");
// }

let month = parseInt(prompt("Nhập 1 tháng"));

switch(month){
  case 1:
  case 3:
  case 5:
    alert("31 ngày");
    break;
  case 2:
    alert("28 hoặc 29 ngày");
    break;
  case 4:
  case 6:
  case 9:  
    alert("30 ngày");
    break;
  default:
    alert("Nhập sai tháng");
}

