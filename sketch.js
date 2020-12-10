var PLAY = 0;
var END = 1;

var bird;
var back,back2,backImg;
var obus,obus2,obus3;
var obds,obds2,obds3;
var chooser = 0;
var obusGroup,obdsGroup;


gs = PLAY;

function preload()
{
backImg = loadImage("jungle.jpg");
}



function setup() 
{
createCanvas(windowWidth,windowHeight);

bird = createSprite(300,300,40,20);
bird.shapeColor  = "red";



back = createSprite(720,200,10,10);
back.velocityX = -3;
back.addImage(backImg);
back.scale = 1.4;
back2 = createSprite(2100,200,10,10);
back2.velocityX = -3;
back2.addImage(backImg);
back2.scale = 1.4;

obusGroup = new Group();
obdsGroup = new Group();
}

function draw() 
{
background("skyblue");

if(touches.length > 0 || keyDown("space"))
{
bird.velocityY = -10;    
}








if(back.x < -700)
{
back.x =  2050;
}
if(back2.x < -700)
{
back2.x =  2050;
}













back.depth = bird.depth - 1;
back2.depth = bird.depth - 1;

bird.velocityY = bird.velocityY + 0.8;

obstacles();

drawSprites();
}

function obstacles()
{
if(frameCount%200 === 0)
{
chooser = Math.round(random(1,3));

if(chooser === 1)
{
obus = createSprite(1400,200,40,400);
obus.velocityX = -3;
obus.shapeColor = "white";

obds2 = createSprite(1400,610,40,100);
obds2.velocityX = -3;
obds2.shapeColor = "white";
}
if(chooser === 2)
{
obus2 = createSprite(1400,100,40,200);
obus2.velocityX = -3;
obus2.shapeColor = "white";

obds = createSprite(1400,560,40,200);
obds.velocityX = -3;
obds.shapeColor = "white";
}
if(chooser === 3)
{
obus3 = createSprite(1400,50,40,100);
obus3.velocityX = -3;
obus3.shapeColor = "white";
 
obds3 = createSprite(1400,460,40,400);
obds3.velocityX = -3;
obds3.shapeColor = "white";
}




//obusGroup.add(obus);
//obusGroup.add(obus2);
//obusGroup.add(obus3);



}

}