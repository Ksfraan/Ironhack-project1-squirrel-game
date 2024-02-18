window.addEventListener('load', () => {
    const player = new Player(
        document.getElementById('player'),
        document.getElementById('game-container'),
        document.getElementById('playerImg')
    );
    const startButton = document.getElementById('start-button');

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            player.move('right');
        } else if (event.key === 'ArrowLeft') {
            player.move('left');
        }
    });

    startButton.addEventListener('click', () => {
        const gameClass = new Game();
        gameClass.startGame();
    });
});
