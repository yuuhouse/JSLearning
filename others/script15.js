// event listeners

/* function handle_click(element) {
  alert('叫你按就按啊!?')
  console.log(element) //可以配合getElementById 配合function做很多功能 CSS等等

  element.innerText = '按三小啊!!'
  element.style.color = 'red'
} */

var btn = document.getElementById('btn') //ByClass 或 ByTag 都可以
btn.addEventListener('click', function () {
  alert('叫你按就按啊!?')
  this.innerText = '按闢啊'
  this.style.color = 'red'
})

var img = document.getElementById('img')
img.addEventListener("mouseover", function () {
    this.src="練習154 2022-4.png"})
    img.addEventListener("mouseout", function () {
        this.src="練習154 2022-3.png"})
