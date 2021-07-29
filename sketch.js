var sea, seaImg, ship, shipImg
function preload(){
seaImg = loadImage("sea.png")
shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200)
  ship = createSprite(200,220)
  sea.addImage(seaImg)
  sea.scale = 0.5
  sea.velocityX = -2
  ship.addAnimation("ship",shipImg)
  ship.scale = 0.2

}

function draw() {
  background("blue");
  drawSprites()
  if(sea.x < 0){
    sea.x = 600
  }
}