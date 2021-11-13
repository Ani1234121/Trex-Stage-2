//creating variables
var trex ,trex_running,edges,ground,groundImg;

//It loads images and sound
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
groundImg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50);
trex.addAnimation("running",trex_running);

edges = createEdgeSprites();
// scaled the trex
trex.scale = 0.5;
trex.x = 50;

console.log("trex runner");
// create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImg);

ground.x = ground.width/2;

}


function draw(){
  background("white")

  console.log(trex.y);
//it lookes like the trex is moving forward
 ground.velocityX = -2;
//The loop to make the ground look infinite
 if(ground.x < 0){
   ground.x = ground.width/2;
 }
//trex.velocityX = 2;
//console.log(ground.x);

//if you hold down space then the trex will go up
if(keyDown("space")){
  trex.velocityY = -10;

}
//we have added gravity
trex.velocityY = trex.velocityY + 0.5;

//This is so the trex doesn't fall off the screen
trex.collide(ground);
drawSprites();
}
