class ShipImagepower{
    constructor(x,y,width,height,image){
      
        this.sprite= createSprite(x,y,width,height)
        //console.log(this.sprite.y)
        this.sprite.velocityY=3;
       // console.log(this.sprite.y)
       this.image=loadImage("images/spanner.png")
    }
    display(){
        
       //console.log(this.sprite.y)
       
        this.sprite.addImage(this.image)
       
       
        this.sprite.scale=0.1
       
   
    }
}