
// for (let index = 1; index <= 50; index++) {
//   console.log(index);
// }

// // Nhập vào 1 số N, in ra màn hình, các số từ 0 -> N
// // in ra các số từ 1 -> N
// console.log("========= Các số từ 0 đến N ============");
// let N = parseInt(prompt("Nhập số N"));
// for (let i = 0; i <= N; i++) {
//   console.log(i);
// }

// console.log("========= Các số từ 1 đến N ============");
// for (let i = 1; i <= N; i++) {
//   console.log(i);
// }

// // Nhập vào M, N, in ra các số từ M => N
// console.log("========= Các số từ M đến N ============");
// let M = parseInt(prompt("Nhập M"));
// for (let i = M; i <= N; i++) {
//   console.log(i);
// }
// // In ra các số chẵn từ 0 -> N
// console.log("========= Các số CHẴN từ 0 đến N ============");
// for (let i = 0; i <= N; i += 2) {
//   console.log(i);
// }
// // In ra các số lẻ từ 0 -> N
// console.log("========= Các số LẺ từ 0 đến N ============");
// for (let i = 1; i < N; i += 2) {
//   console.log(i);
// }

// // Nhập vào N, in ra màn hình từ N -> 0
// console.log("========= Các số từ N đến 0 ============");
// for (let i = N; i >= 0; i--) {
//   console.log(i);
// }

//Tính tổng S = 1 + 2 + 3 + ... + 20;
let S = 0;
for (let i = 1; i <= 20; i++) {
  S += i;
}
console.log(S);


// let n = 10;
// let i = 0;

// while (i < n) {
//   console.log(i);
//   i++;
// }

// let password = prompt("Nhập mật khẩu");
// // if(password.length < 8){
// //   password = prompt("Nhập lại mật khẩu ít nhất 8 ký tự");
// // }
// while (password.length < 8) {
//   password = prompt("Nhập lại mật khẩu ít nhất 8 ký tự");
// }
// console.log(password);


// 1. Nhập 1 số N mà N > 10
// 2. Nhập user và pass, thỏa mãn: 
//    user = admin
//    pass = 123456
// thì báo đăng nhập thành công, sai bắt nhập lại cả 2

// 3. Nhập mật khẩu phải chứa ký tự @ 
// (sử dụng includes() của string)

// 4. Nhập mật khẩu phải lớn hơn 8 ký tự, và chứa kí tự @.

// //1.
// let N = Number(prompt("Nhập số N"));
// while(N <= 10){
//   N = Number(prompt("Nhập lại N > 10"));
// }

// //2.
// let user = prompt("Nhập user");
// let pass = prompt("Nhập mật khẩu");
// while(user !== "admin" || pass !== "123456"){
//   user = prompt("Nhập user");
//   pass = prompt("Nhập mật khẩu");
// }
// alert(user + ", " + pass);

// //3.
// let pass = prompt("Nhập mật khẩu");
// while(!pass.includes('@')){
//   pass = prompt("Nhập lại mật khẩu");
// }
// console.log(pass);

// //4.
// let pass = prompt("Nhập mật khẩu");
// while(pass.length <= 8 || !pass.includes("@")){
//   pass = prompt("Nhập mật khẩu");
// }
// console.log(pass);

//Break, Continue


// for (let i = 0; i < 10; i++) {

//   if(i % 2 === 1){
//     // break;
//     continue;
//   }

//   console.log(i);
// }

// Kiểm tra 1 số có phải SNT hay không?

let N = parseInt(prompt("Nhập N"));
let count = 0;
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    // count++;
    count = count + 1;
    if (count > 2) {
      break;
    }
  }
}

if (count === 2) {
  console.log("Là số nguyên tố");
} else {
  console.log("Không là số nguyên tố");
}





