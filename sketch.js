const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var ground;
var player,playerImage;
var ball,ballImage;

function preload(){
  playerImage=loadImage("Player.png");
}

function setup(){
   canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(600,height,1200,30); 
    player=createSprite(300,275,100,100);
    player.addImage(playerImage);
    ball=new Ball(252,130,50);
    attach=new Attach(ball.body,{x:252,y:130});
}

function draw() {
  background(255,255,255);  
  text(mouseX+','+mouseY,20,20)
  Engine.update(engine);
  fill("red");
  ground.display();
  ball.display();
  attach.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  attach.fly();
}