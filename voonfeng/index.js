let jsf = require('jsonfile');
    let file = 'jsfile.json';
    var $ = require('jquery');
    score = 0;
   

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
    $('.errormassage5').hide();
    var elem = $("#dateofbirth");
    if(elem) elem.val(elem.val().substr(0,10));
    $('#dateofbirth').on('keyup', function(){
      if (elem.val().length > 10){
        elem.val(elem.val().substr(0, 10));
        status = false;
        $('#errordate').addClass('error');
        $('.errormassage5').show();
      }else{
        status = true;
        $('#errordate').removeClass('error');
        $('.errormassage5').hide();
      }           
    });


    //join date
    $('.errormassage6').hide();
    var elem2 = $("#joindate");
    if(elem2) elem2.val(elem2.val().substr(0,10));
    $('#joindate').on('keyup', function(){
      if (elem2.val().length > 10){
        elem2.val(elem2.val().substr(0, 10));
        status = false;
        $('#errorjoin').addClass('error');
        $('.errormassage6').show();
      }else{
        status = true;
        $('#errorjoin').removeClass('error');
        $('.errormassage6').hide();
      }           
    });

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

    //cancel
     $('.cancel').on('click',function(){
      location.reload();
    })

    //save button
    $('.inputcheck').hide();
    $('.save').on('click',function(){
    	vilidate();
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

      	// Get the modal
      	var modal = document.getElementById('myModal');

      	// Get the button that opens the modal
      	var btn = document.getElementById("myBtn");

      	// Get the <span> element that closes the modal
      	var span = document.getElementsByClassName("close")[0];

      	// When the user clicks on the button, open the modal 
      	modal.style.display = "block";
      	

      	// When the user clicks on <span> (x), close the modal
      	span.onclick = function() {
      	    modal.style.display = "none";
      	}

      	// When the user clicks anywhere outside of the modal, close it
      	window.onclick = function(event) {
      	    if (event.target == modal) {
      	        modal.style.display = "none";
      	    }
      	}
		
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
	
