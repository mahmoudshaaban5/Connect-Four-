console.log(localStorage.getItem("goto"))

document.getElementById("l1").onclick = function () 
{
    if (localStorage.getItem("goto")=="computer")
        location.href ="level1playwithcomputer.html";
    else
        location.href ="level1withplayer.html"; 


};
document.getElementById("l2").onclick = function () 
{
    if (localStorage.getItem("goto")=="computer")
        location.href ="level2withcomputer.html";
    else
        location.href ="level2withplayer.html";
};