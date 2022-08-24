//解構物件 //Array_Object_Destructuring
const person = {
  myName: '小白',
  age: 26,
  favoriteFood: 'WaterMelon',
}
/* console.log(person.name) */

const { name } = person
/* console.log(name) */

const people = ['小明', '杰倫', '漂亮阿姨']
/* const [Ming, Jay, Auntie] = people
console.log(Ming, Jay, Auntie)
 */
//重新命名
const{myName:newName}=person;
console.log(newName)

const {favoriteFood}=person
console.log(favoriteFood)