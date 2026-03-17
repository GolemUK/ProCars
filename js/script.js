// ================= BURGER MENU =================
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// ================= SCROLL HEADER =================
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ================= MODAL =================
const partsBtn = document.querySelectorAll(".open-parts-modal");
const partsModal = document.getElementById("partsModal");
const modalClose = document.querySelector(".modal__close");

partsBtn.forEach(btn => {
    btn.addEventListener("click", () => partsModal.classList.add("active"));
});

modalClose.addEventListener("click", () => partsModal.classList.remove("active"));

window.addEventListener("click", e => {
    if(e.target === partsModal) partsModal.classList.remove("active");
});

// ================= REVEAL ON SCROLL =================
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight / 1.1;
    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if(revealTop < triggerBottom){
            reveal.classList.add("active");
        }
    });
});