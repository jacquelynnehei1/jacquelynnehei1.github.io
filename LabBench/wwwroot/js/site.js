// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function toggleNav() {
    if (document.getElementById("sideNav").style.width == "250px") {
        closeNav();
    }
    else {
        openNav();
    }
}

function openNav() {
    document.getElementById("sideNav").style.width = "260px";
    document.getElementById("topNavLogo").style.zIndex = "2";
    document.getElementById("closeBtn").style.display = "block";

    document.getElementById("mainContainer").style.width = (window.innerWidth - 260) + "px";
    document.getElementById("mainContainer").style.marginLeft = "260px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("topNavLogo").style.marginLeft = "0";

    document.getElementById("mainContainer").style.width = "100%";
    document.getElementById("mainContainer").style.marginLeft = "0";

    document.getElementById("closeBtn").style.display = "none";
}


