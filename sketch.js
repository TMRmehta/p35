//Create variables here
var dog, happyDog, database, foodS,foodstock
var dogImg1, dogImg2
function preload()
{
  //load images here
  dogImg1 = loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,50,50)
  dog.addImage("dog",dogImg1)
  dog.scale=0.3
  database = firebase.database()
  foodstock = database.ref('food')
  foodstock.on("value", readstock)
}


function draw() {  
background("white")

if(keyWentDown(UP_ARROW)){
  writestock(foodS)
  dog.addImage(dogImg2)
}
  drawSprites();
  //add styles here
  fill("black")
  text("foodRemaining:"+ foodS,100,100)


}

function readstock(data){
foodS = data.val()
}

function writestock(x){
  if(x<0){
    x=0
  }
  else {
    x=x-1
  }


  database.ref('/').update({
    food:x
  })
}

