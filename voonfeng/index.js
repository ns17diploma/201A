let jsf = require('jsonfile');
    let file = 'jsfile.json';
    var $ = require('jquery');

    $('.cansel').on('click',function(){
      location.reload();
    })

    //Membership Number
    //check membership data
    $('.errormassage0').hide();
    $('.errormassage1').hide();
    $('.modulus').hide();
    $('#check').on('keyup',function(){

        for(a = 7; a < 10000; ++a)
        var x = this.value;
        var status = false;
        var y = x.toString();


      let totalmn = 0;
      for(var i = 0; i < x.length ; i++){
        let b = 6 - i;
        totalmn += x[i] * b;


       if ((totalmn % 11) == 0) {
          status = true;
          $('.modulus').hide();
          $('#errormembership').removeClass('error');
        }else{
          status = false;
          $('.modulus').show();
          $('#errormembership').addClass('error');
        }
      }
      
        var input_e = x.replace(/[^0-9\.]/g,'');
        if (input_e = input_e){
          status = true;
          $('.errormassage0').hide();;
          $('#errormembership').removeClass('error');
        }else{
          status = false;
          $('.errormassage0').show();
          $('#errormembership').addClass('error'); 
        }

        if (y.length > 6){
        var z = y.substr((Number(y.length)-a), 6);
        document.getElementById('check').value = z;
        }

        if (y.length < 6){
        status = false;
          $('.errormassage1').show();
          $('#errormembership').addClass('error');
        }else{
          status = true;
          $('.errormassage1').hide();;
          $('#errormembership').removeClass('error');
        }

        
      }) 


    //First name
    $('.errormassage').hide();
    $('.errormassage2').hide();
    $('#firstname').on('keyup',function(){
      var str = this.value;
      var status = false;
      var abcd = str.search(/^[a-zA-Z]+$/);
      if (abcd != -1) {
        status = true;
        $('#errorfirstname').removeClass('error');
        $('.errormassage').hide();
     }else{
        status = false;
        $('#errorfirstname').addClass('error');
        $('.errormassage').show();
     }
    })


    //Last name
    $('#lastname').on('keyup',function(){
      var str = this.value;
      var status = false;
      var abcd = str.search(/^[a-zA-Z]+$/);
      if (abcd != -1) {
        status = true;
        $('#errorlastname').removeClass('error');
        $('.errormassage2').hide();
     }else{
        status = false;
        $('#errorlastname').addClass('error');
        $('.errormassage2').show();
     }
    })

    //date of birth
    $('.errormassage8').hide();
    $('#dateofbirth').on('keyup',function(){
      var test = this.value;
      var status = false;
      var jsdf = false; 
      if ($(this).val() === "" ){
        status = true;
        jsdf = true;
        $('#errordate').removeClass('error');
        $('.errormassage8').hide();
      }else{
        for(a = 11; a < 10000; ++a)
        if (test.length > 10){
          status = true;
          var z = test.substr((Number(test.length)-a), 10);
          document.getElementById('dateofbirth').value = z;
        } 
      }
    })


    //join date
    $('.errormassage9').hide();
    $('#joindate').on('keyup',function(){
    var test = this.value;
    var jsdf = false; 
    var status = false;
     if ($(this).val() === "" ){
        status = true;
        jsdf = true;
        $('#errorjoin').removeClass('error');
        $('.errormassage9').hide();
     }else{
      for(a = 11; a < 10000; ++a)
      if (test.length > 10){
        status = true;
        var z = test.substr((Number(test.length)-a), 10);
        document.getElementById('dateofbirth').value = z;
      } 
     }
    })

    //Address
      var status = false;
    $('.errormassage3').hide();
    $('#addresserror').on('keyup',function(){
      if($(this).val() === ""){
        status = false;
        $('#erroraddress').addClass('error');
        $('.errormassage3').show();
      }else{
        status = true;
        $('#erroraddress').removeClass('error');
        $('.errormassage3').hide();
      }
    })

    //postcode
    $('.errormassage4').hide();
    $('#postcodeerror').on('keyup',function(){
    var status = false;
    if($(this).val() === ""){
        status = false;
        $('#errorpostcode').addClass('error');
      $('.errormassage4').show();
      } else {
        status = true;
        $('#errorpostcode').removeClass('error');
      $('.errormassage4').hide();
      }
    })

    //save button
    $('.inputcheck').hide();
    $('.save').on('click',function(vilidate){
      if($('.field').hasClass('error') || $('.common').val() === ""){
        $('.inputcheck').show();
      }else{
        $('.inputcheck').hide();
        var obj = {
          Membership_Number:$('.input_membershipnumber').val(),
          Sexual:$('.input_sexual').val(),
          First_Name:$('.input_firstname').val(),
          Last_Name:$('.input_lastname').val(),
          Date_of_Birth:$('.input_date').val(),
          Join_Date:$('.input_joindate').val(),
          Address:$('.input_address').val(),
          Type_of_Membership:$('.input_type').val(),
          Subscription_Due_Month:$('.input_subscription').val(),
          Postcode:$('.input_postcode').val()
        }
        var arr = jsf.readFileSync(file);
        arr.push(obj);
        jsf.writeFile('jsfile.json',arr, function (err){
          console.log('complete');
        });
      }
    })

    function vilidate()
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