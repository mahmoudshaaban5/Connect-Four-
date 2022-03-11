playersName = [ "ahmed" , "ali" , "salah" , "sayed" , "sara" , "mariam"];
var name = playersName[Math.floor(Math.random()*playersName.length)];
localStorage.setItem("nameofplayer", name );
function required() 
{
    var regName = /^[a-zA-Z_ ]*$/;
    playername=document.getElementById("name").value;
    if(!regName.test(playername))
    {  
        alert('Invalid name given.'); 
        return false;  
    }
    else 
    {
        localStorage.setItem("name" ,  playername );
        return true;
    }
}
document.getElementById("computer").onclick = function () 
{
    if (required()) 
    {
        localStorage.setItem("goto", "computer");
        location.href = "levelpage.html";
    }
};
document.getElementById("player").onclick = function () {
    if (required()) 
    {
        localStorage.setItem("goto", "player");
        location.href = "levelpage.html";
    }
};

