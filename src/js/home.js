function initHome() {
    const content = document.getElementById('content');
    content.textContent = "";

    const title = document.createElement('h1');
    const description = document.createElement('p')
    const buttonMenu = document.createElement('button');

    title.textContent = "Best Pizza In The World";
    description.textContent = "Indulge in our mouthwatering selection of authentic Italian pizzas, crafted with love and tradition. From classic Margheritas to gourmet specialties, every bite is a taste of Italy.";
    buttonMenu.textContent = "Menu";

    buttonMenu.id = "menu";
    buttonMenu.classList.add('menu-button');

    content.append(title, description, buttonMenu);
}

export default initHome;
