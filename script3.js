const steam = ["Counter-Strike 2 ","Minecraft ", "Grand Theft Auto V ", "Fortnite ", "EA Sports FC 25 " ];

let text = "";

for (let x of steam){
    text += x + "<br>";
}

document.getElementById("Steam").innerHTML = text;