function required() 
{
    var regName = /^[A-z ]+$/;
    playername=document.getElementById("name").value;
    if(!regName.test(playername))
    {  
        alert('Invalid name given.'); 
        return false;  
    }
    else 
    {
        return true;
    }
}
document.getElementById("computer").onclick = function () 
{
    if (required()) 
    {
        location.href = "levelpage.html";
    }
};
document.getElementById("player").onclick = function () {
    if (required()) {
        location.href = "levelpage.html";
    }
};
