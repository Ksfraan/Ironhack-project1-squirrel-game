class Player {
    constructor(playerElement, gameContainer) {
        this.playerElement = playerElement;
        this.gameContainer = gameContainer;
        this.position = 0;
        this.moveSpeed = 100;
    }

    move(direction) {
        if (direction === 'right') {
            this.position += this.moveSpeed;

            this.position = Math.min(
                this.position,
                this.gameContainer.clientWidth - this.playerElement.offsetWidth
            );
        } else if (direction === 'left') {
            this.position -= this.moveSpeed;
            this.position = Math.max(0, this.position);
        }

        this.playerElement.style.left = this.position + 'px';
    }
}
