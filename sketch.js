const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var ground

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480, 800);
  ground = new Ground(240, 795, 480, 10);
  
  var divisionHeight = 300;

  for (var k = 0; k<=divisionHeight; k = k + 80){
    divisions.push(new divisions(k, height-divisionsHeight/2, 10, divisionHeight));
  }
  
  for(var j = 40; j<=weight; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j<=weight; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }

  for(var j = 40; j<=weight; j = j + 50){
    plinkos.push(new Ground(j, 275));
  }

  for(var j = 40; j<=weight; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black") 
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  ground.display();
  plinkos.display();
}

function dropParticle() {
if(frameCount/90 === 0){
particles(new Particle(random(0, 480), 800));
}
}