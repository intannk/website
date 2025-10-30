// --- MENU TOGGLE ---
const menuBTN = document.getElementById('menu_btn');
const navLinks = document.getElementById('nav_links');
const menuBTNIcon = menuBTN.querySelector('i');

menuBTN.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    menuBTNIcon.setAttribute('class', isOpen ? "ri-close-line" : "ri-menu-line");
});

const whatsappForm = document.getElementById("whatsappForm");
if (whatsappForm) {
    whatsappForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const whatsappNumber = "6281511312619";
        const text = `Halo, saya ${name} (${email}) ingin bertanya: ${message}`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");
    });
}

const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const qtyDisplay = document.getElementById('qty');

let qty = 1;

minusBtn.addEventListener('click', () => {
    if (qty > 1) qty--;
    qtyDisplay.textContent = qty;
});

plusBtn.addEventListener('click', () => {
    qty++;
    qtyDisplay.textContent = qty;
});

