const TOP_BACK_BUTTON = document.querySelector('#top-btn');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 400) {
        TOP_BACK_BUTTON.style.display = "block";
    } else {
        TOP_BACK_BUTTON.style.display = "none";
    }
});

function displayMenu() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}