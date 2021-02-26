class StarPower{
    constructor(x,y,width,height){
      
        this.sprite= createSprite(x,y,width,height)
        //console.log(this.sprite.y)
        this.sprite.velocityY=3;
       // console.log(this.sprite.y)
      // console.log("star")
        this.image1=loadImage("images/star.png")

      
       // this.alienPower=Math.round(random(1,3))*5
        
    }
    display(){
        
       //console.log(this.sprite.y)
       
        this.sprite.addImage(this.image1)
       
       
        this.sprite.scale=0.08
       
   
    }
}