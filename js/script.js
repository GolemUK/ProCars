// ================= BURGER MENU =================
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
}

// ================= SCROLL HEADER =================
const header = document.querySelector(".header");
if (header) {
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 20);
    });
}

// ================= MODAL =================
const modalBtns = document.querySelectorAll(".open-parts-modal");
const modalCloses = document.querySelectorAll(".modal__close");

// открытие модалки
modalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.dataset.target || 'partsModal';
        const modal = document.getElementById(targetId);
        if (modal) modal.classList.add("active");
    });
});

// универсальная функция закрытия и очистки
function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("active");
    modal.querySelectorAll("input, textarea, select").forEach(field => field.value = "");
}

// закрытие крестиком
modalCloses.forEach(close => {
    close.addEventListener("click", () => {
        const modal = close.closest(".modal");
        closeModal(modal);
    });
});

// клик вне модалки
window.addEventListener("click", e => {
    document.querySelectorAll(".modal.active").forEach(modal => {
        if (e.target === modal) closeModal(modal);
    });
});

// ================= FORM SUBMIT =================
document.querySelectorAll(".modal form").forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault();

        // собираем данные
        const dataObj = {};
        form.querySelectorAll("input, textarea, select").forEach(input => {
            dataObj[input.name || input.id] = input.value;
        });
        console.log("Форма отправлена:", dataObj);

        // закрываем и очищаем модалку
        const modal = form.closest(".modal");
        closeModal(modal);

        // уведомление пользователя
        alert("Форма успешно отправлена!");
    });
});

// ================= REVEAL ON SCROLL =================
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    const triggerBottom = window.innerHeight / 1.1;
    reveals.forEach(reveal => {
        if (reveal.getBoundingClientRect().top < triggerBottom) {
            reveal.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
setTimeout(revealOnScroll, 100);