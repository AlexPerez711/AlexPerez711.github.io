'use strict'

const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));


function homePage() {
    setTimeout(() => {
        window.location.replace('./Home_Page.html');
    }, 200);
}

function projectPage() {
    setTimeout(() => {
        window.location.replace('./Projects.html');
    }, 200);
}

function aboutPage() {
    setTimeout(() => {
        window.location.replace('./About_Me.html');
    }, 200);
}

function contactPage() {
    setTimeout(() => {
        window.location.replace('./Contact.html');
    }, 200);
}

const settingsLink = document.querySelector('#settings-link');
settingsLink.addEventListener('click', showPopup);

function showPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    popup.innerHTML = `
        <h2>Settings</h2>
        <p>This is the settings popup.</p>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 10000);
}
