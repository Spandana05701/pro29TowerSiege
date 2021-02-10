const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){
    createCanvas(800,400);

    engine = Engine.create();
    world = engine.world;

    box1 = new BlueBox(500,360,20,30);
    box2 = new YelloeBox(520,360,20,30);
    box3 = new GreenBox(540,360,20,30);
    box4 = new RedBox(560,360,20,30);
    box5 = new GreenBox(580,360,20,30);
    box6 = new YelloeBox(600,360,20,30);

    box7 = new RedBox(510,330,20,30);
    box8 = new YelloeBox(530,330,20,30);
    box9 = new BlueBox(550,330,20,30);
    box10 = new GreenBox(570,330,20,30);
    box11 = new RedBox(590,330,20,30);

    box12 = new YelloeBox(520,310,20,30);
    box13 = new BlueBox(540,310,20,30);
    box14 = new RedBox(560,310,20,30);
    box15 = new GreenBox(580,310,20,30);

    box16 = new YelloeBox(530,280,20,30);
    box17= new RedBox(550,280,20,30);
    box18 = new GreenBox(570,280,20,30);

    box19 = new BlueBox(540,250,20,30);
    box20 = new RedBox(560250,20,30);

    ball = new Ball(0,0,50);
    spring = new Projectile(ball.body, {x:200,y:200});

    ground = new Platform(400,390,800,20);

    groundHovering = new Platform(550,160,200,20);
}

function draw(){
    background(247,223,178);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display();

    box19.display();
    box20.display();

    ball.display();
    spring.display();

    ground.display();

    groundHovering.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    spring.release();
}