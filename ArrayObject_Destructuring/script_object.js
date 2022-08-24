const personOne = {
  name: 'Kyle',
  age: 24,
  favoriteFood:'Rice',
  address: {
    city: 'Sonewhere',
    state: 'One of them',
  },
}
const personTwo = {
  //name:'Sally',
  age: 32,
  favoriteFood: 'Watermelon',
  /* address:{
        city:'Sonewhere else',
        state:'Another one of them'
    } */
}

//const {name: firstName='Jonh', age, favoriteFood='Rice'} = personTwo
//const {name: firstName , ...rest} = personTwo
//const { name: firstName , address : { city } } = personTwo

//console.log(firstName)
//console.log(city)
//console.log(rest)
/*console.log(age)
console.log(favoriteFood) */

//Overwrite data
const personThree = { ...personOne, ...personTwo }
console.log(personThree)

/* function printUser(user){
console.log(`Name is : ${user.name}. Age is : ${user.age}`)
} */
function printUser({ name, age, favoriteFood = 'watermelon' }) {
  console.log(`Name is : ${name}. Age is : ${age}. Food is : ${favoriteFood}`)
}
printUser(personOne)
