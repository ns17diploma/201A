class produceNum {
  
  /*function to create create a membership number (Line 4-26)*/
  create(){
      
    /*Create a random number*/
    var x = Math.floor((Math.random() * 999996) + 1);
    
    /*
      Convert number to string to take it's length 
      and do calculation(Line 13-19)
    */
    var digit = x.toString();
    var mul = 6, sum = 0;
    for (var i = 0; i < digit.length; i++) {
      sum += (digit[i] * mul);
      mul--
    }
    sum = Number(sum % 11) 
    
    /*
      if number is six digit and modulus 11 = 0, 
      write this number in HTML, else 
      call the create function again (Line 26-30)
    */
    if (digit.length == 6 && sum == 0) {
     document.getElementById('member_num').value = digit
    } else {
      this.create()
    }
  }
}

/*Export class produceNum(Line 35)*/
module.exports = produceNum