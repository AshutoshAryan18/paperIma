
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var paper1;
var ground;
var dustbingreen_img;
var paper_img;
var engine;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 580);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	//Create the Bodies Here.
	box1 = new Box(800,450,20,150);
	box2 = new Box(950,450,20,150);
	box3 = new Box(875,530,185,20);
	paper1 = new Paper(50,200,40);
	
	
	Engine.run(engine);
  }


function draw() {

	Engine.update(engine);
  rectMode(CENTER);
  background(222);
  
  rect (ground.position.x,ground.position.y,width,10);

  box1.display();
  box2.display();
  paper1.display();
  box3.display();
 
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:90,y:-80})
	}
}


