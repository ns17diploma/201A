class validator {

  /*Get all value from all_id and assign to each variable*/
  constructor(all_id){
    this.f_name      = all_id[0];
    this.l_name      = all_id[1];
    this.gender      = all_id[2];
    this.bday        = all_id[3];
    this.address     = all_id[4];
    this.postcode    = all_id[5];
    this.member_num  = all_id[6];
    this.member_type = all_id[7];
    this.join_date   = all_id[8];
    this.due_month   = all_id[9];
  }

  /*Function to do validation*/
  verification(){

    /*Find out the space in f_name, then assgin to result1*/
    var result1 = this.f_name.match(/\w/g)

    /*Find out the space in l_name, then assign to result2*/
    var result2 = this.l_name.match(/\w/g)
    
    /*
      Find out the non digit character in member_num, 
      then assign to result3
    */
    var result3 = this.member_num.match(/\D/g)
    var a = document.getElementById("bday").value;
    var b = new Date(a);
    var c = b.getFullYear();
    var d = new Date();
    var e = d.getFullYear();

    /*
      get the value from id member_num,
      assign to number
    */
    let number = document.getElementById('member_num').value; 
    
    /*
      Convert number to string, 
      so we can take it's length
    */
    var digit = number.toString();
    var mul = 6;

    /*A variable to store result*/
    var sum = 0;

   /*
      Break out the number, and multiple from the first digit,
      e.g. 123456. so the calculation is 1*6,2*5,3*4,4*3,5*2,6*1
   */ 
    for (var i = 0; i < digit.length; i++) {
      sum += (digit[i] * mul);
      mul--
    }
    
    /*Calculate the pass amount, expect all pass is 13*/
    var total = 0

    /*Create a new array and assign to err_basket*/
    var err_basket = new Array()

    /*Validate the first name is empty or not*/
    this.f_name != ""
      
      /*
        If first name is not empty, check the length of 
        f_name and result1 is same or not
      */
    ? this.f_name.length == result1.length  
      
      /*
        If the length of first name and result1 is same,
        total +1
      */
      ? total++

      /*Else add number 1 to err_basket*/
      : err_basket.push(1)
    
    /*Else add number 0 to err_basket*/
    : err_basket.push(0) 

    /*Validate the last name is empty or not*/
    this.l_name != "" 

      /*
        If last name is not empty, validate the
        length of l_name and result2 is same or not. 
      */
    ? this.l_name.length == result2.length
      
        /*
          If the length of l_name and result2 is same,
          total+1
        */
      ? total++

      /*else add number 3 to err_basket*/
      : err_basket.push(3)
    
    /*else add number 2 to err_basket*/
    : err_basket.push(2)

    /*Validate the length of bday is equl 10 or not*/
    this.bday.length == 10
      
      /*
        If the length of bday equal 10,
        validate the year of input is euqual 
        or more than this year
      */    
    ? c <  e 
      
      /*
        If the input year is not equal or more than this year 
        total+1
      */
      ? total++

      /*Else add number 5 to err_basket*/
      : err_basket.push(5)

      /*Else add number 4 to err_basket*/
    : err_basket.push(4)
    
    /*Validate the address is empty or not*/
    this.address != ""
      
      /*If address is not empty, total+1*/
    ? total++
      
      /*Else add number 6 to err_basket*/
    : err_basket.push(6)
    
    /*Validate postcode is empty or not*/
    this.postcode != ""

      /*
        If post is not empty, validate length of 
        postcode is equal or more than 5 
      */
    ? this.postcode.length >= 5

        /*
          If postcode is equal or more than 5,
          total+1
        */
      ? total++

        /*else add number 8 to err_basket*/
      : err_basket.push(8)
      
      /*else add number 7 to err_basket*/
    : err_basket.push(7)

    /*Validate the membership number is empty or not*/
    this.member_num.length != 0
      
      /*
        If member_num is not empty, validate
        the result3 is null or not
      */
    ? result3 == null

        /*
          If result3 is null, validate member_num
          is six digit or not
        */
      ? this.member_num.length == 6
        
          /*
            If member_num is six digit, validate the
            sum%11 is 0 or not
          */
        ? sum % 11 === 0

            /*If sum%11 is 0, total+1*/
          ? total++

            /*Else add number 12 to err_basket*/
          : err_basket.push(12)

          /*Else add number 11 to err_basket*/
        : err_basket.push(11)

        /*Else add number 10 to err_basket*/
      : err_basket.push(10)

      /*Else add number 9 to err basket*/
    : err_basket.push(9)

    /*Validate join date is full date or not*/
    this.join_date.length == 10
      
      /*If join date is full date, total+1*/    
    ? total++

      /*Else add number 13 to err_basket*/
    : err_basket.push(13)

    /*Can open console to check the err_basket*/
    console.log(err_basket)
    /*return err_basket to caller*/
    return err_basket;

  }

}

/*export class*/
module.exports = validator