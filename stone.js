class Stone {
    constructor(x, y, radius) {
     var options = {
         isStatic: true,
         'restitution':0.3,
         'friction':6,
         'density':1
     }
     this.body = Bodies.circle(x, y, radius, [options], [maxSides]);
     this.width = width;
     this.height = height;
     
 
     World.add(world, this.body);
 }
 display(){
 
     fill(255);
 
     rect(this.body.position.x, this.body.position.y, this.width, this.height);
 }
 };	
     
         