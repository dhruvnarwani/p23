class Line{
    constructor(x, y, width, height){
    var property = {
     'restitution' : 0.5,
     'friction' : 0.3,
     'density' : 1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, property);
    this.width = width;
    this.height = height;  
     World.add(world, this.body)
  }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill("red");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}