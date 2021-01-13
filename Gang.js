class Gang {
constructor(x,y){
this.car=[];
this.x=x;
this.y=y;
this.image=[];
}
CreateCar(){
    for(var i=this.y;i<500;i=i+90){
        this.car.push(new Car(this.x,i));
       
       };
    }
 
    
    display(){
       this.loadim();
        for(var i=0;i<this.car.length;i++){
           this.car[i].display();
           
           image(this.image[0],this.car[i].body.position.x,this.car[i].body.position.y,70,60);
            };
            
}
loadim(){
   

    for(var i=1;i<5;i++){
        this.image.push(loadImage("Images/car"+i+".jpg"))
      
    };
    console.log(this.image);
  }

}