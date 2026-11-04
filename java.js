document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const menuLinks = document.getElementById("menu-links");

    hamburgerBtn.addEventListener("click", () => {
        // Toggles the 'active' class on both the button and the menu
        hamburgerBtn.classList.toggle("active");
        menuLinks.classList.toggle("active");
    });
});