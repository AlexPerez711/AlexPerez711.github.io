'use strict';
const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click', activeLink));
function homePage() {
    window.setTimeout(() => {
        window.location.hash = 'homePage';
    }, 600);
}
function projectPage() {
    window.setTimeout(() => {
        window.location.hash = 'projects';
    }, 600);
}
function aboutPage() {
    window.setTimeout(() => {
        window.location.hash = 'aboutPage';
    }, 600);
}
function contactPage() {
    window.setTimeout(() => {
        window.location.hash = 'contact';
    }, 600);
}

const scrollLink = document.querySelectorAll('.linkScroll');
scrollLink.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Function to update the navigation indicator based on the current section
document.addEventListener('DOMContentLoaded', function() {
    function updateIndicator() {
        const sections = document.querySelectorAll('section');
        const indicator = document.querySelector('.indicator');
        const navLinks = document.querySelectorAll('.linkScroll');
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight) {
                indicator.style.left = `${(index / sections.length) * 100}%`;
                // Update the active class for the corresponding navigation link
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                });
                navLinks[index].classList.add('active');
            }
        });
    }
    // Event listener for the scroll event
    window.addEventListener('scroll', updateIndicator);
});

// popup
const settingsLink = document.querySelector('#settings-link');
const closeButton = document.createElement('a');
closeButton.href = "#";
closeButton.id = "closeButton";
closeButton.textContent = "Close";
closeButton.addEventListener('click', hidePopup);
settingsLink.addEventListener('click', showPopup);
function showPopup(event) {
    event.preventDefault(); // Prevent the default link behavior
    const popup = document.createElement('div');
    popup.classList.add('popup');
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupContent.innerHTML = `
        <h2>Settings</h2>
        <p>This is the settings popup.</p>
    `;
    popupContent.appendChild(closeButton);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
}
function hidePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
    }
}

function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert("Please fill in all the fields before sending the message.");
        return;
    }

    let params = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send("service_5e4d0kk", "template_2if9iod", params).then(function(response) {
        alert("Message successfully sent! " + response.status);
    }, function(error) {
        alert("Failed to send message. Please try again later. Error: " + error);
    });
}


