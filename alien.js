class Alien{
    constructor(x,y,width,height,image){
      
        this.sprite= createSprite(x,y,width,height)
       // console.log(this.sprite.y)
        this.sprite.velocityY=3;
       // console.log(this.sprite.y)
        this.image1=loadImage(image)
      
       // this.alienPower=Math.round(random(1,3))*5
      //  console.log(this.alienPower)
    }
    display(){
        
       //console.log(this.sprite.y)
       
        this.sprite.addImage(this.image1)
       
       
        this.sprite.scale=1
       
   
    }
}