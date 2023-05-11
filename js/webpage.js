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

function sendEmail(event) {
    event.preventDefault();

    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_USER_ID");

    // Get the form values
    const form = document.getElementById("contactForm");
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;

    // Send the email
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    })
        .then(function(response) {
            console.log("Email sent successfully", response);
            // You can add your own success message or redirect to another page here
        }, function(error) {
            console.error("Email sending failed", error);
            // You can add your own error message or handling here
        });
}


