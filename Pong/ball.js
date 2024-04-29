class Ball {
    constructor(x, y, speedX, speedY, r) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.r = r;
    }

    show() {
        fill(220);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }


}