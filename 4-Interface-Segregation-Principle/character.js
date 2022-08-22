// There is no such things like interface
// interface Entity{

//     attackDamage
//     health
//     name

//     move()
//     attack()
//     takeDamage(amount)

// }


// class Character implements Entity{
//     move() {
//     //  Do something
//     }
//     attack() {
//     //  Do something
//     }
//     takeDamage (amount) {
//     //Do something
//     }
// }  


// class Turret implements Entity{
//     move() {
//     //  Do something
//     }
// } 


class Entity {
    constructor(name, attackDamage, health) {
        this.name = name
        this.attackDamage = attackDamage
        this.health = health
    }

    move() {
        console.log(`${this.name} moved`);
    }

    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for $
        {this.attackDamage damage}`);
        targetEntity.takeDamage(this.attackDamage);
    }

    takeDamage(amount) {
        this.health -= amount
        console.log(`${this.name} has ${this.health} health remaining`)

    }
}

class Character extends Entity{

}

class Wall extends Entity{
    constructor(name,health){
        super(name,health)
    }

    move(){
        return null;
    }

    attack(){
        return null;
    }
}

class Turret extends Entity{
    constructor(name,attackDamage){
        super(name,attackDamage,-1)
    }

    move(){
        return null;
    }

    attack(){
        return null;
    }
}

const turret=new Turret('Turret',5)
const character=new Character('Character',3,100)
const wall=new Wall('Wall',200)

