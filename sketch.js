var ironMan,thanos,blackhole,battery,bullet,tesseract,spaceStone,coins
var bg

function preload(){
    ironManImg=loadImage("IMAGES/iron man flying.png")
    thanosImg=loadImage("IMAGES/thanos.png")
    batteryImg=loadImage("IMAGES/battery.png")
    blackholeImg=loadImage("IMAGES/BLACKHOLE.png")
    bulletImg=loadImage("IMAGES/bullet.png")
    tesseractImg=loadImage("IMAGES/tesseract.png")
    spaceStoneImg=loadImage("IMAGES/SPACE STONE.png")
    coinsImg=loadImage("IMAGES/coin image.png")
    bgImg=loadImage("IMAGES/bg.jpg")
}


function setup(){
   //createCanvas(15000,windowHeight)
createCanvas(windowWidth,windowHeight)
 ironMan= createSprite(200,100,50,50)
ironMan.addImage(ironManImg)
ironMan.scale=0.2

thanos=createSprite(500,200,50,50)
thanos.addImage(thanosImg)
thanos.scale=0.2

battery=createSprite(500,400,50,50)
battery.addImage(batteryImg)
battery.scale=0.2


blackhole=createSprite(700,200,50,50)
blackhole.addImage(blackholeImg)
blackhole.scale=0.2



bullet=createSprite(800,400,50,50)
bullet.addImage(bulletImg)
bullet.scale=0.2

tesseract=createSprite(830,200,50,50)
tesseract.addImage(tesseractImg)
tesseract.scale=0.2

spaceStone=createSprite(850,200,50,50)
spaceStone.addImage(spaceStoneImg)
spaceStone.scale=0.2

coins=createSprite(950,200,50,50)
coins.addImage(coinsImg)
coins.scale=0.2


}


function draw(){

    //background(bgImg)
    //camera.position.x=ironMan.x

    if( keyDown(RIGHT_ARROW)){
        ironMan.x=ironMan.x+10
    }
 

    drawSprites()
}