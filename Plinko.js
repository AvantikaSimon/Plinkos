class Plinko {
    constructor(x, y){
this.body = Bodies.ellipse(x, y, 10); 
World.add(world, this.body); 
}
display(){
ellipseMode(RADIUS);
ellipse(this.body.position.x, this.body.position.y, 10);

}

} 