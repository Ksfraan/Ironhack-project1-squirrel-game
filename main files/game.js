class Game {
    constructor() {
        this.playerElement = document.getElementById('player');
        this.nut1 = new Nut('good-nut');
        this.nut2 = new Nut('bad-nut');
        this.nut1Element = this.nut1.getNutElement();
        this.nut2Element = this.nut2.getNutElement();
        this.score = 0;
        this.lives = 3;
        this.scoreElement = document.getElementById('score');
        this.livesElement = document.getElementById('lives');
        this.gameContainer = document.getElementById('game-container');
        this.letsGoTitle = document.getElementById('lets-go');
        this.restartButton = document.createElement('button');
        this.endGameWrapper = document.createElement('div');
        this.wonLoseText = document.createElement('div');
        this.hasWon = false;
        this.secondScreen = document.getElementById('second-screen');
        this.firstScreen = document.getElementById('first-screen');
        this.mainMenuButton = document.createElement('button');
        this.isLive = true;
    }

    startGame() {
        this.firstScreen.style.display = 'none';
        this.secondScreen.style.display = 'block';
        this.beginGame();
    }

    beginGame() {
        this.letsGoTitle.style.display = 'block';
        this.resetScoreAndLives();
        this.updateCounters();

        setTimeout(() => {
            this.letsGoTitle.style.display = 'none';
            this.renderNuts();
            this.gameLoop();
        }, 2000);
    }

    gameLoop() {
        if (this.lives === 0) {
            this.endGame();
            return;
        }

        if (this.lives > 0 && this.score >= 5) {
            this.hasWon = true;
            this.endGame();
            return;
        }
        this.checkCollision();

        requestAnimationFrame(() => this.gameLoop());
    }
    renderNuts() {
        this.nut1.appendTo(this.gameContainer);
        this.nut2.appendTo(this.gameContainer);

        this.nut1.startAnimation();
        this.nut2.startAnimation();
    }

    checkCollision() {
        const nut1Rect = this.nut1Element.getBoundingClientRect();
        const nut2Rect = this.nut2Element.getBoundingClientRect();
        const playerRect = this.playerElement
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
            this.score += 1;
            resetNut1Position(this.nut1Element);
            this.updateCounters();
        } else if (
            nut2Rect.left < playerRect.right &&
            nut2Rect.right > playerRect.left &&
            nut2Rect.top < playerRect.bottom &&
            nut2Rect.bottom > playerRect.top
        ) {
            this.lives -= 1;
            resetNut2Position(this.nut2Element);
            this.updateCounters();
        }
    }

    updateCounters() {
        this.scoreElement.querySelector('span').textContent = this.score;
        this.livesElement.querySelector('span').textContent = this.lives;
    }

    endGame() {
        this.nut1.stopAnimation();
        this.nut2.stopAnimation();
        this.endGameWrapper.style.display = 'flex';
        this.endGameWrapper.classList.add('end-game-wrapper');
        this.gameContainer.appendChild(this.endGameWrapper);

        this.wonLoseText.classList.add('won-lose-text');
        if (this.hasWon) {
            this.isLive = false;
            this.wonLoseText.textContent = 'CONGRATS YOU win!!';
        } else {
            this.isLive = false;
            this.wonLoseText.textContent = 'You lose!';
        }
        this.endGameWrapper.appendChild(this.wonLoseText);

        this.restartButton.setAttribute('id', 'restart-button');
        this.restartButton.textContent = 'Restart';
        this.endGameWrapper.appendChild(this.restartButton);

        this.mainMenuButton.classList.add('main-menu-button');
        this.mainMenuButton.textContent = 'Main Menu';
        this.endGameWrapper.appendChild(this.mainMenuButton);

        this.restartButton.addEventListener('click', () => {
            this.endGameWrapper.style.display = 'none';
            this.beginGame();
        });

        this.mainMenuButton.addEventListener('click', () => {
            // not using location.reload as this is a SPA.
            // SPAs usually don't reload the tab.
            this.nut1Element.remove();
            this.nut2Element.remove();
            this.endGameWrapper.style.display = 'none';
            this.firstScreen.style.display = 'block';
            this.secondScreen.style.display = 'none';
        });
    }

    resetScoreAndLives() {
        this.lives = 3;
        this.score = 0;
    }
}
