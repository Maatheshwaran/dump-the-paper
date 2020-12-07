class Paper {
    constructor(x,y) {
      var options = {
          restutition:1.0,
          friction: 0.5
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("red");
      ellipse(pos.x, pos.y, this.radius);
    }
  };