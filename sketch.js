var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.loop();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	star = createSprite(starBody.position.x, starBody.position.y, 650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  keyPressed();

  drawSprites();

}

function keyPressed() {
	//write code here

	if(keyDown("right")){

		fairy.x= fairy.x - (-2);
	}

	if(keyDown("left")){

    fairy.x= fairy.x - 2;

	}

	if(keyDown("space")){

		star.velocityY= 5; 
	}

	if(star.y > 490){

		star.velocityY= 0; 
	}
}
