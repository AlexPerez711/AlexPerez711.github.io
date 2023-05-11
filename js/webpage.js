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
            <a href="#" id="closeButton" onclick="hidePopup()">Close</a>
        `;
    document.body.appendChild(popup);
}

function hidePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
    }
}

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_t71w4cw";
    const templateID = "template_2if9iod";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message was sent successfully :)");
            })
        .catch((err) => console.log(err));
}



