var police,policeimg, thief, thiefimg;

var rocks,rockimg,rocksGroup, ground,bridge,bgimg;

var powerUps,powerimg, lifeimg, life1,life2,life3;

function preload(){
policeimg=loadAnimation("P1.png","P2.png");
thiefimg=loadAnimation("t1.png","t2.png");
lifeimg=loadImage("images.png");
bgimg=loadImage("city.png");
rockimg=loadImage("Rock.png");
powerimg=loadImage("Energy.png");
}
function setup(){
createCanvas(1200,600);

bridge=createSprite(600,600,2400,130);
ground=createSprite(600,65,2800,900);
ground.addImage("backg",bgimg);
ground.velocityX=-5;
ground.x=ground.width/2;

police=createSprite(200,450,50,100);
police.addAnimation("police",policeimg);

thief=createSprite(1000,450,100,100);
thief.addAnimation("thief",thiefimg);
thief.scale=0.7;

life1=createSprite(50,50,20,20);
life1.addImage("life1",lifeimg);
life1.scale=0.2;

life2=createSprite(100,50,20,20);
life2.addImage("life2",lifeimg);
life2.scale=0.2;

life3=createSprite(150,50,20,20);
life3.addImage("life3",lifeimg);
life3.scale=0.2;

rocksGroup=new Group();

}
function draw(){
background(255);

if(ground.x<0){
    ground.x=ground.width/2
}

spawnRocks();
powerUp();

drawSprites();
}

function spawnRocks(){
    if(frameCount % 100 === 0){
        rocks=createSprite(1200,530,50,50);
        rocks.velocityX=-10;
        rocks.addImage("rocksimage",rockimg);
        rocks.scale=0.6;
        rocks.lifetime=120;
        rocksGroup.add(rocks);
        }
}

function powerUp(){
    if(frameCount % 521 === 0){
powerUps=createSprite(1200,250,50,50);
powerUps.velocityX=-7;
powerUps.y=random(150,250)
powerUps.scale=0.1;
powerUps.addImage("energy",powerimg);

    }
}