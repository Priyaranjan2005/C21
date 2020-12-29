var bullet,wall;
var speed,weight,thikness;

function setup() {
  createCanvas(800,400);
  thikness=random(22,83);

  bullet=createSprite(50, 200, 60, 10);
  wall=createSprite(700, 200, thikness, height/2);

  speed=random(55,90);
  weight=random(400,1500);

  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 

  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thikness*thikness*thikness);

    if(damage>0){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hascollided(pobject1,pobject2){
  object1RightEdge=pobject1.x+pobject1.width;
  object2LeftEdge=pobject2.x;
  if(object1RightEdge>=object2LeftEdge){
    return true
  }
  else{
    return false
  }
}