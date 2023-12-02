class Game {
    constructor() {}

    startGame() {
        const firstScreen = (document.getElementById(
            'first-screen'
        ).style.display = 'none');

        const secondScreen = (document.getElementById(
            'second-screen'
        ).style.display = 'block');

        const letsGoTitle = document.getElementById('lets-go');
        setInterval(() => {
            letsGoTitle.style.display = 'none';
        }, 2000);
    }
}

//=========================================================
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
    const gameClass = new Game();
    gameClass.startGame();
});
