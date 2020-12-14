var bullet,wall
var speed,weight

function setup() {
  createCanvas(800,400);
  bullet = createSprite(100, 200, 30, 10);
  wall = createSprite(700,200,60,200);
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
bullet.velocityX = speed

}

function draw() {
  background(255,255,255);
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0
  bullet.x = wall.x
  def = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(def>10){
    wall.shapeColor = "red"
  }
  
  if(def<10){
    wall.shapeColor = "lightblue"
  }

  } 
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletEdge = bullet.x+bullet.width
 if(bulletEdge>=wall.x){
   return true
 }
return false
}