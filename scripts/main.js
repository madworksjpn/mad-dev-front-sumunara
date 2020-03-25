import scrollNav from "./modules/scrollNav.js";

// Navbar shrink effect
window.onload = () => {
    scrollNav();
};

window.onscroll = () => {
    scrollNav();
};

// Get the current year
document.getElementById("year").innerHTML = new Date().getFullYear();
