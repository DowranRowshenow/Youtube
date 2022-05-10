// ATTACHMENTS
const side_nav = document.getElementById("side_nav"),
side_bar = document.getElementById("side_bar"),
active = document.getElementById("active"),
main = document.getElementById("main"),
main_main = document.getElementById("main_main");

// NAV CLICK
function sideNav() 
{
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

// EVENTS
$(window).on('resize load', function () 
{
    if ($(window).width() < 760) 
    {
        main.style.marginLeft = "0px";
    } 
    if ($(window).width() > 760) 
    {
        if (!side_nav.style.width == "250px")
        {
            main.style.marginLeft = "80px";
        }
    }
 });  