class Exit{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height =height;
        this.image = new Image()
        this.image.src = "../src/Exit.png"
    }
    draw(){
        ctx.drawImage(this.image,this.x,this.y)
    }
}