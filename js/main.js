// hide navbar on scroll down and reveal on scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-bar").style.animation = "expand 1s forwards";
    } else {
        document.getElementById("nav-bar").style.animation = "retract 1s forwards";

    }
    prevScrollpos = currentScrollPos;
}