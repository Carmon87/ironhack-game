function boundryCheck (player){
if (player.y < player.radius){
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
if (player.x > canvas.width - player.radius){
    player.x = canvas.width - player.radius
    return false}

return true
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

class Circle {
    constructor(x,y,radius,color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        
        
    }
    
    draw(){
        if (boundryCheck(this)){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
            ctx.fill();            
            ctx.fillStyle = '#0454a8'    
        }
    }

    clear() {
        ctx.clearRect(0, 0, 800, 800);
    }
}



const player = new Circle(500, 730, 30, '#A85804');
const wall = [
    new Wall(600,570,30,230), 
    new Wall(150,630,450,30),
    new Wall(0,500,300,30),
    new Wall(430,150,30,500),
    new Wall(300,380,30,180),
    new Wall(100,270,266,30),
    new Wall(100,100,30,200),
    new Wall(180,300,30,130),
    new Wall(0,370,100,30),
    new Wall(250,0,30,200),
    new Wall(350,130,160,30),
    new Wall(580,0,30,250),
    new Wall(690,100,30,300),
    new Wall(450,340,176,30),
    new Wall(550,470,250,30)
]
const exit = new Exit(655,670,120,100,'#FB0CA4')
function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}
document.addEventListener('mousemove', (evt)=>{
    const mousePosition = getMousePos(canvas, evt)
    if (mousePosition.x >500 && mousePosition.x < 530 && mousePosition.y > 730 && mousePosition.y <760){
    console.log("startGame")
    startGame = true
    }
    
})

player.draw()
let startGame = false
canvas.addEventListener('mousemove', e => {
    if (startGame){
    player.x = e.offsetX;
    player.y = e.offsetY
    };
    }
)

function update (){

   for (let i=0; i<wall.length; i++){
    wall[i].draw()
    exit.draw()
    collision(player,wall[i]) && console.log(collision(player, wall[i]))
    if (startGame && collision(player,wall[i])){
        alert('you lose!')
        if (collision(player, exit)){
        alert('You escaped the maze! Amazing!')}
       }
    player.draw();
    //exit.draw();
        
    //  if (collision(player, exit)){
    //    alert('Game over!")
    //}
    
}
setTimeout(()=>{
    player.clear()
}, 500);
requestAnimationFrame(update)
}
//console.log(collision(player,wall))
update()
