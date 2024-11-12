function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

 function showPopup(title, description, price, qrCodeUrl) {
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupDescription').innerText = description;
    document.getElementById('popupOverlay').classList.add('show');
}

function closePopup() {
    document.getElementById('popupOverlay').classList.remove('show');
}