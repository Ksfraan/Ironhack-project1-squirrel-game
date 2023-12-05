class Game {
    constructor() {
        this.nut1 = document.createElement('div');
        this.nut2 = document.createElement('div');
        this.score = 0;
        this.lives = 3;
        this.scoreElement = document.getElementById('score');
        this.livesElement = document.getElementById('lives');
        this.player = document.getElementById('player');
        this.gameContainer = document.getElementById('game-container');
        this.letsGoTitle = document.getElementById('lets-go');
        this.restartButton = document.createElement('button');
        this.wrapper = document.createElement('div');
        this.wonLoseText = document.createElement('div');
    }

    startGame() {
        const firstScreen = (document.getElementById(
            'first-screen'
        ).style.display = 'none');

        const secondScreen = (document.getElementById(
            'second-screen'
        ).style.display = 'block');
        this.beginGame();
    }

    beginGame() {
        this.wrapper.style.display = 'none';
        setTimeout(() => {
            this.letsGoTitle.style.display = 'none';
            this.renderNuts();
            this.gameLoop();
        }, 2000);

        let position = 0;
        const moveSpeed = 100;

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                position += moveSpeed;
            } else if (event.key === 'ArrowLeft') {
                position -= moveSpeed;
            }
            this.player.style.left = position + 'px';
        });
    }

    gameLoop() {
        if (this.lives === 0) {
            this.endGame();
            return;
        }
        this.checkCollision();

        requestAnimationFrame(() => this.gameLoop());
    }

    renderNuts() {
        this.nut1.classList.add('falling-nut', 'good-nut');
        this.nut2.classList.add('falling-nut', 'bad-nut');
        this.nut1.setAttribute('id', 'nut1');
        this.nut2.setAttribute('id', 'nut2');

        this.gameContainer.appendChild(this.nut1);
        this.gameContainer.appendChild(this.nut2);

        animateNut(this.nut1, 'good-nut');
        animateNut(this.nut2, 'bad-nut');

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

    checkCollision() {
        const nut1Rect = this.nut1.getBoundingClientRect();
        const nut2Rect = this.nut2.getBoundingClientRect();
        const playerRect = this.player
            .querySelector('.player-collision')
            .getBoundingClientRect();

        const resetNut1Position = (nut1) => {
            nut1.style.top = '-10px';
            nut1.style.left = Math.random() * window.innerWidth + 'px';
        };
        const resetNut2Position = (nut2) => {
            nut2.style.top = '-10px';
            nut2.style.left = Math.random() * window.innerWidth + 'px';
        };

        if (
            nut1Rect.left < playerRect.right &&
            nut1Rect.right > playerRect.left &&
            nut1Rect.top < playerRect.bottom &&
            nut1Rect.bottom > playerRect.top
        ) {
            console.log('NUT1 COLLISION ======');
            this.score += 1;
            resetNut1Position(this.nut1);
            this.updateCounters();
        } else if (
            nut2Rect.left < playerRect.right &&
            nut2Rect.right > playerRect.left &&
            nut2Rect.top < playerRect.bottom &&
            nut2Rect.bottom > playerRect.top
        ) {
            console.log('NUT2 COLLISION ======');
            this.lives -= 1;
            resetNut2Position(this.nut2);
            this.updateCounters();
        }
    }

    updateCounters() {
        this.scoreElement.querySelector('span').textContent = this.score;
        this.livesElement.querySelector('span').textContent = this.lives;
    }
    endGame() {
        this.wrapper.style.display = 'flex';
        this.wrapper.classList.add('end-game-wrapper');
        this.gameContainer.appendChild(this.wrapper);

        this.wonLoseText.classList.add('won-lose-text');
        this.wonLoseText.textContent = 'You lose!';
        this.wrapper.appendChild(this.wonLoseText);

        this.restartButton.setAttribute('id', 'restart-button');
        this.restartButton.textContent = 'Restart';
        this.wrapper.appendChild(this.restartButton);

        this.restartButton.addEventListener('click', () => {
            this.lives = 3;
            this.score = 0;
            this.letsGoTitle.style.display = 'block';
            this.beginGame();
        });
    }
}
