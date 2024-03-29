// Showing Hero after Page Downloading
const hero = document.querySelector('svg');
hero.setAttribute('style', 'width: 50px;');

// Creating Button to Start Game
const gameDescription = document.querySelector('.header-description');
gameDescription.insertAdjacentHTML(
    'afterend',
    "<button class='data-button' style='margin-top: 30px;'>Начать игру</button>"
);
const startGameButton = document.querySelector('.data-button');

// Clearing Description and Button on Starting Game
startGameButton.addEventListener('click', function () {
    const title = document.querySelector('.header-title');

    title.classList.add('hidden');
    gameDescription.classList.add('hidden');
    startGameButton.classList.add('hidden');
});

// Hero Moving
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        console.log(hero.getBoundingClientRect().x);

        hero.style.marginLeft = 50;
        console.log(hero.getBoundingClientRect().x);
    }
});

// Chosing Hero Details
const avatar = document.querySelector('.setup-open-icon');
const heroMenu = document.querySelector('.setup');
const closeMenu = document.querySelector('.setup-close');

avatar.addEventListener('click', function () {
    heroMenu.classList.toggle('hidden');
});

closeMenu.addEventListener('click', function () {
    heroMenu.classList.add('hidden')
});