import initHome from './home.js';
import '../css/bar.css';
import '../css/base.css';
import '../css/home.css';

initHome();

const buttonNav = document.querySelectorAll('.button-nav,.menu-button');
buttonNav.forEach(element => {
    initWebsite(element);
})

function initWebsite(element) {
    element.addEventListener('click', () => {
        switch (element.textContent.trim()) {
            case "Home":
                console.log("Home");
                initHome()
                break;
            case "About":
                console.log("About");
                break;
            case "Menu":
                console.log("Menu");
                break;
            default:
                alert("Error loading navigation elements. Please refresh the page.");
        }
    })
}
