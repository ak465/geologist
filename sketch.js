
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(100,400,2);

	stone = new stone(200,200,2);
    rubber = new Rubber(200,100,4);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  hammer.display();

  stone.display();

  rubber.display();

  drawSprites();
 
}



