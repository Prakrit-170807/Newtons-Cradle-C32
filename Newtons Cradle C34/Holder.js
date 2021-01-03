class Holder{
    constructor(x,y,width,height){
        this.width=width
        this.height=height
        var ground_options={
            isStatic:true
        }

        this.holder = Bodies.rectangle(x, y, width, height ,ground_options);
	    World.add(world, this.holder);
    }
    display(){
        push()
        rectMode(CENTER);
        fill("#1C1B1B");
        rect(this.holder.position.x, this.holder.position.y, this.width, this.height)
        pop()
    }
}