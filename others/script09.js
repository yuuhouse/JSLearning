// 密碼檢驗程式

var password = 123456
var input
var count = 0 //嘗試次數
var limit = 3 //失敗次數
var out_of_limit = false

while (password != input && !out_of_limit) {
  count++

  if (count <= 3) {
    input = prompt('請輸入密碼')
  } else {
    out_of_limit = true
  }
}

if (out_of_limit) {
  alert('失敗過多次')
} else {
  alert('登入成功')
}
