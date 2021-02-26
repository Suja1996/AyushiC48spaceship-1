class backgroundI{
    constructor(x,y,width,height){
        

        this.sprite= createSprite(x,y,width,height)
        //increase velocity
        this.sprite.velocityY=-20
        this.bgImage = loadImage("images/bgImage2.png");
    }
    display(bgImage){
      
   
        this.sprite.addImage(bgImage)
        this.sprite.scale=3
      
    }
}

// created the entire class