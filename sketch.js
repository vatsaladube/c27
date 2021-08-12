
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5
var roofObject
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new Roof(400,250,230,20);
	bob1 =new Bob(320,575,40);
	bob2 =new Bob(360,575,40);
	bob3 =new Bob(380,575,40);
	bob4 =new Bob(400,575,40);
	bob5 =new Bob(420,575,40);
	rope1=new Rope(bob1.body,roofObject.body,-80,0)
	rope2=new Rope(bob2.body,roofObject.body,-30,0)
	rope3=new Rope(bob3.body,roofObject.body,10,0)
	rope4=new Rope(bob4.body,roofObject.body,40,0)
	rope5=new Rope(bob5.body,roofObject.body,80,0)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
roofObject.display()
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
}



