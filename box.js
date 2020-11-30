class Box {
    constructor(x,y,width,height){
        var object={
            restitution:1,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,object);
        this.width=width;
        this.height=height;
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        fill("red");
        image(this.image,0,0,this.width,this.height);
        pop ()
    
    }
    }
