class Block{
    constructor(x, y, width, height){

      var options={
        density:1,
        restitution:0.2,
        friction:0.5



      }

     
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.w = width;
      this.h = height;
      this.visibility = 255;
      World.add(world,this.body);
    }
  

    score(){

      if(this.visibility<0 && this.visibility>-105){
        score++
      }
      
    }
 
    display(){

      if(this.body.speed<3){

        var pos =this.body.position;
   
     
   
     
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      rect(0,0,this.w, this.h);
      pop();
        

      }
      else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        pop();
      }
    





    }
  }
  