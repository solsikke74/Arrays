const steam = ["Counter-Strike 2 ","Minecraft ", "Grand Theft Auto V ", "Fortnite ", "EA Sports FC 25 " ];

let text = ""; //Vi lager en variabel som samler alle spillnavn i en tekststreng. Vi starter med en tom streng. 

for (let x of steam){ //Går gjennom alle elementene i arrayet "steam", et element om gangen. For hvert element, lagres det i variabelen "x".
    text += x + "<br>";
}

document.getElementById("Steam").innerHTML = text;