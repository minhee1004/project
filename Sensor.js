class Sensor{
    constructor(container, width,height,x,y,bg){
        this.container=container;
        this.div;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.bg=bg;

        this.div.style.background="red";
        this.div=document.createElement("div");
        this.div.style.width=this.width+"px"
        this.div.style.height=this.height+"px"

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        

        this.container.appendChild(this.div);
    }

}