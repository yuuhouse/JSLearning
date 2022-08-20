//  class
class Phone {
  constructor(number, year, is_waterproof) {
    this.number = number
    this.year = year
    this.is_waterproof = is_waterproof
  }
  phone_age() {
    return 2021 - this.year
  }
}

var phone1=new Phone("123",2020, false)
var phone2=new Phone("456",2018, false)
document.write(phone1.phone_age())
document.write("<br>")
document.write(phone2.phone_age())

/* var phone = {
  number: '123',
  year: '2020',
  is_waterproof: 'false',
  phone_age: function () {
    return 2021 - this.year
  },
}

var phone = {
  number: '456',
  year: '2018',
  is_waterproof: 'false',
  phone_age: function () {
    return 2021 - this.year
  },
}

var phone = {
  number: '789',
  year: '2018',
  is_waterproof: 'true',
  phone_age: function () {
    return 2021 - this.year
  }, 
}*/
