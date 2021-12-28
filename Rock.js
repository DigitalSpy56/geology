class Rock {
  constructor(x, y) {
    var options = {
      'density':20,
      'friction': 1.5,
      'restitution':1
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options)
    this.width = 55;
    this.height = 55;
    World.add(world, this.body)
  }
  display(){
    var pos = this.body.position

    push();
    translate(pos.x, pos.y)
    rotate(this.body.angle);
    strokeWeight(3);
    stroke('gray')
    fill('darkgray')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height)
    pop();
  }
}