import initHome from './home.js';
import initMenu from './menu.js';
import '../css/bar.css';
import '../css/base.css';
import '../css/home.css';
import '../css/menu.css';

document.body.style.backgroundImage = "url('assets/background.jpg')";

initHome();

function emptyContent() {
    const content = document.getElementById('content');
    content.textContent = "";
}

const buttonNav = document.querySelectorAll('.button-nav');
buttonNav.forEach(element => {
    initWebsite(element);
})

function initWebsite(element) {
    element.addEventListener('click', () => {
        switch (element.textContent.trim()) {
            case "Home":
                console.log("Home");
                emptyContent();
                initHome();
                break;
            case "About":
                console.log("About");
                break;
            case "Menu":
                console.log("Menu");
                emptyContent();
                initMenu();
                break;
            default:
                alert("Error loading navigation elements. Please refresh the page.");
        }
    })
}
