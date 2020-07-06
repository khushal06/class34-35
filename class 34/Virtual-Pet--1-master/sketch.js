
var dogS , bogB

var dog1,dog2

function preload()
{
  dogS = loadimage("images/dogImg.png");
  dogB = loadimage("images/dogImg.png");
}

function setup() {
  createCanvas(800,800);
  background(0);
  
  dog1 = createSprite(400,400)
  dog1.addimage("dogsit",dogS)



}


function draw() {  
  drawSprites();
   

dog1.display();

}
