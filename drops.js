class Drops {
    constructor(x,y){
        var options =  {
           friction :0.1,
           restitution :0.1,
           density:4,
        
        };
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5
        World.add(world,this.rain)
    }

    update (){
        if(this.rain.position.y >height){
        Matter.Body.setPosition(this.rain,{x:random(0,500),y:random(0,500)})
        }
    }

    display(){
    var pos = this.rain.position
    fill("blue")
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.radius,this.radius)
}

}