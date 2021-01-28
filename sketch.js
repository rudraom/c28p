const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var tball1,tball2,tball3,tball4,tball5,wall,short1,short2,short3,short4,short5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;
   tball1=new Ball(300,300,50)
   tball2=new Ball(350,300,50)
   tball3=new Ball(300,300,50)
   tball4=new Ball(450,300,50)
   tball5=new Ball(500,300,50)


    wall=new Wall(400,100,300,20)


    short1 = new String(tball3.body,wall.body,-50,0);
    short2 = new String(tball2.body,wall.body,0,0);
    short3 = new String(tball1.body,wall.body,-100,0);
    short4 = new String(tball4.body,wall.body,50,0);
    short5 = new String(tball5.body,wall.body,100,0);
    

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine .update (engine);
  drawSprites();
 tball1.display();
 tball2.display();
 tball3.display();
 tball4.display();
 tball5.display();
 short1.display();
 short2.display();
 short3.display();
 short4.display();
 short5.display();
 wall.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(tball1.body,tball1.body.position,{x:-50,y:-45});

  }
}

