
const filmer = ["Project Hail Mary", " Erin Brockowich", "The Martian"];
document.getElementById("demo").innerText = filmer;


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("fruit").innerHTML = text;
document.getElementById("fruit2").innerText = text;

const Berries = ["Strawberry", "Raspberry", "Blueberry", "Blackberry"];

let BerriesText = "<ul>";

for (let i = 0; i < Berries.length; i++) {
  BerriesText += "<li>" + Berries[i] + "</li>";
}
BerriesText += "</ul>";

document.getElementById("berries").innerHTML = BerriesText;


const tallrekke = [1, 2, 3, 4, 5];
document.getElementById("tall").innerText = tallrekke;

const sum = tallrekke.reduce((total, verdi) => total + verdi, 0);
document.getElementById("sum").innerHTML = sum; 



