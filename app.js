// NAV CLICK
function sideNav() 
{
    var side_nav = document.getElementById("side_nav");
    var side_bar = document.getElementById("side_bar");
    var active = document.getElementById("active");
    var main = document.getElementById("main");
    var main_main = document.getElementById("main_main");
    if (side_nav.style.width == "250px")
    {
        side_nav.style.width = "0px";
        active.style.background = "rgba(0, 0, 0, 0)";
        side_nav.style.opacity = 0;
        main.style.marginLeft = "80px";
    }
    else
    {
        side_nav.style.width = "250px";
        active.style.background = "rgba(0, 0, 0, 0.1)";
        side_nav.style.opacity = 1;
        main.style.marginLeft = "250px";
    }
}