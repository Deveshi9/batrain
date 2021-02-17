const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine ,world;
var maxDrops = 100;
var drops = []
var boy
function preload(){
    
}

function setup(){
   createCanvas (500,500)
   engine = Engine .create();
   world = engine .world;
   boy = new Umbrella(200,300)
   if (frameCount%10===0){
       
   for ( var i=0; i<maxDrops; i++){
      drops.push(new Drops(random(0,500),random(0,500))) ;
   }
}

    
}

function draw(){
    background("black");
    Engine.update(engine);
   boy.display() ;
for (var i = 0; i < maxDrops; i ++){
    drops [i].display();
    drops[i].update();
}


}   

