 const Engine=Matter.Engine
 const World=Matter.World
 const Bodies=Matter.Bodies


var engine,world,object
var ground

function setup() {
  createCanvas(400,400);
  engine=Engine.create();  //my engine

  world=engine.world //my world
  

  //creating a ball
  var object_options={
    restitution:1.0,
    //density:0.5
  }
  object =Bodies.circle(200,100,20,object_options) //my object
  World.add(world,object)  //adding object to myworld
  
  
  
  
  console.log(object)


  //creating a ground
var ground_options={
  isStatic:true

}
  ground=Bodies.rectangle(200,390,300,20,ground_options)
  World.add(world,ground)
  //console.log(object.position.y)

}

function draw() {
  background("black"); 
  Engine.update(engine)
  ellipseMode(CENTER)
  ellipse(object.position.x,object.position.y,20,20)


  rectMode(CENTER) 

  rect(ground.position.x,ground.position.y,300,50)
  drawSprites();
}