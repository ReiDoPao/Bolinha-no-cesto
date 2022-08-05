
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var solo, esquerda,direita;

function preload()
{
	
}

function setup() {
	createCanvas(850,600);


	var opitions ={
	  isStatic:false,
	  restituition:0.3,
	  friction:0,
	  density:1.3 
	}

	var chão_options = {
		isStatic:true
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Bodies.circle(100,0,20,opitions);
	World.add(world, ball);

	solo = Bodies.rectangle(width/2,570,width,20,chão_options);
	World.add(world, solo);

	esquerda = Bodies.rectangle(600,530,15,80,chão_options);
	World.add(world, esquerda);

	direita = Bodies.rectangle(700,530,15,80,chão_options);
	World.add(world, direita);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();

  circle(ball.position.x, ball.position.y, 20);

  rect(solo.position.x, solo.position.y, width, 20);

  rect(esquerda.position.x,esquerda.position.y,15,80);

  rect(direita.position.x, direita.position.y,15,80);
  

}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:70,y:-90});
	}
}



