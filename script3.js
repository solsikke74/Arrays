const steam = ["Counter-Strike 2 ","Minecraft ", "Grand Theft Auto V ", "Fortnite ", "EA Sports FC 25 " ];

let text = ""; //Vi lager en variabel som samler alle spillnavn i en tekststreng. Vi starter med en tom streng. 

for (let x of steam){ //Går gjennom alle elementene i arrayet "steam", et element om gangen. For hvert element, lagres det i variabelen "x".
    text += x + "<br>";
}

document.getElementById("Steam").innerHTML = text;

const gamingTall = [1, 4, 8, 1337, 404, 420, 117, 9000];

let sum = ""; //Vi lager en variabel som samler alle tallene i arrayet. Vi starter med 0.
for (let i = 0; i < gamingTall.length; i++) { //Går gjennom alle elementene i arrayet "gamingTall", et element om gangen. For hvert element, lagres det i variabelen "i".
    let x = gamingTall[i]; //Vi henter ut elementet i arrayet som har indeksen "i" og lagrer det i variabelen "x".
    sum += x + "<br>";
}
document.getElementById("GamingTall").innerHTML = sum;


for (let x of GamingTall) { //Går gjennom alle elementene i arrayet "gamingTall", et element om gangen. For hvert element, lagres det i variabelen "x".
    if (x > 10) {
document.getElementById(x).innerText = x;
    }
}