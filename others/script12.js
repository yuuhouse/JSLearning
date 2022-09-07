//  二維陣列、巢狀迴圈

number = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]]

/* document.write(number[2][0]) */

for (var i = 0; i < number.length; i++) {
  /* document.write(number[i]) */

  for (var j = 0; j < number[i].length; j++) { //可以根據二維的長度自動調整
     document.write(number[i][j]) 
  }
  document.write('<br>')
}
