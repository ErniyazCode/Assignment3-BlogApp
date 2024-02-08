function navButton(){
    document.getElementById("nav").innerHTML="<div class='nav-content'>HOME</div>"
    document.getElementsByClassName("nav-content").style.visibility="block";
    document.getElementById("nav-item").setAttribute("onclick","hide()");

}

function hide(){
    document.getElementsByClassName("nav-content").style.visibility="hidden";
    document.getElementsByClassName("nav-content").style.maxHeight=0;
   document.getElementById("nav-item").setAttribute("onclick","navButton()");
}