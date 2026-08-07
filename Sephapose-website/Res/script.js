// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// ===============================
// Sticky Header Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

// ===============================
// Fade-in Animation
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// ===============================
// Reservation Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thank you! Your reservation request has been received.");

    form.reset();
});

// ===============================
// Hero Button Animation
// ===============================

const heroBtn = document.querySelector(".btn");

setInterval(() => {
    heroBtn.classList.toggle("pulse");
}, 1200);
