class Particle {
    constructor(x, y){
this.body = Bodies.ellipse(x, y, 10); 
this.color = color(random(0, 255), random(0, 255), random(0, 255));
World.add(world, this.body); 
}
display(){
ellipseMode(RADIUS);
ellipse(this.body.position.x, this.body.position.y, 10);

}

} 