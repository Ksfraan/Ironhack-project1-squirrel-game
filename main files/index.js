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
        setTimeout(() => {
            letsGoTitle.style.display = 'none';
            this.renderNuts();
        }, 2000);

        const player = document.getElementById('player');
        let position = 0;
        const moveSpeed = 100;

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                position += moveSpeed;
            } else if (event.key === 'ArrowLeft') {
                position -= moveSpeed;
            }
            player.style.left = position + 'px';
        });
    }

    renderNuts() {
        const nut1 = document.createElement('div');
        const nut2 = document.createElement('div');
        nut1.classList.add('falling-nut', 'good-nut');
        nut2.classList.add('falling-nut', 'bad-nut');
        nut1.setAttribute('id', 'nut1');
        nut2.setAttribute('id', 'nut2');

        const gameContainer = document.getElementById('game-container');
        gameContainer.appendChild(nut1);
        gameContainer.appendChild(nut2);

        animateNut(nut1, 'good-nut');
        animateNut(nut2, 'bad-nut');

        function animateNut(nut, nutType) {
            const startPosition = Math.random() * window.innerWidth;
            const fallSpeed = Math.random() * 5 + 3;

            nut.style.left = startPosition + 'px';
            nut.classList.add(nutType);

            function move() {
                const topPosition = nut.offsetTop;
                nut.style.top = topPosition + fallSpeed + 'px';

                if (topPosition > window.innerHeight) {
                    // Reset the position when the nut reaches the bottom of the screen
                    nut.style.top = '-10px'; //negative height for the animation to enter the screen
                    nut.style.left = Math.random() * window.innerWidth + 'px';
                }
                requestAnimationFrame(move);
            }
            move();
        }
    }

    renderCounters() {
        let score = 0;
        let lives = 3;
        const scoreElement = document.getElementById('score');
        const livesElement = document.getElementById('lives');

        function updateCounters() {
            scoreElement.textContent = `Score: ${score}`;
            livesElement.textContent = `Lives: ${lives}`;
        }
    }
}

//==================================================

// document.addEventListener('DOMContentLoaded', () => {
//     const nut1 = document.getElementById('nut1');
//     const nut2 = document.getElementById('nut2');

//     animateNut(nut1, 'good-nut');
//     animateNut(nut2, 'bad-nut');
// });

// function animateNut(nut, nutType) {
//     const startPosition = Math.random() * window.innerWidth;
//     const fallSpeed = Math.random() * 5 + 3;

//     nut.style.left = startPosition + 'px';
//     nut.classList.add(nutType);

//     function move() {
//         const topPosition = nut.offsetTop;
//         nut.style.top = topPosition + fallSpeed + 'px';

//         if (topPosition > window.innerHeight) {
//             // Reset the position when the nut reaches the bottom of the screen
//             nut.style.top = '-10px'; //negative height for the animation to enter the screen
//             nut.style.left = Math.random() * window.innerWidth + 'px';
//         }
//         requestAnimationFrame(move);
//     }
//     move();
// }

//=========================================================
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
    const gameClass = new Game();
    gameClass.startGame();
});
