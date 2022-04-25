const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine, world;

var ground, tower, towerImg;
var backgroundImg;
var cannon;
var angle;
var cannonBall;

function preload() {

  backgroundImg = loadImage("/assets/background.gif");
  towerImg = loadImage("/assets/tower.png");
 
}
function setup() {
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  //angle = 20;
  
  options = {
    isStatic:true
  }
 
  ground= Bodies.rectangle(0,height-1, width*2,1,options);
  World.add(world,ground);
 
  tower = Bodies.rectangle(140,350,160,310,options);
  World.add(world,tower);

  cannon = new Cannon(150,110,130,100,20);
  cannonBall = new CannonBall(cannon.x, cannon.y);
}

function draw() {
  image(backgroundImg, 0,0,1200,600);
  Engine.update(engine);
 
  rect(ground.position.x, ground.position.y,width*2,1);
  
  push();
  imageMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 160,310);
  pop();

  cannon.display();
  cannonBall.display();
}
