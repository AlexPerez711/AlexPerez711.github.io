const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));

function delayedScroll(target, delay) {
    setTimeout(() => {
        scrollToSection(target);
    }, delay);
}

function scrollToSection(target) {
    const section = document.querySelector(target);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function homePage() {
    delayedScroll('#homePage', 200);
}

function projectPage() {
    delayedScroll('#projects', 200);
}

function aboutPage() {
    delayedScroll('#aboutPage', 200);
}

function contactPage() {
    delayedScroll('#contact', 200);
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
