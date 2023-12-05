window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button');

    startButton.addEventListener('click', () => {
        const gameClass = new Game();
        gameClass.startGame();
    });

    // const restartButton = document.getElementById('restart-button');
});
