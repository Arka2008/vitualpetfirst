//Create variables here
var dog,dogImage,happyDogImage,happyDog;
var database;
var foodS,foodStock;

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happyDogImage=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog=createSprite(250,350,20,20);
  dog.addImage(dogImage);
  dog.scale=0.3;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87);

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }
  
  
  drawSprites();
  //add styles here
  textSize(20);
  fill("orange");
  text("Press UP_ARROW key to feed Drago milk",50,30);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}
