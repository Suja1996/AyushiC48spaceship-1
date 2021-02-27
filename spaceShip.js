class spaceShip{
    constructor(x,y,width,height){
      
        this.sprite= createSprite(x,y,width,height)
        this.sprite.velocityY=-5;
        this.image=loadImage("images/ship1.png")
       // this.test=loadImage("images/ship1.png")
    }
    display(shipimage){
        
       
        this.sprite.addImage(shipimage)
        this.sprite.scale=3
       

  
    }
}