var spaceship, backgroundImage;

//create variable
var backgroundSprite;
function setup() {
   //make it as display width
  createCanvas(windowWidth, windowHeight);
 
  //create class and object
  bg = new backgroundI(
    width / 2,
    height / 2,
    width,
    height * 4
  );
  spaceship = new spaceShip(width / 2, height - 100, 50, 50);

 
}
function draw() {
  background(rgb(198, 135, 103));
  //remove image

   //display bg and spaceship
  bg.display();
  spaceship.display();


//set camera positions
  camera.position.x = width / 2;
  camera.position.y = spaceship.sprite.y;

  // repetive bg

  if (bg.sprite.y < camera.position.y - height / 2) {
    bg.sprite.y = camera.position.y;
  }
   
 //right and left moves of spaceship
 if (keyDown("left") && spaceship.sprite.x > 100) {
  spaceship.sprite.x = spaceship.sprite.x - 20;
}
if (keyDown("right") && spaceship.sprite.x< width - 100) {
  spaceship.sprite.x = spaceship.sprite.x+ 20;
}
  drawSprites();
}
