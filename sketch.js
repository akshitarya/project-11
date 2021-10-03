var sea,ship,seaImg,shipImg;

function preload(){
shipImg=loadAnimation("ship-1.png","ship-2.png");
seaImg=loadImage("sea.png");
//Choose the correct option by uncommenting the right line to load the animation for ship.
  
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("moving",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background(220);
  
//Uncomment the correct line to make the background move to create a forward moving effect for the boat
sea.x=-3;
sea.velocityX=-3;
sea.velocityX=3;
sea.velocityY=-3;
  

  
    
  drawSprites();
}
