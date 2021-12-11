
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball,b1,b2

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(width/2,690,width,20);
  right = new Ground(500,670,10,100);
  left = new Ground(680,670,10,150);

	var ballOption = {

		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		
		  }

	//Create the Bodies Here.

	ball = Bodies.circle(200,100,20,ballOption);
World.add(world,ball)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  left.show();
  right.show();

  if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.4,y:-0.3 })


}

  ellipse(ball.position.x,ball.position.y,20)
  

  Engine.update(engine)

 
}




	 