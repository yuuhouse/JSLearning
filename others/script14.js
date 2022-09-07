// 如何取得html元素
document.write('哈哈哈')
window.document.write('哈哈哈')
var a = 123
window.document.write(window.a)
/* window.open() */
var h1 = document.getElementById('header')
console.log(h1)
h1.innerText = 'Hello, world!'
h1.style.backgroundColor = 'red'
h1.style.color = 'green'
var link = document.getElementById('link')
link.href = 'http://amazon.com'
console.log(link)
