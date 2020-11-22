
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var dustbin2;
var dustbin3;
var paper;
var ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(width/2,660,width,20);
	
	paper = new Paper(100,600,50);
//	dustbin1 = new Dustbin(600,638,130,20);
	//dustbin2 = new Dustbin(525,570,150,150);
	dustbin3 = new Dustbin(675,655);
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
 
paper.display();
ground.display();

dustbin3.display();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:160,y:-235});
	}
  }



