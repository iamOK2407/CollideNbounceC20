var car, wall;
var carI;

function preload(){
carI=loadImage("car.png");
}
function setup()
{
    createCanvas(1500,750)

    car=createSprite(100,100,50,50);
    car.addImage(carI);
    car.scale=0.4;
    wall=createSprite(800,200,60,550)
    wall.shapeColor="yellow";
    //car.shapeColor=wall.shapeColor="yellow"
   car.velocityX=10; 
car.velocityY=10;
}
function draw()
{
    background(160);
     //car.x=World.mouseX;
     //car.y=World.mouseY;

     console.log("Width Gap " + (car.x-wall.x )+ " "+(car.width/2+wall.width/2))
     console.log("Height Gap "+ (car.y-wall.y )+ " " +(car.height/2+wall.height/2))
     
     //collision algorithm
    if(Math.abs(car.x-wall.x)<=(car.width/2+wall.width/2)){
        car.velocityX=car.velocityX*-1;
    } 
   
   
  if (Math.abs(car.y-wall.y)<=(car.height/2+wall.height/2)){
    car.velocityY=car.velocityY*-1;}
    drawSprites();
}