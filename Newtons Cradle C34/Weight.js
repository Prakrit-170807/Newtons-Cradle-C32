class Weight {
    constructor(x, y) {
      var options = {
          'restitution':1.15,
          'friction':10,
          'density':200
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
      fill("#D30E1E");
      ellipse(0, 0, this.width,this.height);
      pop();
    }
  };