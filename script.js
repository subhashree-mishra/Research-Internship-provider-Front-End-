document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    console.log("menuToggle:", menuToggle);
    console.log("nav:", nav);

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
});
