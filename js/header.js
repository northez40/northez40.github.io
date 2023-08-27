let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    header.classList.toggle('sticky', value > 0);
});

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');

    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}