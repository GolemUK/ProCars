// ======================================================
// HERO MODAL (заявка на ремонт)
// ======================================================

const modal = document.querySelector(".modal")
const openBtn = document.querySelector(".open-modal")
const closeBtn = document.querySelector(".modal__close")

openBtn.onclick = () => {

    modal.classList.add("active")

}

closeBtn.onclick = () => {

    modal.classList.remove("active")

}

window.onclick = (e) => {

    if (e.target === modal) {

        modal.classList.remove("active")

    }

}


// ======================================================
// PARTS MODAL (заказ запчастей)
// ======================================================

function openPartsModal() {

    const partsModal = document.getElementById("partsModal")

    partsModal.classList.add("active")

}

function closePartsModal() {

    const partsModal = document.getElementById("partsModal")

    partsModal.classList.remove("active")

}


// закрытие кликом вне модалки

window.addEventListener("click", (e) => {

    const partsModal = document.getElementById("partsModal")

    if (e.target === partsModal) {

        partsModal.classList.remove("active")

    }

})


// ======================================================
// REVEAL ANIMATION
// ======================================================

function reveal() {

    const reveals = document.querySelectorAll(".reveal")

    reveals.forEach(el => {

        const windowHeight = window.innerHeight
        const elementTop = el.getBoundingClientRect().top

        if (elementTop < windowHeight - 100) {

            el.classList.add("active")

        }

    })

}

window.addEventListener("scroll", reveal)
