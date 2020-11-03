var MONKEYs,monkey;
var BACKG, BACK;
var Banana,BananaI;
var Obstacle, ObstacleI;
var score;
var invisibleG;

var BG, OG;



function preload() {
  
monkey = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  BACK=loadImage("Jungle.jpg");
  BananaI=loadImage("banana.png");
  ObstacleI=loadImage("stone.png");
 
}



function setup() {
  createCanvas(400, 400);
 
BACKG=createSprite(200,200,400,400);
BACKG.addImage("BACK",BACK);
BACKG.scale=1; 
BACKG.width=400;

  
MONKEYs=createSprite(30,370,75,75);
MONKEYs.addAnimation("monkey",monkey);
MONKEYs.scale=0.1;
  
score=0;
  
BG= new Group();
OG= new Group();  

GameState = 1;
MONKEYs.visible=true;  
invisibleG=createSprite(50,400,800,10); 
invisibleG.visible=false;
}

function draw() {
  background(400);
  

  
  MONKEYs.velocityY=MONKEYs.velocityY+0.2;  
  MONKEYs.collide(invisibleG);
  
  BACKG.velocityX=-2;
  if (BACKG.x<100) {
BACKG.x=BACKG .width/2;  
}
  
  banana();
  obstacles();
  
  if (keyWentDown("space")){
      MONKEYs.velocityY=-7;
      }
  if (BG.isTouching(MONKEYs)){
     score=score+1; 
     BG.destroyEach();
  }
    if (OG.isTouching(MONKEYs)){
     score=score-1; 
      OG.destroyEach();
      MONKEYs.scale=0.1;
  }
      switch(score){
        case 5: MONKEYs.scale=0.12;
                break;
        case 10: MONKEYs.scale=0.14;
                break;
        case 15: MONKEYs.scale=0.16;
                break;
        case 20: MONKEYs.scale=0.18;
                break;
        case 25: MONKEYs.scale=0.20;
                break;
        case 35: MONKEYs.scale=0.25;
                break;
        case 40: MONKEYs.scale=0.30;
                break;
        case 45:MONKEYs.scale=0.35;
                break; 
        case 50: MONKEYs.scale=0.40;
                break;      
        default: break;
    }

    if(GameState === 2)
{
   BG.destroyEach();
   OG.destroyEach();
   MONKEYs.visible=false;
   BACKG.destroy();
   textSize(50)
   //textFont(Courier New)
   stroke("Black")
   fill("black")
   text("Game Over" , 50,200)
}

    switch(score){
      case 5: OG.velocityX = - 5;
              break;
      case 10: OG.velocityX = - 10;
              break;
      case 15: OG.velocityX = - 15;
              break;
      case 20: OG.velocityX = - 20;
              break;
      case 25: OG.velocityX = - 25;
              break;
      case 35: OG.velocityX = - 30;
              break;
      case 40: OG.velocityX = - 35;
              break;
      case 45:OG.velocityX = - 40;
              break; 
      case 50: OG.velocityX = - 45;
              break;      
      default: break;
  }
  
  drawSprites();
stroke("black");
fill("BLACK");
textSize(30);
textFont("Courier new");
text ("Score:"+ score,100,50);  

if(score === -1)
{
   GameState = 2;
   console.log(GameState);
}


}
function banana(){

    if (World.frameCount % 100 === 0) {
      var B=createSprite(400,320,40,10);
      B.addImage(BananaI);
    B.y = random(150,370);
  
    B.scale = 0.05;
    B.velocityX = -3;
    
     //assign lifetime to the variable
    B.lifetime = 154;
  BG.add(B);
}
}
function obstacles(){
 if (World.frameCount % 120 === 0){ 
  var o = createSprite(400,370,10,40);
    o.velocityX = - 5;
    
    o.addImage(ObstacleI);
    
    //assign scale and lifetime to the obstacle           
    o.scale = 0.20;
    o.lifetime = 130;
    //add each obstacle to the group
    OG. add(o);
  }
}