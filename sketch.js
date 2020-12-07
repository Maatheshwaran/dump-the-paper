
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,gameState,engine,world,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  rectMode(CENTER);

  gameState = "start";

	engine = Engine.create();
	world = engine.world;

  dustbin = new DustBin(720,390,100,10);
	ground = new Ground(400,500,1000,20);
  paper = new Paper(200,390);
  
  

	Engine.run(engine);
  
}


function draw() {
  if(gameState === "start" ){
    background("black");
    textSize(20);
    fill("red");
    text("This is small game that will teach you the importance of throwing away your trash. \n                 Press Up Arrow to Start, and Up to throw away the trash.", 50, 200)
    if(keyCode === UP_ARROW){
      gameState = "play"
    }
  }
  console.log(gameState );
  if(gameState === "play"){

  
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  paper.display();
 
  }
 
}

function keyPressed(){
	if(keyCode === UP_ARROW && gameState === "play"){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


