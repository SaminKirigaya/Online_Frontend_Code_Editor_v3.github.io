
window.addEventListener("load",()=>{
    document.getElementById("load").classList.remove("loader");
    document.getElementById("load").classList.add("loader2");
})





document.getElementById("btnact1").addEventListener("click",()=>{
    document.getElementById("btnact1").classList.add("active");
    document.getElementById("btnact2").classList.remove("active");
});

document.getElementById("btnact2").addEventListener("click",()=>{
    document.getElementById("btnact1").classList.remove("active");
    document.getElementById("btnact2").classList.add("active");
});
//var i=0;
//var greet=["W","E","L","C","O","M","E"," ","H","O","M","E"]
var i = 0;
var greet = ["W", "E", "L", "C", "O", "M", "E", " ", "H", "O", "M", "E"];

    
function displayHello() {
    
    var intxt = document.getElementById("welcomecom").innerText;
    
    if (intxt == "WELCOME HOME") {
    //console.log("inner welcome home");
    document.getElementById("welcomecom").innerText = "";
    i = 0;
    } else {
    if (i == 6) {
        //console.log("inner i=6");
        document.getElementById("welcomecom").innerHTML += greet[i] +" "+ greet[i+1];
        document.getElementById("welcomecom").selectionStart = 8;
        i = i + 2; // Skip the space index and move to next letter
    } else {
        //console.log("inner i+1");
        document.getElementById("welcomecom").innerHTML += greet[i];
        document.getElementById("welcomecom").selectionStart = i;
        i = i + 1;
    }
    }
}
    
    


setInterval(displayHello, 300);
console.log(document.getElementById("welcomecom").innerText);