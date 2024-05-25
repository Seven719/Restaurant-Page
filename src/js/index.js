import initHome from './home.js';
import initMenu from './menu.js';
import initAbout from './about.js';
import '../css/base.css';
import '../css/home.css';
import '../css/menu.css';
import '../css/about.css';

document.body.style.backgroundImage = "url('assets/background.jpg')";

initHome();

function emptyContent() {
    const content = document.getElementById('content');
    content.textContent = "";
    content.className = "";
}

const buttonNav = document.querySelectorAll('.button-nav');
buttonNav.forEach(element => {
    initWebsite(element);
})

function initWebsite(element) {
    element.addEventListener('click', () => {
        emptyContent();
        switch (element.textContent.trim()) {
            case "Home":
                console.log("Home");
                initHome();
                break;
            case "About":
                console.log("About");
                initAbout();
                break;
            case "Menu":
                console.log("Menu");
                initMenu();
                break;
            default:
                alert("Error loading navigation elements. Please refresh the page.");
        }
    })
}
