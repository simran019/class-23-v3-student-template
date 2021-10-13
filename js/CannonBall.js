class Cannonball
{
    constructor(xpos,ypos,r)
    {
        this.x=xpos;
        this.y=ypos;
        this.r=r

        var options={isStatic:true}
        this.image=loadImage("assets/cannonball.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(engine.world,this.body)
    }
    display()
    {
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }
    shoot()
    {
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:30,y:-20});
    }
}