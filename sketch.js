
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const render = Matter.render
var dustbin;
var paper;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	dustbin=new bin(1200,650)
	paper= new paper(200,450,40)
	ground=new ground(width/2, 670,width,20 ); 


	//Create the Bodies Here.
     var render=Render.create({
		 element: document.body,
		 engine: engine,
		 options{
			 width:1200,
			 height:700,
			 wireframes:false

		 }

	 )} 
		}
	 

	Engine.run(engine);
  



function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode() 
  ellipse(50, 50, 90, [90])
  Matter.Body.applyForce;
  Matter.Bodies.circle;
  drawSprites();
  bin.display();
  paper.display();
 
}



