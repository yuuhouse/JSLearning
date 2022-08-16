//物件 Object

// key value

var person = {
  name: '小白',
  age: 26,
  is_male: true,
  print_name: function () {
    document.write(this.name) //this.name=preson.name
  },
  print_num: function (num) {
    document.write(num * 10)//傳值
  },
}

document.write(person.name)
person.print_name()
person.print_num(10)

var phrase='hello world';
//console.log(phrase.indexOf());
