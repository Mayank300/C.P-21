function bounceOff(bullet,wall){
  if (bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2) {
  bullet.velocityX = bullet.velocityX * (-1);
  wall.velocityX = wall.velocityX * (-1);
}
if (bullet.y - wall.y < wall.height/2 + bullet.height/2
  && wall.y - bullet.y < wall.height/2 + bullet.height/2){
  bullet.velocityY = bullet.velocityY * (-1);
  wall.velocityY = wall.velocityY * (-1);
}
}