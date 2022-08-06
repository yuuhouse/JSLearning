//製作一個基本的計算機
//prompt("請輸入你的名字");
/* var my_name = prompt("請輸入你的名字");
var my_age = prompt("請輸入你的名字");
document.write("你好啊" + my_name);
document.write("你今年" + my_age+"歲"); */
var num1 = prompt('請輸入數字1')//預設都是字串資料
var num2 = prompt('請輸入數字2')
/* 5 */
/* /* document.write(num1 + num2)//int轉換會消去小數點 
document.write('<br>'); */
num1=parseFloat(num1) 
num2=parseFloat(num2)
document.write(num1 + num2)