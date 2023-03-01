//https://medium.com/unalai/%E8%AA%8D%E8%AD%98-parseint-parsefloat-%E8%88%87-number-%E8%BD%89%E6%8F%9B%E6%88%90%E6%95%B8%E5%AD%97%E7%9A%84%E4%B8%89%E7%A8%AE%E6%96%B9%E6%B3%95-276640aedb4e
//認識 parseInt、parseFloat 與 Number 轉換成數字的三種方法

/* 
parseInt()
parseFloat()
Number() 
*/

/* 
語法：parseInt(string, radix)

parseInt("5A34",10) //5，字元 A 無法被解析為數字，因此停止解析，回傳 5
parseInt("5A34",16) //23092，依照 16 進制解析並計算為 10 進位
parseInt("") // NaN
parseInt("16px",10) //16
parseInt(" 332",10) //332，空白會被忽略
*/

console.log("愛老虎油");
console.log(parseInt(" 11",2));//轉換字串成int 後面是幾進位輸入 若為2進位 將11輸入會得到3
//3
console.log(parseInt(" 11",10));
//11


//語法：parseFloat(string)

console.log(parseFloat("55.44")) // 55.44
console.log(parseFloat("33.44.55")) // 33.44

//語法：Number(value)

Number(undefined) // NaN
Number(null) // 0
Number(true) // 1
Number(false) // 0
Number(33) // 33
Number(33.66) // 33.66
Number("0x11") // 17
Number("0b11") // 3
Number("0o11") // 9
Number("") // 0
Number("33") //33
Number("16px") // 轉換值中包含無法轉換的內容
