var bullet, wall;
var speed, weight, thickness;
var deformation;
var invisibleWall;

function setup() {
  createCanvas(800,400);
  bullet=createSprite(50, 200, 40, 12);
  bullet.shapeColor="white";
  wall=createSprite(700,200,thickness,height/2);  
  wall.shapeColor=rgb(80,80,80);
  invisibleWall=createSprite(700,200,60,height/2);
  invisibleWall.shapeColor="white";
  invisibleWall.visible=false;
    //wall.addImage("wall",wallImage);
  speed=random(223,321);
  weight=random(400,1500);
  thickness=random(22,83);
} 

function draw() {
 // background(255,255,255);
 background("black")

  bullet.velocityX=speed;
  deformation=0.5*weight*speed*speed/22500;
  drawSprites();
  bulletDeformation();
  bullet.collide(invisibleWall);
}
function bulletDeformation(){
  if(bullet.x-wall.x<bullet.width/2+wall.width/2
    &&wall.x-bullet.x<wall.width/2+bullet.width/2){
      bullet.velocityX=0;
      if(deformation<100){
        bullet.shapeColor="green";
      }
      if(deformation<180&&deformation>100){
        bullet.shapeColor="yellow";
      }
      if(deformation>180){
        bullet.shapeColor="red";
      }
    }
 
  
}