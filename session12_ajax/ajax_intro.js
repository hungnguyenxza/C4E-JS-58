// let name = "Hung";
// console.log(name);
// let jsonName = JSON.stringify(name);
// console.log(jsonName);

// let age = 20;
// console.log(age);
// let jsonAge = JSON.stringify(age);
// console.log(jsonAge);

// let isRain = true;
// console.log(isRain);
// let jsonIsRain = JSON.stringify(isRain);
// console.log(jsonIsRain);

// let favorite = ['HTML', "Css", `Javascript`];
// console.log(favorite);
// let jsonFavorite = JSON.stringify(favorite);
// console.log(jsonFavorite);

// let myInfo = {
//   'name': "Hung",
//   age: 20,
//   "favorite": ['HTML', "Css", `Javascript`]
// };
// console.log(myInfo);
// let jsonMyInfo = JSON.stringify(myInfo);
// console.log(jsonMyInfo);

// console.log("============ Json parse ==========");

// let json = `[{"food":"Cơm", "price": 200000},{"food":"Phở", "price": 30000}]`;
// let data = JSON.parse(json);
// console.log(data);
// console.log(data.pop());
// console.log(data);


var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // document.getElementById("demo").innerHTML = this.responseText;
    let data = JSON.parse(this.responseText);
    document.getElementById('now').innerHTML = data.date;
    document.getElementById('temperature').innerHTML = data.temperature + "&deg;" + data.unit;
    document.getElementById('humidity').innerHTML = data.humidity;
    document.getElementById('condition').innerHTML = data.condition;
  }
};
xhttp.open("GET", `https://weather-data-demo.herokuapp.com/get-weather-today`);
xhttp.send();

