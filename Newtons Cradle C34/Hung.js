class Hung {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            length : 400
    
        }
        this.pointB = pointB
        this.hung = Matter.Constraint.create(options)
        World.add(world,this.hung)
    }

    display(){
        var pointA = this.hung.bodyA.position
        var pointB = this.pointB
        push()
        strokeWeight(10)
        stroke("#0F0F0F")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()  
    }
}