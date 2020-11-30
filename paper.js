class Paper
{
    constructor(x,y,r)
{
    var option={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,option)
    this.image = loadImage("paper.png");
    World.add(world,this.body);
}
display(){

    var paperpos=this.body.position;

    push()
    translate(paperpos.x,paperpos.y);
    imageMode(CENTER)
    strokeWeight(3)
    fill(225,0,255)
    image(this.image,0,0,this.r,this.r);
    pop()
}
}
