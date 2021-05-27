const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 700, 1200, 20);

  hero = new Hero(200,800,250);
  rope = new Rope(hero.body, { x: 600, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 90);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

  box5 = new Box(700, 100, 70, 80);
  box6 = new Box(700, 100, 80, 70);

  //box7 = new Box(500, 100, 70, 70);
  //box8 = new Box(500, 100, 70, 70);

}
// I'm too good 
function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();
  //box7.display();
  //box8.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
   
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});

}