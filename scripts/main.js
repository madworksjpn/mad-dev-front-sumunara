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

// Get the current year
document.getElementById("year").innerHTML = new Date().getFullYear();
