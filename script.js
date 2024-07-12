
document.addEventListener('DOMContentLoaded', function() {
    let maliAutoCard = document.getElementById('maliAutoCard');
    let srednjiAutoCard = document.getElementById('srednjiAutoCard');
    let velikiAutoCard = document.getElementById('velikiAutoCard');

    maliAutoCard.addEventListener('click', () => {
        maliAutoCard.classList.add('clicked');
        document.querySelector('.maliAuto').innerHTML = `
        Dubinsko: <strong>50e</strong><br>
        Pranje motora: <strong>10e</strong><br>
        Poliranje farova: <strong>25 - 30e</strong><br>
        Poliranje i zastita vozila: <strong>Dogovor</strong>`;
    });

    srednjiAutoCard.addEventListener('click', () => {
        srednjiAutoCard.classList.add('clicked');
        document.querySelector('.srednjiAuto').innerHTML = `                 
        Dubinsko: <strong>70e</strong><br>
        Pranje motora: <strong>10e</strong><br>
        Poliranje farova: <strong>25 - 30e</strong><br>
        Poliranje i zastita vozila: <strong>Dogovor</strong>`;
    });

    velikiAutoCard.addEventListener('click', () => {
        velikiAutoCard.classList.add('clicked');
        document.querySelector('.velikiAuto').innerHTML = `                 
        Dubinsko: <strong>90e</strong><br>
        Pranje motora: <strong>10e</strong><br>
        Poliranje farova: <strong>25 - 30e</strong><br>
        Poliranje i zastita vozila: <strong>Dogovor</strong>`;
    });

    const popupButton = document.getElementById('popupButton');
    const popupNavigation = document.getElementById('popupNavigation');

    popupButton.addEventListener('click', function () {
        popupNavigation.classList.toggle('active');
    });

    const navbar = document.querySelector(".navigacija");
    const toggleNavButton = document.getElementById("toggleNavButton");

    toggleNavButton.addEventListener("click", function() {
        navbar.classList.toggle("navbar-visible");
    });

    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) { 
            navbar.classList.add("navbar-visible");
        } else {
            navbar.classList.remove("navbar-visible");
        }
    });
});