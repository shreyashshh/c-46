class Attach{
    constructor(body,point){
         var options={
             body:body,
             point:point,
             stiffness:0.1
         }
         this.body=body;
         this.point=point;
         this.attach=Constraint.create(options);
         World.add(world,this.attach);
    }
    fly(){
        this.attach.body=null;
    }
    display(){
        if(this.attach.body){
            var pointA=this.body.position;
            var pointB=this.point;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}