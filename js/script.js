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


// ================= MODALS =================
const modalBtns = document.querySelectorAll("[data-target]");
const modalCloses = document.querySelectorAll(".modal__close");

// открыть модалку
modalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.dataset.target;
        const modal = document.getElementById(targetId);
        if (modal) modal.classList.add("active");
    });
});

// закрытие
function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("active");
    modal.querySelectorAll("input, textarea, select").forEach(el => el.value = "");
}

// крестик
modalCloses.forEach(btn => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        closeModal(modal);
    });
});

// клик вне окна
window.addEventListener("click", e => {
    document.querySelectorAll(".modal.active").forEach(modal => {
        if (e.target === modal) closeModal(modal);
    });
});


// ================= TELEGRAM =================
async function sendToTelegram(dataObj, type = "Заявка") {
    const token = "7984275302:AAFjrcvcqoW9fi2Pjz_KdW_pfgPCFhUVFmw";
    const chat_id = "-1003730035240";

    let message = `🛠 <b>${type}</b>\n\n`;

    for (let key in dataObj) {
        if (dataObj[key]) {
            message += `${key}: ${dataObj[key]}\n`;
        }
    }

    try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id,
                text: message,
                parse_mode: "HTML"
            })
        });
    } catch (err) {
        console.error("Telegram error:", err);
    }
}


// ================= FORM SUBMIT =================
document.querySelectorAll(".modal form").forEach(form => {
    form.addEventListener("submit", async e => {
        e.preventDefault();

        const modal = form.closest(".modal");

        // данные формы
        const dataObj = {};
        form.querySelectorAll("input, textarea, select").forEach(input => {
            dataObj[input.name || input.placeholder] = input.value;
        });

        // определяем тип заявки
        let type = "Заявка";

        if (modal.id === "heroModal") type = "🚗 HERO Заявка";
        if (modal.id === "partsModal") type = "🔧 Запчастини";
        if (modal.id === "shopPartsModal") type = "🛒 Магазин запчастин";

        console.log("Отправка:", type, dataObj);

        // отправка в Telegram
        await sendToTelegram(dataObj, type);

        // закрытие
        closeModal(modal);

        alert("Заявка отправлена!");
    });
});


// ================= REVEAL ON SCROLL =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const triggerBottom = window.innerHeight / 1.1;

    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < triggerBottom) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
setTimeout(revealOnScroll, 100);