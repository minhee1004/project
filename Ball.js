class Ball extends GameObject{
    constructor(container, src, width, height,x,y,velX,velY){
        super(container, src, width, height,x,y,velX,velY);

   
        this.falled=false;

        //container,width,height,x,y,bg
        this.leftSensor=new LeftSensor(this.container,1,20,this.x-1,this.y+5,"red");
        this.rightSensor=new RightSensor(this.container,1,20,this.x+this.width,this.y+5,"red");
        this.topSensor=new TopSensor(this.container,20,1,this.x+5,this.y-1,"red");
        this.bottomSensor=new BottomSensor(this.container,20,1,this.x+5,this.y+this.height,"red");
    }

    hitCheck(){
       
        for(let i=0;i<brickArray.length;i++){
            let result=collisionCheck(this , brickArray[i]);
            
            if(result){
                this.y=brickArray[i].y - this.height;
                this.falled=true;
            }
        }   
    }

    tick(){
        this.velY+=g;
        
        
        if(this.velY>8){
            this.velY=8;
        }
        this.x+=this.velX;
        this.y+=this.velY;  

       
        this.leftSensor.tick();
        this.leftSensor.render();
        this.rightSensor.tick();
        this.rightSensor.render();

        this.topSensor.tick();
        this.topSensor.render();

        this.bottomSensor.tick();
        this.bottomSensor.render();


        
        this.hitCheck();
    }
    
}