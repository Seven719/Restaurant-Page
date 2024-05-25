function initMenu() {
    const content = document.getElementById('content');
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';

    const menu = document.createElement('div');
    menu.id = 'menu';

    for (let index = 0; index < 8; index++) {
        menu.appendChild(createMenuItem('pizza', 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'));
    }

    content.appendChild(menuContainer);
    menuContainer.appendChild(menu);
}

function createMenuItem(name, descriptionIn) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let image = document.createElement('img');
    image.src = `assets/${name.toLowerCase()}.svg`;
    image.alt = name;

    let header = document.createElement('h1');
    header.textContent = name;

    let descriptionOut = document.createElement('p');
    descriptionOut.textContent = descriptionIn;

    menuItem.appendChild(image);
    menuItem.appendChild(header);
    menuItem.appendChild(descriptionOut);

    return menuItem;
}

export default initMenu;
