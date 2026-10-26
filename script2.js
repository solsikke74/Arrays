const steam = ["Counter-Strike 2 ", "Mortal Shell || ", "Big walk "];
document.getElementById("steam1").innerText = steam;


function myFunction() {
 steam.push("Wardogs");
 document.getElementById("steam2").innerText = steam;
}

function myFunctionpop() {
 steam.pop();
document.getElementById("steam3").innerText = steam; 
}

function byttSpill() {
    steam[1] = "War Dogs";
    document.getElementById("steam4").innerText = steam;
}
