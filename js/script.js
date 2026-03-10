// ======================================================
// BURGER MENU
// ======================================================

function toggleMenu(){

    const menu = document.querySelector(".mobile-menu")

    menu.classList.toggle("active")

}



// ======================================================
// HERO MODAL
// ======================================================

const modal = document.querySelector(".modal")
const openBtn = document.querySelector(".open-modal")
const closeBtn = document.querySelector(".modal__close")

if(openBtn){

    openBtn.onclick = () => modal.classList.add("active")

}

if(closeBtn){

    closeBtn.onclick = () => modal.classList.remove("active")

}

window.onclick = (e)=>{

    if(e.target === modal){

        modal.classList.remove("active")

    }

}



// ======================================================
// PARTS MODAL
// ======================================================

function openPartsModal(){

    const partsModal = document.getElementById("partsModal")

    if(partsModal){

        partsModal.classList.add("active")

    }

}

function closePartsModal(){

    const partsModal = document.getElementById("partsModal")

    if(partsModal){

        partsModal.classList.remove("active")

    }

}



// ======================================================
// REVEAL ANIMATION
// ======================================================

function reveal(){

    const reveals = document.querySelectorAll(".reveal")

    reveals.forEach(el=>{

        const windowHeight = window.innerHeight
        const elementTop = el.getBoundingClientRect().top

        if(elementTop < windowHeight - 120){

            el.classList.add("active")

        }

    })

}

window.addEventListener("scroll", reveal)
