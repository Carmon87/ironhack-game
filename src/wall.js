class Wall {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width
        this.height = height
    }

    draw(){
        ctx.beginPath()
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = '#0454a8'
        ctx.stroke();
    }
}