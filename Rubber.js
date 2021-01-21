class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
      }
      this.body = Matter.Bodies.circle(x, y, 4, options)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y = mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2)
      stroke("red")
      fill("green");
      rect(0, 0, 150, 50);
      pop();
    }
  }