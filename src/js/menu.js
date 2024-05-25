function initMenu() {
    const content = document.getElementById('content');
    content.classList.add('menu-container');

    const menu = document.createElement('div');
    menu.id = 'menu';

    const menuItems = [
            { name: 'Pizza', ext: 'svg', description: 'Amazing Pizza' },
            { name: 'Pizza', ext: 'svg', description: 'Everyone Loves Me' },
            { name: 'Pizza', ext: 'svg', description: 'PICK ME! PICK ME!' },
            { name: 'Pizza', ext: 'svg', description: 'I look just like everyone else' },
            { name: 'Pizza', ext: 'svg', description: 'I wish I was different but my creator couldn\'t be bothered to find other images that are the same size or modify me to be like other images' },
            { name: 'Pizza', ext: 'svg', description: 'It\'s very comfy over here' },
        ];

    menuItems.forEach(item => {
        menu.appendChild(createMenuItem(item.name, item.ext, item.description));
    });

    content.appendChild(menu);
}

function createMenuItem(name, extension, description) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let image = document.createElement('img');
    image.src = `assets/${name.toLowerCase()}.${extension}`;
    image.alt = name;

    let header = document.createElement('h1');
    header.textContent = name;

    let descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    menuItem.append(image, header, descriptionElement)

    return menuItem;
}

export default initMenu;
