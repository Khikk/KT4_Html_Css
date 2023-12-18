document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navigation li");

    navLinks.forEach(link => {
        const targetId = link.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        link.addEventListener("click", function() {
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

