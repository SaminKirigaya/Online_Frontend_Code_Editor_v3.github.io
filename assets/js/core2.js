
document.getElementById("btnact1").addEventListener("click",()=>{
    document.getElementById("btnact1").classList.add("active");
    document.getElementById("btnact2").classList.remove("active");
});

document.getElementById("btnact2").addEventListener("click",()=>{
    document.getElementById("btnact1").classList.remove("active");
    document.getElementById("btnact2").classList.add("active");
});