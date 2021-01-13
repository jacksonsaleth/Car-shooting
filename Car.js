class Car{
    constructor(x,y){
        var options={
         'restitution':0.8,
         'friction':0.5,
         'density':0.8,
         isStatic:true
           
        };
    this.r=10
    this.body=Bodies.circle(x,y,10,options);
    World.add(world,this.body);
   }
    
    
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
    push();
       
        translate(pos.x,pos.y);
        rotate(angle);
      
        pop();

    }
}