class Dustbin {
    constructor(x,y) {
    var options = {
        isStatic:true
    }
    this.image = loadImage("dustbingreen.png");
    this.width=180;
    this.height=210;
    this.thickness = 20;
    this.bottombody=Bodies.rectangle(x,y,this.width,this.thickness,options);
    this.leftbody=Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options);
    this.rightbody = Bodies.rectangle(x+this.width/2-20,y-this.height/2,this.thickness,this.height,options);
    World.add(world,this.bottombody);
    World.add(world,this.leftbody);
    World.add(world,this.rightbody);
}
display(){
    var posbottom=this.bottombody.position;
    var posright = this.rightbody.position;
    var posleft = this.leftbody.position;
   // var angle= this.bottombody.angle;
    push();
    translate(posleft.x,posleft.y);
    rectMode(CENTER);
    fill(255);
    angleMode(RADIANS)
    
   // rect(0,0,this.thickness,this.height)
    pop()

    push()
    translate(posright.x,posright.y);
    rectMode(CENTER);
    fill(255);
    angleMode(RADIANS)
    
    //rect(0,0,this.thickness,this.height)
    pop()

    push();
    translate(posbottom.x,posbottom.y);
  
    rectMode(CENTER);
    imageMode(CENTER);
    //rect(0,0,this.width,this.thickness);
    image(this.image,0,-this.height/2,this.width,this.height);
    pop();
}
}