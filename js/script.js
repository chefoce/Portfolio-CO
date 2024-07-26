let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
console.log(navbar);
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    })
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('nav-active');
}

const frm = document.querySelector("#frm");

frm.addEventListener("submit", event => {
    event.preventDefault();
    const frm = event.target;
    const formData = {
        name: frm.name.value,
        email: frm.email.value,
        msj: frm.msj.value
    };

    const URL =
        `https://api.whatsapp.com/send?phone=526951084178&text=Name:%20${formData.name},%20Email:%20${formData.email},%20Message:%20${formData.msj}`;

    window.open(URL, "_blank");
});