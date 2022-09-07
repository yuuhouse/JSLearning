/* function myDisplayer(something) {
  document.getElementById('demo').innerHTML = something
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2
  myCallback(sum)
}

myCalculator(5, 5, myDisplayer) */

setTimeout(myFunction, 3000);//延遲

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}

const btn = document.getElementById("btn");
btn.addEventListener('click', () => {
  alert('你點擊了我！');

  let pElem = document.createElement('p');
  pElem.textContent = '這是一段新加的文字。';
  document.body.appendChild(pElem);
});
