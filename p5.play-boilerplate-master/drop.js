class Drop{
    constructor(x, y){
         this.xPosition = x;
         this.yPosition = y;
         this.radius = random(10,20)
       
         this.image = loadImage("star.png");
         
         
    }

    display(){
        //fill(random(0,100), random(0,255), random(100,255))
        //ellipse(this.xPosition, this.yPosition, this.radius, this.radius)

        image(this.image, this.xPosition, this.yPosition, this.radius, this.radius)
        
    }

    fall(){
        this.yPosition =  this.yPosition + random(2,5)

        if(this.yPosition > height){
            this.yPosition = 0;
        }
    }
}