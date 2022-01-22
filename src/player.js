function boundryCheck (player){
if (player.y<player.radius){
    player.y = player.radius
    return false
}

if (player.y > canvas.height-player.radius){
    player.y = canvas.height-player.radius
    return false
}
if (player.x < player.radius){
    player.x = player.radius
    return false
}
if (player.x> canvas.width - player.radius){
    player.x = canvas.width - player.radius
    return false}

return true
   // return (player.x >= 30 || player.x <= 770) || (player.y >= 30 || player.y < 770)
}

function collision(player, wall){
    let distX = Math.abs(player.x - wall.x-wall.width/2);
    let distY = Math.abs(player.y - wall.y-wall.height/2);

    if (distX > (wall.width/2 + player.radius)) { return false; }
    if (distY > (wall.height/2 + player.radius)) { return false; }

    if (distX <= (wall.width/2)) { return true; } 
    if (distY <= (wall.height/2)) { return true; }

    let dx=distX-wall.width/2;
    let dy=distY-wall.height/2;
    return (dx*dx+dy*dy<=(player.radius*player.radius));
}

class Carmo {
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color ='red'
        
    }
    
    draw(){
        if (boundryCheck(this)){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
            ctx.fill();
            
            
                        }
    }

    clear() {
        ctx.clearRect(0, 0, 800, 800);
    }
}


let canv = document.getElementById('canvas');

canvas.addEventListener('mousemove', e => {
    player.x = e.offsetX;
    player.y = e.offsetY
});

const player = new Carmo(100, 750, 30);
const wall = [
    new Wall(600,630,30,200), 
    new Wall(150,630,450,30),
    new Wall(0,500,300,30),
    new Wall(430,300,30,350),
    new Wall(300,380,30,180),
    new Wall(100,270,360,30),
    new Wall(100,100,30,200),
    new Wall(180,300,30,130),
    new Wall(0,370,100,30)
]


player.draw()


function update (){

    for (let i=0; i<wall.length; i++){
    wall[i].draw()
    }
    if (collision)
    player.draw();
    
    setTimeout(()=>{
        player.clear()
    }, 500);
    requestAnimationFrame(update)
    

console.log(player.x, player.y)
}


update()

console.log(player)
