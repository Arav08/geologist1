
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(400, 350)
	stone = new Stone(225, 630, 70, 70)
	rubber = new Rubber(600, 650)

	ground = createSprite(400, 695, 800, 10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer.display()
  stone.display()
  rubber.display()

  drawSprites();
 
}



