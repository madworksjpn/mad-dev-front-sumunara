// Navbar shrink effect
export default function scrollNav() {
    const navbar = document.querySelector(".navbar-expand-lg");
    const navbarNav = document.querySelector(".navbar-nav");
    if (
        // document.documentElement.scrollTop > 80
        window.scrollY > 80
    ) {
        navbar.classList.add("scrolled");
        navbarNav.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
        navbarNav.classList.remove("scrolled");
    }
}
