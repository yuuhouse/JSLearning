//物件 Object
//★★
var movie={
  title:'刻在你心底的名字',
  maker:'氧氣電影',
  duration:114,
  actors:[
    {
      name:'陳昊森',
      age:24,
      is_male:true,
    },
    {
      name:'曾敬驊',
      age:23,
      is_male:true,
    },
  ]
}


document.write(movie.actors[1].is_male);