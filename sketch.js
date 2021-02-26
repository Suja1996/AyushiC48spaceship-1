var spaceship, backgroundImage;
var powerPoints = 0;
var checkPoint = 100;
var count = 1;
var bgimagename = "sprites/bg1.png";
//create variable
var backgroundSprite;
var life = 5;
var level = 1;
var countAlien1 = 0;
var countAlien2 = 0;
gameState = "play";
function preload() {
  bg1 = loadImage("images/bg3.jpg");
  bg2 = loadImage("images/bgImage2.png");
  bg3 = loadImage("images/bg2.jpg");

  shipImage1 = loadImage("images/spaceship3.png");
  shipImage2 = loadImage("images/spaceship2.png");
}
function setup() {
  //make it as display width
  createCanvas(windowWidth, windowHeight);

  //create class and object
  bg = new backgroundI(width / 2, height / 2, width, height * 4);
  spaceship = new spaceShip(width / 2, height- height/4, 50, 50);
  danger = createSprite(
    width / 2,
    spaceship.sprite.y + height / 1.8,
    width,
    height
  );


  shipChangeImage = shipImage1;
  alien1Group = new Group();
  alien2Group = new Group();
  bulletGroup = new Group();
  powerlifeGroup = new Group();
  starGroup = new Group();
  shipImageGroup = new Group();
}
function draw() {
  background(rgb(198, 135, 103));
  //remove image
  fill("white");
  textSize(20);
  drawSprites();
  //display bg and spaceship

  //spaceship.display();

  //set camera positions
  camera.position.x = width / 2;
  if (level == 2 || level == 1)
    camera.position.y = spaceship.sprite.y - width / 2 + 400;

  // repetive bg

  if (bg.sprite.y < camera.position.y - height / 2) {
    bg.sprite.y = camera.position.y;
  }
  if (gameState == "play") {
    //right and left moves of spaceship
    if (keyDown("left") && spaceship.sprite.x > 100) {
      spaceship.sprite.x = spaceship.sprite.x - 20;
    }
    if (keyDown("right") && spaceship.sprite.x < width - 100) {
      spaceship.sprite.x = spaceship.sprite.x + 20;
    }

    if (spaceship.sprite.isTouching(shipImageGroup)) {
      shipImageGroup.destroyEach();
      rand = Math.round(random(1, 2));
      if (rand == 1) {
        shipChangeImage = shipImage1;
      } else {
        shipChangeImage = shipImage2;
      }
    }
    spaceship.display(shipChangeImage);

    if (alien1Group.isTouching(bulletGroup)) {
      alien1Group.destroyEach();
      powerPoints += 5;
    }
    if (alien2Group.isTouching(bulletGroup)) {
      alien2Group.destroyEach();
      powerPoints += 5;
    }
    //for scoring
    if (spaceship.sprite.isTouching(alien1Group)) {
      alien1Group.destroyEach();
      // powerPoints -= 5;
      life--;
    }
    if (spaceship.sprite.isTouching(alien2Group)) {
      alien2Group.destroyEach();
      //powerPoints -= 5;
      life--;
    }

    if (spaceship.sprite.isTouching(powerlifeGroup)) {
      powerlifeGroup.destroyEach();
      life += 1;
    }

    if (spaceship.sprite.isTouching(starGroup)) {
      starGroup.destroyEach();
      powerPoints += 5;
    }

    if (life == 0) {
      gameState = "end";
    }

    if (powerPoints % 10 == 0 && powerPoints > 0 && level < 3) {
      level++;
      powerPoints += 5;
    }

    
    if (level == 2) {
      bg.display(bg3);
    } else if (level == 3) {
      if (count == 1) {
        spaceship.sprite.velocityY = 0;
        danger.position.y = spaceship.sprite.y + height / 1.8;
        spaceshipPosition = spaceship.sprite.y;
        camera.position.y = spaceshipPosition - width / 6;
       
       
      }
      console.log("sp"+spaceshipPosition)
      console.log("y of ship"+spaceship.sprite.y)
      console.log("height "+height)
     
      if(spaceship.sprite.y<spaceshipPosition-height-height/4){
        gameState="end"
      }
      count++;
      bg.display(bg2);
      console.log(spaceship.sprite.y);
      bg.sprite.velocityY = 0;
      danger.visible = true;
      danger.y -= 1;
      console.log(danger.y);
      // spaceship.velocityY=-1
      spaceship.sprite.y -= 1;
      console.log(spaceship.y);
    } else if (level == 1) {

      bg.display(bg1);
    }

    if(danger.isTouching(alien1Group)||danger.isTouching(alien2Group)){
      alien1Group.destroyEach();
      alien2Group.destroyEach()
    }

    // CODE for touches
    // if(touches.length>0){
    //   //right and left moves of spaceship

    //   if ((keyDown("left") && spaceship.sprite.x > 10)|| touches[0].x<width/2) {
    //     spaceship.sprite.x = spaceship.sprite.x - 20;
    //     console.log("left")
    //     touches=[]
    //   }else if ((keyDown("right") && spaceship.sprite.x < width - 100)||touches[0].x>width/2) {
    //     spaceship.sprite.x = spaceship.sprite.x + 20;
    //     touches=[]
    //   }
    // }
    arrow();

    text(
      "Power Points " + powerPoints,
      width - 200,
      camera.position.y - height / 2 + 50
    );
    text("Life " + life, width / 2, camera.position.y - height / 2 + 50);
    text("Level " + level, 200, camera.position.y - height / 2 + 50);
    text("y :"+mouseY,mouseX,mouseY)
    if (frameCount % 50 === 0) {
      spawnAliens1();
    }
    if (frameCount % 60 === 0) {
      spawnAliens2();
    }
    if (frameCount % 150 === 0) {
      spawnlife();
    }

    if (frameCount % 130 === 0) {
      spawnstar();
    }
    if (frameCount % 100 === 0) {
      spwnShipImage();
    }
  }

  if (gameState == "end") {
    text("game Over", camera.position.x, camera.position.y);
  }
}

function spawnAliens1() {
  //console.log(Math.round(random(50,width-50)))
  var alien1 = new Alien(
    Math.round(random(50, width - 50)),
    camera.position.y - width / 2 - 200,
    width,
    height * 4,
    "images/ship1.png"
  );
  alien1.display();
  alien1Group.add(alien1.sprite);
}
function spawnAliens2() {
  var alien2 = new Alien(
    Math.round(random(50, width - 50)),
    camera.position.y - width / 2 - 200,
    width,
    height * 4,
    "images/ship9.png"
  );
  alien2.display();
  alien2Group.add(alien2.sprite);
}

function arrow() {
  if (keyWentDown("space")) {
    console.log("shoot");
    bullet = createSprite(spaceship.sprite.x, spaceship.sprite.y, 10, 10);
    bullet.velocityY = -20;
    bullet.shapeColor = "red";
    bulletGroup.add(bullet);
  }
}

function spawnlife() {
  var powerlife = new LifePower(
    Math.round(random(50, width - 50)),
    camera.position.y - width / 2 - 200,
    width,
    height * 4
  );
  powerlife.display();
  powerlifeGroup.add(powerlife.sprite);
}

function spawnstar() {
  var star = new StarPower(
    Math.round(random(50, width - 50)),
    camera.position.y - width / 2 - 200,
    width,
    height * 4
  );
  star.display();
  starGroup.add(star.sprite);
}

function spwnShipImage() {
  var shipImage = new ShipImagepower(
    Math.round(random(50, width - 50)),
    camera.position.y - width / 2 - 200,
    width,
    height * 4
  );
  shipImage.display();
  shipImageGroup.add(shipImage.sprite);
}
