function initAbout() {
    const content = document.getElementById('content');
    content.classList.add('about');

    content.append(
        createAboutUs(), 
        createOurStoryHeader(), 
        createOurStory()
    );
}

function createAboutUs() {
    const aboutUs = document.createElement('div');
    const title = document.createElement('div');
    const rightAboutUs = document.createElement('div');
    const titleWord1 = document.createElement('span');
    const titleWord2 = document.createElement('span');

    aboutUs.id = 'about-us';
    title.id = 'title';
    rightAboutUs.id = 'right-about-us';
    rightAboutUs.textContent = 'We\'re your neighborhood pizzeria dedicated to serving up authentic  Italian pizzas with a modern twist. Our passion for quality ingredients  and traditional recipes ensures every bite is a taste of Italy. Come  join us and experience the joy of great pizza, made with love.'
    titleWord1.textContent = 'ABOUT';
    titleWord2.textContent = 'US';

    title.append(titleWord1, titleWord2);
    aboutUs.append(title, rightAboutUs);

    return aboutUs;
}

function createOurStoryHeader() {
    const ourStoryHeader = document.createElement('div');
    ourStoryHeader.id = 'our-story-header';
    ourStoryHeader.textContent = 'OUR STORY';

    return ourStoryHeader;
}

function createOurStory() {
    const ourStory = document.createElement('div');
    const theStory = document.createElement('p');

    theStory.textContent = 'Mamma Mia Pizza Shop is more than just a place to grab a slice—it\'s a journey rooted in tradition and family. Founded by Giovanni Rossi, inspired by his Nonna Maria\'s recipes, our story began in Napoli. With a commitment to quality and a love for crafting delicious pizzas, we\'ve brought the taste of Italy to your table. Join us as we continue to share our passion for great food and unforgettable experiences.'
    ourStory.id = 'our-story';

    ourStory.appendChild(theStory);

    return ourStory;
}

export default initAbout;
