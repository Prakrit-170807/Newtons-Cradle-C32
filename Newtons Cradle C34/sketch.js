
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const MouseConstraint = Matter.MouseConstraint;

var weight, weight2, weight3, weight4, weight5, weight6
var holder
var hung, hung2, hung3, hung4, hung5, hung6
var options = {
  'restitution':1.15,
  'friction':10,
  'density':200
}

function setup() {
  createCanvas(1533, 710);

  engine = Engine.create();
  world = engine.world;
  
  var options ={
    body:weight
  }
  
  mouseConstraint = MouseConstraint.create(engine,options)
  World.add(world,mouseConstraint)

	

  holder = new Holder(500,150,10000,40)

	weight = new Weight(516,150)
	weight2 = new Weight(616,150)
	weight3 = new Weight(716,150)
	weight4 = new Weight(816,150)
	weight5 = new Weight(916,150)
	weight6 = new Weight(1016,150)

	hung = new Hung(weight.body,{x:516,y:150})
  hung2 = new Hung(weight2.body,{x:616,y:150})
  hung3 = new Hung(weight3.body,{x:716,y:150})
  hung4 = new Hung(weight4.body,{x:816,y:150})
  hung5 = new Hung(weight5.body,{x:916,y:150})
  hung6 = new Hung(weight6.body,{x:1016,y:150})


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("#ABACAE");

  hung.display()
  hung2.display()
  hung3.display()
  hung4.display()
  hung5.display()
  hung6.display()

  holder.display()

  weight.display()
  weight2.display()
  weight3.display()
  weight4.display()
  weight5.display()
  weight6.display()
  
  drawSprites();
 
}

function keyPressed() {
  if(keyCode == LEFT_ARROW){
		Matter.Body.applyForce(weight.body,weight.body.position,{x:-50000,y:50})
	}

	if(keyCode == RIGHT_ARROW){
		Matter.Body.applyForce(weight6.body,weight6.body.position,{x:50000,y:50})
  }	
}







