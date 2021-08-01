
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var rightSide;
var leftSide;
var groundObj;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;
	//make walls
	
	//Create the Bodies Here.
	


	



	ball = Bodies.circle(260,100,12,ball_options);
	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
	push();
	strokeWeight(2);
	stroke(255);
	rectMode(CENTER);
  	background(255);
  rightSide.show();
  leftSide.show();
  groundObj.show();
  pop();
  ellipse(ball.position.x,ball.position.y,12,12);
  keyPressed();
 
  drawSprites();
	

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})
	}
}



