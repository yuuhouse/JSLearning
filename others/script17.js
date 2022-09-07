//解構物件 //Array_Object_Destructuring
//解構物件 //Array_Object_Destructuring
const person = {
  myName: '小白',
  age: 26,
  favoriteFood: 'WaterMelon',
  url:'https://randomuser.me/api/'
}
/* console.log(person.name) */

const { name } = person
/* console.log(name) */

const people = ['小明', '杰倫', '漂亮阿姨']
/* const [Ming, Jay, Auntie] = people
console.log(Ming, Jay, Auntie)
 */
//重新命名
const { myName: newName } = person
// console.log(newName)

const { favoriteFood = 'Ramen' } = person //預設值
//console.log(favoriteFood)

fetch('https://randomuser.me/api/')
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    /* console.log(json.results[0]) */
    const [result] = json.results
    //console.log(result)
    const {email, phone} = result;
    //console.log(email,phone)//取得email, phone
  })

//Vue, React > Props
/* function fn(Props){
  console.log(Props);
} */
function fn({myName, favoriteFood}){  //加入大括號與不加 顯示結果有差
  console.log(myName, favoriteFood);
}
fn(person)
