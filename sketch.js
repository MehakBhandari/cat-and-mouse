var cat,catImage;
var catStanding;
var mouseStanding;
var mouse,mouseImage;
var garden,gardenImage;
var catLastImage;
var mouseLastImage;

function preload() {
 catImage = loadAnimation("images/cat2.png","images/cat3.png");
 catStanding = loadAnimation("images/cat1.png");
 mouseStanding = loadAnimation("images/mouse1.png");
 mouseImage = loadAnimation("images/mouse2.png","images/mouse3.png");
 gardenImage = loadImage("images/garden.png");
 catLastImage = loadAnimation("images/cat4.png");
 mouseLastImage = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
cat = createSprite(800,650,50,80);        
cat.debug = true;
cat.scale = 0.15;
cat.addAnimation("catStanding",catStanding);


mouse = createSprite(200,650,80,30);
mouse.debug = true;
mouse.scale = 0.1;
mouse.addAnimation("mouseStanding",mouseStanding);

}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < mouse.width/2 + cat.width/2){

      cat.velocityX = 0;
      cat.addAnimation("catLastImage",catLastImage);
      cat.x = 300;
      cat.scale = 0.15;
      cat.changeAnimation("catLastImage");
      mouse.addAnimation("mouseLastImage",mouseLastImage);
      mouse.scale = 0.1;
      mouse.changeAnimation("mouseLastImage");
    }
      
      
  
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  

if (keyCode === LEFT_ARROW){

  cat.velocityX = -5 ;
  cat.addAnimation("catrunning",catImage);
  cat.changeAnimation("catrunning");
  mouse.addAnimation("mouseTeasing",mouseImage);
 
  mouse.frameDelay = 25;
  mouse.changeAnimation("mouseTeasing");
}

}
