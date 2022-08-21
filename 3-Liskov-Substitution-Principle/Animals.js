// 3.Composition vs Inheritance

// class Monster{

//     constructor(name){
//         this.name=name
//     }    

//     attack(){
//         console.log(`${this.name} attacked`)
//     }

//     walk(){
//         console.log(`${this.name} walked`)
//     }
// }


// class FlyingMonster extends Monster{
//     fly(){
//         console.log(`${this.name} flew`)
//     }
// }

// class SwimingMonster extends Monster{
//     swim(){
//         console.log(`${this.name} swam`)
//     }
// }

// // Here not possbile to extends the flying Monster
// class flyingSwimingMonster extends Swiming{

// }

// const bear=new Monster('bear')
// bear.walk()
// bear.attack()


// const eagle=new FlyingMonster('eagle')
// eagle.walk()
// eagle.fly()
// eagle.attack()


// const shark=new SwimingMonster('shark')
// shark.walk()
// shark.swim()
// shark.attack()


function swimmer({name}){
    return{
        swim:()=>{
            console.log(`${name} swam`)
        }
    }
}

function flyer({name}){
    return{
        fly:()=>{
            console.log(`${name} flew`)
        }
    }
}

function walker({name}){
    return{
        walk:()=>{
            console.log(`${name} walking`)
        }
    }
}

function attacker({name}){
    return{
        attack:()=>{
            console.log(`${name} attacking`)
        }
    }
}

function swimingMonsterCreator({name}){
    const monster={name:name}
    return {
        ...monster,
        ...swimmer(monster)
    }
}

function flyingSwimingMonsterCreator({name}){
    const monster={name:name}
    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster)
    }
}

function flyingSwimingWalkingMonsterCreator({name}){
    const monster={name:name}
    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster),
        ...walker(monster)
    }
}

function flyingSwimingWalkingAttckerMonsterCreator({name}){
    const monster={name:name}
    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster),
        ...walker(monster),
        ...attacker(monster)
    }
}

const obj=swimmer({name:'Eagle'})
obj.swim()

const penguin=swimingMonsterCreator({name:'Penguin'})
penguin.swim()


const bat=flyingSwimingMonsterCreator({name:'Bat'})
bat.swim()
bat.fly()


const duck=flyingSwimingWalkingMonsterCreator({name:'Duck'})
duck.fly()
duck.swim()
duck.walk()


const monster=flyingSwimingWalkingAttckerMonsterCreator({name:'Monster'})
monster.attack()
monster.fly()
monster.swim()
monster.walk()