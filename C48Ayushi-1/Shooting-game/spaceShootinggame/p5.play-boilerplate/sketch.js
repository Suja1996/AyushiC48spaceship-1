var spaceship, backgroundImage;

//create variable
var backgroundSprite;
function setup() {
   //make it as display width
  createCanvas(displayWidth, displayHeight);
 
  //create class and object
  bg = new backgroundI(
    displayWidth / 2,
    displayHeight / 2,
    displayWidth,
    displayHeight * 4
  );
  spaceship = new spaceShip(displayWidth / 2, displayHeight - 100, 50, 50);

 
}
function draw() {
  background(rgb(198, 135, 103));
  //remove image

   //display bg and spaceship
  bg.display();
  spaceship.display();


//set camera positions
  camera.position.x = displayWidth / 2;
  camera.position.y = spaceship.sprite.y;

  // repetive bg

  if (bg.sprite.y < camera.position.y - displayHeight / 2) {
    bg.sprite.y = camera.position.y;
  }

  //right and left moves of spaceship
  if (keyDown("left") && spaceship.x > 10) {
    spaceship.x = spaceship.x - 20;
  }
  if (keyDown("right") && spaceship.x < displayWidth - 100) {
    spaceship.x = spaceship.x + 20;
  }

  drawSprites();
}
