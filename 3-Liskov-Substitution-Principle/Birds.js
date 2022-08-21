//violating the Liskov Substitution Principle below code
// class Birds{
//     fly(){
//         console.log('I can a fly')
//     }
// }

// class Duck extends Birds{
//     quack(){
//         console.log('I can a quack')
//     }
// }

// class Penguin extends Birds{
//     fly(){
//         throw new error('Cannot fly')
//     }

//     swim(){
//         console.log('I can swim')
//     }
// }

// function makeBirdFly(bird){
//     bird.fly()
// }


// const duck=new Duck()
// const penguin=new Penguin()

// makeBirdFly(duck)
// makeBirdFly(penguin)


// ====================================================================== //


//2.Second approach implement the Liskov Substitution Principle but inhertaince problem still exist.

class FlyingBirds{
    fly(){
        console.log('I can a fly')
    }
}

class SwimingBird{
    swim(){
        console.log('I can swim')
    }
}

class Duck extends FlyingBirds{
    quack(){
        console.log('I can a quack')
    }
}

//2.here penguin can fly and swim together but we are not able to extends two class together
class Penguin extends SwimingBird{
}

function makeFlyingBirdFly(bird){
    bird.fly()
}

function makeSwimingBirdFly(bird){
    bird.swim()
}


const duck=new Duck()
const penguin=new Penguin()

makeFlyingBirdFly(duck)
makeSwimingBirdFly(penguin)







