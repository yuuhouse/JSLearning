//function 函式

function hello(name, age) {
  //function
  document.write('你好' + name + '你今年' + age + '歲')
}

hello('小白', 28) //呼叫

document.write('<br>')

function add(num1, num2) {
  //document.write(num1+num2);
  return num1 + num2
}
document.write(add(10, 20))
