
class Carmo {
    constructor(x,y,radius,color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    
    draw(){
        if ((this.x >= 25 && this.x < 775) && (this.y >= 25 && this.y < 775)){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
            ctx.fillStyle = this.color
            ctx.fill();
        }
    }

    clear() {
        ctx.clearRect(0, 0, 800, 800);
    }
}

let x = canvas.width/2;
let y = canvas.height/2;

let canv = document.getElementById('canvas');

canvas.addEventListener('mousemove', e => {
    console.log({x:e.offsetX, y:e.offsetY})
    player.x = e.offsetX;
    player.y = e.offsetY
});

const player = new Carmo(x, y, 30, 'red');
player.draw()

function update (){
    player.draw();
    
    setTimeout(()=>{
        player.clear()
    }, 500);
    requestAnimationFrame(update)
}

update()

console.log(player)
