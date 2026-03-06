// modal

const modal = document.querySelector(".modal")
const openBtn = document.querySelector(".open-modal")
const closeBtn = document.querySelector(".modal__close")

openBtn.onclick = () => {

    modal.classList.add("active")

}

closeBtn.onclick = () => {

    modal.classList.remove("active")

}

window.onclick = (e)=>{

    if(e.target === modal){

        modal.classList.remove("active")

    }

}


// reveal animation

function reveal(){

    const reveals = document.querySelectorAll(".reveal")

    reveals.forEach(el=>{

        const windowHeight = window.innerHeight
        const elementTop = el.getBoundingClientRect().top

        if(elementTop < windowHeight - 100){

            el.classList.add("active")

        }

    })

}

window.addEventListener("scroll", reveal)
