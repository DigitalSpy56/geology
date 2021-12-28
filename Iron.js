class Iron {
  constructor(x, y) {
    var options = {
      'density':35,
      'friction': 4,
      'restitution':0.2
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options)
    this.width = 45;
    this.height = 45;
    World.add(world, this.body)
  }
  display(){
    var pos = this.body.position

    push();
    translate(pos.x, pos.y)
    rotate(this.body.angle);
    strokeWeight(3);
    stroke('gray')
    fill('lightgray')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height)
    pop();
  }
}