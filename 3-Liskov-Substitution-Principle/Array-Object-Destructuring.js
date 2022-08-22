const alphabet=['A','B','C','D','E','F']

const numbers=['1','2','3','4','5','6']


const [a,, c,...rest]=alphabet

const newArray= [...rest,...numbers]

console.log(a); 
console.log(c);
console.log(rest);
console.log(newArray);


function sumAndMultiply(a,b){
    return [a+b,a*b]
}

console.log(sumAndMultiply(2,3))



const [sum,multiply,division='No Division']=sumAndMultiply(2,3)

console.log(sum);
console.log(multiply);
console.log(division);


const personOne={
    name:'Dhruv',
    age:42,
    favouriteFood:'Watermelon',
    address:{
        city:'Somewhere else',
        state:'Another one of them'
    }
}

const { name: firstName = 'Dhruv', age, favouriteFood = 'Rice',address:{state}} = personOne

console.log(firstName)
console.log(age)
console.log(favouriteFood);
console.log(state);

const personTwo={
    age:32,
    favouriteFood:'Apple'
}


const personThree={...personOne,...personTwo}
console.log(personThree);
