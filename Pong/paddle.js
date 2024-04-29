class Paddle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedUp = -6
        this.speedDown = 6;
        this.width = 20;
        this.height = 80;
        this.state = "still";
        this.points = 0;
    }

    show() {
        fill(220);
        rect(this.x, this.y, this.width, this.height, 10);
    }

    update() {
        if (this.state == "moveUp") {
            this.y += this.speedUp;
        } else if (this.state == "moveDown") {
            this.y += this.speedDown;
        } else if (this.state == "still");
        this.y = constrain(this.y, 0, height - this.height);
    }

    move(mY) {
        this.y = mY;
    }

    setState(state) {
        this.state = state;
    }
}