class RightSensor extends Sensor{
   
    tick(){
        this.x=ball.x+ball.width;
        this.y=ball.y+10
    }
}