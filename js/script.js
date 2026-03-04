// ================= MODAL =================
const heroButton = document.querySelector('.hero__button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

heroButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ================= BURGER MENU =================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});

// ================= FORM SUBMIT (Telegram placeholder) =================
const form = document.querySelector('.modal form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        message: form.querySelector('textarea').value,
        name: form.querySelector('input[type="text"]').value,
        phone: form.querySelector('input[type="tel"]').value
    };

    console.log('Form data to send:', data);

    // Здесь можно добавить fetch/post на Telegram bot API
    // пример:
    // fetch('https://api.telegram.org/bot<token>/sendMessage', { ... })

    // Закрыть модалку после отправки
    modal.style.display = 'none';
    form.reset();
});
