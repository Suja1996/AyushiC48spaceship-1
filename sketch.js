var spaceship, backgroundImage;

//create variable
var backgroundSprite;
function setup() {
   //make it as display width
  createCanvas(windowWidth, windowHeight);
 
  //create class and object
  bg = new backgroundI(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth,
    windowHeight * 4
  );
  spaceship = new spaceShip(windowWidth / 2, windowHeight - 100, 50, 50);

 
}
function draw() {
  background(rgb(198, 135, 103));
  //remove image

   //display bg and spaceship
  bg.display();
  spaceship.display();


//set camera positions
  camera.position.x = windowWidth / 2;
  camera.position.y = spaceship.sprite.y;

  // repetive bg

  if (bg.sprite.y < camera.position.y - windowHeight / 2) {
    bg.sprite.y = camera.position.y;
  }

  //right and left moves of spaceship
  if (keyDown("left") && spaceship.x > 10) {
    spaceship.x = spaceship.x - 20;
  }
  if (keyDown("right") && spaceship.x < windowWidth - 100) {
    spaceship.x = spaceship.x + 20;
  }

  drawSprites();
}
