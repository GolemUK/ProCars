// ======================================================
// HEADER SCROLL & BURGER
// ======================================================
const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// ======================================================
// HERO MODAL
// ======================================================
const heroModal = document.querySelector(".modal.hero");
const openHeroBtn = document.querySelector(".open-modal");
const closeHeroBtn = heroModal ? heroModal.querySelector(".modal__close") : null;

if(openHeroBtn){
    openHeroBtn.addEventListener("click", () => {
        heroModal.classList.add("active");
        document.body.style.overflow = "hidden"; // отключаем скролл фона
    });
}

if(closeHeroBtn){
    closeHeroBtn.addEventListener("click", () => {
        heroModal.classList.remove("active");
        document.body.style.overflow = "auto";
    });
}

window.addEventListener("click", (e) => {
    if(e.target === heroModal){
        heroModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});

// ======================================================
// PARTS MODAL
// ======================================================
const partsModal = document.getElementById("partsModal");
const openPartsBtns = document.querySelectorAll(".open-parts-modal, .order-btn");
const closePartsBtn = partsModal ? partsModal.querySelector(".modal__close") : null;

openPartsBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        partsModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

if(closePartsBtn){
    closePartsBtn.addEventListener("click", () => {
        partsModal.classList.remove("active");
        document.body.style.overflow = "auto";
    });
}

window.addEventListener("click", (e) => {
    if(e.target === partsModal){
        partsModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});

// ======================================================
// REVEAL ANIMATION
// ======================================================
function reveal(){
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 120){
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);