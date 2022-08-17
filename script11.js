//  製作一個問答程式

var questions = [
  {
    prompt: '香蕉是什麼顏色?\n(A)紅色(B)綠色(C)黃色',
    answer: 'C',
  },
  {
    prompt: '草莓是什麼顏色?\n(A)紅色(B)紫色(C)黃色',
    answer: 'A',
  },
  {
    prompt: '一公尺等於幾公分?\n(A)1(B)100(C)10',
    answer: 'B',
  },
]
var score=0
for(var i=0;i<questions.length;i++){
  var input=prompt(questions[i].prompt);
  if(input==questions[i].answer){
    score++;
    alert("答對了!")
  }
  else{
alert("答錯了")
  }


}

alert("總共答對了"+score+"題")
