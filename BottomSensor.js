class BottomSensor extends Sensor{
   
    tick(){
        this.x=ball.x+5;
        this.y=ball.y+ball.height;
    }
}