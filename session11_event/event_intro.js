
document.getElementById('event-test').onclick = function () {
  alert("Click registed by JS");
  clickTest();
}

function clickTest() {
  console.log("Click by new function");
}

let clickTest2 = function () {
  console.log("Click by new function 2");
}

document.getElementById('event-test').onclick = clickTest;
document.getElementById('event-test').onmouseover = clickTest2;

function clickTest3() {
  alert("Click by new function 3");
}

function changeLanguage() {
  document.getElementById('event-test4').innerHTML = "Xin chào C4E 58";
}

function getNow(){
  document.getElementById('event-test5').innerHTML = new Date();
}

let countClick = 0;
function countUserClick(){
  // countClick++;
  // document.getElementById('count-click').innerHTML = ++countClick;
  document.getElementById('count-click').innerHTML =  
  Number(document.getElementById('count-click').innerHTML) + 1;
}