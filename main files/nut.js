class Nut {
    constructor(type) {
        this.nutElement = document.createElement('div');
        this.nutElement.classList.add('falling-nut', type);
        this.type = type;
        this.animationId = null;
        this.horizontalPosition = Math.random() * window.innerWidth;
    }
    appendTo(container) {
        container.appendChild(this.nutElement);
    }

    startAnimation() {
        const animate = () => {
            const fallSpeed = Math.random() * 5 + 3;
            let topPosition = this.nutElement.offsetTop;

            this.nutElement.style.left = this.horizontalPosition + 'px';
            this.nutElement.style.top = topPosition + fallSpeed + 'px';
            if (topPosition > window.innerHeight) {
                this.resetPosition();
            }
            this.animationId = requestAnimationFrame(animate);
        };
        animate();
    }

    stopAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    resetPosition() {
        this.nutElement.style.top = '-10px';
        this.horizontalPosition = Math.random() * window.innerWidth + 'px';
        this.nutElement.style.left = this.horizontalPosition;
    }

    getNutElement() {
        return this.nutElement;
    }
}
