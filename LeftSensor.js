class LeftSensor extends Sensor{

    tick(){
        this.x=ball.x-3;
        this.y=ball.y+10;
    }
}