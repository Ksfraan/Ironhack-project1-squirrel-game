class Player {
    constructor(playerElement, gameContainer, playerImg) {
        this.playerElement = playerElement;
        this.gameContainer = gameContainer;
        this.playerImg = playerImg;
        this.position = 0;
        this.moveSpeed = 100;
    }

    move(direction) {
        if (direction === 'right') {
            this.playerImg.style.transform = 'scaleX(-1)';
            this.position += this.moveSpeed;

            this.position = Math.min(
                this.position,
                this.gameContainer.clientWidth - this.playerElement.offsetWidth
            );
        } else if (direction === 'left') {
            this.playerImg.style.transform = 'scaleX(1)';
            this.position -= this.moveSpeed;
            this.position = Math.max(0, this.position);
        }

        this.playerElement.style.left = this.position + 'px';
    }
}
