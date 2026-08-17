
// Welcome Message
console.log("Welcome to Sariful Islam Official Website");

// Page Loaded
window.onload = function () {
    console.log("Website Loaded Successfully!");
};
/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        const isOpen =
            navLinks.classList.contains("open");

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuBtn.textContent =
            isOpen ? "✕" : "☰";

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.textContent = "☰";

        });

    });

}
