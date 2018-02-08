const $ = require('jquery')
class Validator {

  constructor() {
     this.status = false;

     $('.errormassage0').hide();
     $('.errormassage1').hide();
     $('.modulus').hide();
     $('.errormassage').hide();
     $('.errormassage8').hide();
     $('.errormassage2').hide();
     $('.errormassage9').hide();
     $('.errormassage10').hide();
     $('.errormassage5').hide();
     $('.errormassage6').hide();
     $('.errormassage7').hide();
     $('.errormassage3').hide();
     $('.errormassage4').hide();

     this.membership()
     this.firstname()
     this.lastname()
     this.dateofbirth()
     this.joindate()
     this.address()
     this.postcode()    
  }

  //MEMBERSHIP NUMBER
  //CHECK MEMBERSHIP DATA
  membership(obj){
    $('#check').on('keyup',function(){

      for(var a = 7; a < 10000; ++a)
      this.x = this.value;
      this.status = false;
      this.y = this.x.toString();
      var b = 0
      var totalmn = 0;

      //MODULUS 11
      for(var i = 0; i < this.x.length ; i++){
        this.b = 6 - i; 
        totalmn += this.x[i] * this.b;


        if ((totalmn % 11) == 0) {
          this.status = true;
          $('.modulus').hide();
          $('#errormembership').removeClass('error');
        }else{
          this.status = false;
          $('.modulus').show();
          $('#errormembership').addClass('error');
        }
      }
      
      //NOT NUMERIC
      this.input_e = this.x.replace(/[^0-9\.]/g,'');
      if (this.input_e = this.input_e){
        this.status = true;
        $('.errormassage0').hide();;
        $('#errormembership').removeClass('error');
      }else{
        this.status = false;
        $('.errormassage0').show();
        $('#errormembership').addClass('error'); 
      }

      //MUST 5 DIGITS
      if (this.y.length > 6){
        this.z = this.y.substr((Number(this.y.length)-a), 6);
        document.getElementById('check').value = this.z;
      }

      if (this.y.length < 6){
        this.status = false;
        $('.errormassage1').show();
        $('#errormembership').addClass('error');
      }else{
        this.status = true;
        $('.errormassage1').hide();;
        $('#errormembership').removeClass('error');
      }
    }) 
  }


    //FIRST NAME
    firstname(obj) {
      $('#firstname').on('keyup',function(){
        this.str = this.value;
        this.status = false;
        this.nonumber = this.str.search(/^[a-zA-Z]+$/);
        
        if (this.nonumber == 0) {
          this.status = true;
          $('#errorfirstname').removeClass('error');
          $('.errormassage').hide();
          $('.errormassage8').hide();
        }else{
          this.status = false;
          $('#errorfirstname').addClass('error');
          $('.errormassage').show();
          $('.errormassage8').show();
        }
      })
    }

    //LAST NAME
    lastname(obj) {  
    $('#lastname').on('keyup',function(){
      this.str = this.value;
      this.status = false;
      this.nonumber = this.str.search(/^[a-zA-Z]+$/);
      if (this.nonumber == 0) {
        this.status = true;
        $('#errorlastname').removeClass('error');
        $('.errormassage2').hide();
        $('.errormassage9').hide();
     }else{
        this.status = false;
        $('#errorlastname').addClass('error');
        $('.errormassage2').show();
        $('.errormassage9').show();
     }
    })
    }

    //DATE OF BIRTH
    dateofbirth(obj){      
    $('#dateofbirth').on('keyup', function(){
      this.str = this.value;
      this.status = false;      
      if (this.str == ""){
        this.status = false;
        $('#errordate').addClass('error');
        $('.errormassage5').show();
      }else{
        this.status = true;
        $('#errordate').removeClass('error');
        $('.errormassage5').hide();
      }           
    });
    }

    //JOIN DATE
    joindate(obj){    
    $('#joindate').on('keyup',function(){
      this.str = this.value;
      this.status = false;
      if (this.str == "" ) {
        this.status = false;
        $('#errorjoin').addClass('error');
        $('.errormassage6').show();
      }else{
        this.status = true;
        $('#errorjoin').removeClass('error');
        $('.errormassage6').hide();
      }  
    })
}
  

    //ADDRESS
    address(obj){   
    $('#addresserror').on('keyup',function(){
      this.str = this.value;
      if(this.str == ''){
        this.status = false;
        $('#erroraddress').addClass('error');
        $('.errormassage3').show();
      }else{
        this.status = true;
        $('#erroraddress').removeClass('error');
        $('.errormassage3').hide();
      }
    })
    }


    //POSTCODE
    postcode(obj){      
    $('#postcodeerror').on('keyup',function(){
      this.str = this.value;
      this.status = false;
      this.abcd = this.str.search(/^[a-zA-Z]+$/);
    if($(this).val() === ""){
        this.status = false;
        $('#errorpostcode').addClass('error');
        $('.errormassage4').show();
      } else {
        this.status = true;
        $('#errorpostcode').removeClass('error');
        $('.errormassage4').hide();
      }
      for(var a = 6; a < 10000; ++a)
      this.y = this.str.toString();
      var b = 0
      
      if (this.y.length > 5){
        this.z = this.y.substr((Number(this.y.length)-a), 5);
        document.getElementById('postcodeerror').value = this.z;
      }
      if (this.y.length < 5){
        this.status = false;
        $('.errormassage10').show();
        $('#errorpostcode').addClass('error');
      }else{
        this.status = true;
        $('.errormassage10').hide();
        $('#errorpostcode').removeClass('error');
      }

    })
    }


    vilidate(obj)
    {
      if ($('common').each()) {
      if ($('.common').val() === "" || $('.common1').val() === "" ){
        status = false;
        $('.inputcheck').show();
        }else{
          status = true;
          $('.inputcheck').hide();
        }
      }
      return status;
    }

}
module.exports = Validator