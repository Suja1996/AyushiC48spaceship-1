class spaceShip{
    constructor(x,y,width,height){
      
        this.sprite= createSprite(x,y,width,height)
        this.sprite.velocityY=-5;
        this.image=loadImage("images/ship1.png")
    }
    display(){
        
       
        this.sprite.addImage(this.image)
        this.sprite.scale=1.4
  
    }
}