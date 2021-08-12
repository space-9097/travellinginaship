var sea
var seaimg
var ship
var bouncing_ship
var edges


function preload(){
  bouncing_ship = loadAnimation("ship-1", "ship-2", "ship-3", "ship-4");
  seaimg = loadImage("sea.png");
}

function setup(){
  createCanvas(600,200);

  ship = createSprite(50,160,20,50);
  ship.addAnimation("bouncing", bouncing_ship);
  edges = createEdgeSprites();

  ship.scale = 0.5;
  ship.x = 50
  sea=createSprite(300,180,600,10)
  sea.addImage(seaimg);
  sea.velocity=-4
}



function draw() {
  background("blue");
 
  console.log(sea.x)
  if (sea.x<0) {
    sea.x=300
  }

  if(keyDown("space")){
    ship.velocityY=-10;
  }

  ship.velocityY - ship.velocityY + 0.5;

  ship.collide(sea)
  drawSprites();
}