function welcome() { // Khai báo function
  console.log("Hello world");
}

// welcome(); // Gọi sử dụng function

// welcome();
// welcome();

let xinChao = function () {
  print("Xin chào");
}

// xinChao();

function tinhTong(a, b) {
  print(a);
  print(b);
  print(`Tong 2 so la ${a + b}`);
}
// tinhTong(10, 20);

let soThuNhat = 10;
let soThuHai = 20;
// tinhTong(soThuHai, soThuNhat);
function tinhHieu(a, b, c) {

}
function tinhTich(a, b) {

}
function tinhThuong(a, b) {

}

function print(message) {
  // console.log(message);
  alert(message);
}

function tinhTong2(a, b) {
  return a + b;
}

let sum = tinhTong2(soThuNhat, soThuHai);
// print(sum);

// chỉ số BMI, nhập vào chiều cao và cân nặng
// in ra màn hình trạng thái của người dùng

// 1. Đảo ngược chuỗi
// Ví dụ: "Hello" => "olleH"
function reverseString(string) {
  // return string.split("").reverse().join(",");
  let temp = ``;
  for (let i = string.length - 1; i >= 0; i--) {
    const element = string[i];
    temp += element;
  }
  return temp;
}
// let nhapChuoi = prompt("Nhap chuoi");

// print(reverseString(nhapChuoi));

// 2. Đàn gà
// a. 
let chickenList = [
  {
    id: "ga01",
    weight: 2
  },
  {
    id: "ga02",
    weight: 2.1
  },
  {
    id: "ga03",
    weight: 2.2
  },
  {
    id: "ga04",
    weight: 2.2
  },
  {
    id: "ga05",
    weight: 2.1
  },
];

// function changeWeightChickens(chickens, weightChange){
//   for (let i = 0; i < chickens.length; i++) {
//     const chicken = chickens[i];
//     chicken.weight = Number((chicken.weight * weightChange).toFixed(2));
//   }
//   return chickens;
// }

// function chickenWeightAfter2Weeks(chickens) {
//   return changeWeightChickens(chickens, 1.5);
// }
// console.table(chickenWeightAfter2Weeks(chickenList));
// // b.
// var max = chickenList[0].weight;
// function nangNhat(chickens) {
//   // for (let i = 0; i < chickens.length; i++) {
//   //   const chicken = chickens[i];
//   //   if (chicken.weight > max) {
//   //     max = chicken.weight;
//   //   }
//   // }
//   // for (let i = 0; i < chickens.length; i++) {
//   //   const chicken = chickens[i];
//   //   if(chicken.weight === max){
//   //     console.log(`${i+1}`);
      
//   //   }
//   // }

//   let max = chickens[0];
//   let stt = 0;

//   for (let i = 1; i < chickens.length; i++) {
//     const chicken = chickens[i];
//     if(max.weight < chicken.weight){
//       max = chicken;
//       stt = i;
//     }
//   }
//   console.log(`Con gà lớn nhất có stt "${stt + 1}":`);
//   console.log(max);
// }
// nangNhat(chickenList);
// // c.
function removeRandomChicken(chickens){
  let random; // 0 <= random < chickens.length;
  // 0 <= Math.random() < 1 // float
  // 0 <= Math.random() * length < length; float
  // Math.floor() làm tròn giảm, 5.7 => 5, 5.2 => 5
  // Math.ceil() làm tròn tăng, 5.7 => 6, 5.2 => 6
  // Math.round() làm tròn, 5.7 => 6, 5.3 => 5
  random = Math.floor(Math.random() * chickens.length); 
  let chickenH5N1 = chickens[random];
  console.log('Con gà bị cúm H5N1 là: ');
  console.log(chickenH5N1);
  chickens.splice(random, 1);
}

removeRandomChicken(chickenList);
removeRandomChicken(chickenList);
removeRandomChicken(chickenList);
console.table(chickenList);
// function downWeight(chickens){
//   return changeWeightChickens(chickens, 0.5);
// }
// function tinhTongTrongLuong(chickens) {
//   let sum = 0;
//   for (let i = 0; i < chickens.length; i++) {
//     const chicken = chickens[i];
//     sum += chicken.weight;
//   }
//   return sum;
// }
// console.log(tinhTongTrongLuong(chickenList))

// function changeValue(a){
//   a = 10;
//   console.log("Trong function changeValue: a = " + a);
//   return a;
// }

// let number = 20;
// changeValue(number);
// console.log(number); // 20

// function changeValue2(o){
//   o.age = 10;
//   console.log("Trong function changeValue: age = ");
//   console.log(o); // 10
// }

// let person = {
//   age: 20
// };
// changeValue2(person);
// console.log(person); // 10


let a = 20;
let b = a;
b = 10; // a = 20;

let array = [{},{},{}];
let array2 = [];
let person = {};
for (let i = 0; i < array.length; i++) {
  array2.push(array[i]);
}
array2.pop(); // array.pop();
array2[0].age = 20;

let array3 = JSON.parse(JSON.stringify(array));




