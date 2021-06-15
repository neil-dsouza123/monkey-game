
var monkey,monkey_running;
var ground;
var bananaGroup;
var obstacleGroup;
var invisbleGround;
var survivalTime=0

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png") 
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
 
}



function setup() {
createCanvas(600,600)

  //creating ground
  ground=createSprite(400,550,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
 
  
  //creating monkey
  monkey=createSprite(80,515,400,20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
   invisibleGround = createSprite(200,555,400,10);
  invisibleGround.visible = false
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(255)
  
  ground.x = ground.width/2;
  ground.velocityX=5
  

  
  if(keyDown("space")&& monkey.y >= 500 ) {
    monkey.velocityY = -12
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround)
  
  spawnBanana()
  spawnObstacle()
  
  stroke("black")
  textSize(20)
  fill("white")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime;" + survivalTime,100,50)
  
  drawSprites();
  
}

function spawnBanana(){
    if (frameCount % 80 === 0 ) {
  banana=createSprite  (600,100);
  banana.addImage(bananaImage);
  banana.velocity.x=-10 
  banana.y=Math.round(random(450,400));
  banana.depth=banana.depth+1;
  banana.lifetime=200;
  bananaGroup.add(banana);
  banana.scale=0.1
  }
  }
  
  function spawnObstacle(){
  if (frameCount % 300 === 0 ) {
  obstacle=createSprite  (600,100);
  obstacle.addImage(obstacleImage);
  obstacle.velocity.x=-10 
  obstacle.y=Math.round(random(527,527));
  obstacle.depth=obstacle.depth+1;
  obstacle.lifetime=200
  obstacleGroup.add(obstacle);
  obstacle.scale=0.1
  }
  }





