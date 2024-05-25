function initHome() {
    const content = document.getElementById('content');
    content.classList.add('home');

    const title = document.createElement('h1');
    const description = document.createElement('p')

    title.textContent = "Best Pizza In The World";
    description.textContent = "Indulge in our mouthwatering selection of authentic Italian pizzas, crafted with love and tradition. From classic Margheritas to gourmet specialties, every bite is a taste of Italy.";

    content.append(title, description);
}

export default initHome;
