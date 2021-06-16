var bgImg;
var tom,jerry;
var tomImg,jerryImg;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    jerryImg = loadAnimation("images/mouse1.png");
    tomImg = loadAnimation("images/cat1.png");
    jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3 = loadImage("images/mouse4.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png"); 
    tomImg3 = loadAnimation("images/cat4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  jerry = createSprite(150,650,50,50);
  jerry.addAnimation("mouse",jerryImg);
  jerry.scale = 0.15;

  tom = createSprite(860,670,50,50);
  tom.addAnimation("cat",tomImg);
  tom.scale = 0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x <(tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("catRunning",tomImg3);
        tom.changeAnimation("catRunning");
        tom.x = 250;

        jerry.addAnimation("jerry",jerryImg3);
        jerry.changeAnimation("jerry"); 

    }

    drawSprites();
}

function keyPressed(){

    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        jerry.addAnimation("mouseteasing",jerryImg2);
        jerry.changeAnimation("mouseteasing");
        jerry.frameDelay = 25;

    }
    
    if(keyCode === LEFT_ARROW){   
       tom.addAnimation("catRunning",tomImg2);
       tom.changeAnimation("catRunning"); 
       tom.velocityX = -4;
       
    }
  }






































  //Anushka