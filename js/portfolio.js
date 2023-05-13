'use strict'

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

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_ijcukgs";
    const templateID = "template_aynqfom";

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