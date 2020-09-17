var thickness,wall;
var bullet,speed,weight;
var Lbullet,Lwall;

function setup() {
  createCanvas(1200,400);

  speed =  random(23,31);
  weight =  random(30,52);
  thickness =  random(22,83); 

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "black"
  bullet.velocityX = speed;

  wall = createSprite(1000,200,thickness,height/2);
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background("lightBlue");
  hasCollide(bullet,wall);

  if(hasCollide(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness *thickness * thickness);
  }

     if(damage > 10){
       wall.shapeColor = color(255,0,0);
     }

     if(damage < 10){
       wall.shapeColor = color(0,255,0);
     }
  
  drawSprites();
 
}

function hasCollide(Lbullet,Lwall){
  bulletRightEdge = Lbullet.X + Lwall.width;
  wallLeftEdge = Lwall.X;
   if(bulletRightEdge >= wallLeftEdge){
     return true
   }
    return false;
  }