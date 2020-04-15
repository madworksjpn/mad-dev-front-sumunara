import scrollNav from "./modules/scrollNav.js";

// Navbar shrink effect
window.onload = () => {
    scrollNav();
};

window.onscroll = () => {
    scrollNav();
};

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Show signup form on click
document.getElementById("show-form-btn").addEventListener("click", e => {
    e.preventDefault;

    document.getElementById("signup-form").style.display = "block";
});

// Get the current year
document.getElementById("year").innerHTML = new Date().getFullYear();
