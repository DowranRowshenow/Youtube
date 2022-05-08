function sideNav() 
{
    var side_nav = document.getElementById("side_nav");
    if (side_nav.style.width == "250px")
    {
        side_nav.style.width = "0px";
    }
    else
    {
        side_nav.style.width = "250px";
    }
}