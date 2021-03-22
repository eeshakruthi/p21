var bullet, wall, thickness;
var speed, weight;

function setup() {
createCanvas(1600,400);
  
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,50,5);
  bullet.shapeColor=("white")
  bullet.velocityX=speed;
  
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0); 
  
  if (wall.x - bullet.x <= (bullet.width + wall.width)/2){
    bullet.velocityX=0;

var deformation=0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (deformation>10){
      wall.shapeColor=("red");
    }
    if (deformation<10){
      wall.shapeColor=("green");
    }

  }

  drawSprites();
}

function hasCollided (lbullet,lwall){
bulletRightEdge=lBullet.x+lBullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}

if (hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var deformation=0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (deformation>10){
      wall.shapeColor=("red");
    }
    if (deformation<10){
      wall.shapeColor=("green");
    }
}