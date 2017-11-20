let jsf = require('jsonfile');
let $ = require('jquery');
let file = 'members.json';
let status = true;
///////////////save form value

  $(function(){
    $('#save_button').on('click',function(){
      if ($('.field').hasClass('error')) {

        let upper_message = `
        <div class="ui negative message error-message">
        <i class="close icon"></i>
        <div class="header">
          Register Form Submit Fail.
        </div>
        <p>Some Error is in Your Form Please Try Again</p>
        </div>
      `
      $('#message_box').html(upper_message)
      }else{
        let upper_message = `
        <div class="ui negative message success">
        <i class="close icon"></i>
        <div class="header">
          Register Form Successful!.
        </div>
        <p>Your Form Register is Successful, Thank You</p>
        </div>
        `
        $('#message_box').html(upper_message)
        var obj = {
        MembershipNumber:$('#member_number').val(),
        FirstName:$('#first_name').val(),
        LastName:$('#last_name').val(),
        Address:$('#address').val(),
        Sex:$('#sexual').val(),
        DateOfBirth:$('#birth_day').val(),
        JoinDate:$('#join_date').val(),
        Type:$('#member_type').val(),
        SubsMonth:$('#sub_month').val(),
        PostalCode:$('#postal_code').val()
      }
        var arr = jsf.readFileSync(file);
        arr.push(obj);
        jsf.writeFile('members.json',arr,{spaces: 2},function(err){
        console.error(err)
       
      });
      }
    })
  })


  ////////////////function

  function error_message(input_id, message){
      let message_html = '<div class="ui pointing red label error_message">' +
      message +'</div>'
      status = false;
      $(input_id).after(message_html);
      $(input_id).closest('.field').addClass('error')
    }

  function remove_error_message(input_id){
      status = true;
      $('.error_message').remove()
      $(input_id).closest('.field').removeClass('error')
    }

  function clear_button(){
      $('.input_save').val('')
      $('.error_message').remove()
      $('.field').removeClass('error')
  }
    $('#clear_button').on('click', function(){
      clear_button()
    })

  ////////////////form validation

    $('#save_button').on('click', function(){
 
    ////
      if ($('#join_date').val().length > 10 ) {
        error_message('#join_date', 'Incorrect Date of Join Format');
      }else{
        remove_error_message('#join_date');
      }
      if ($('#birth_day').val().length > 10 ) {
        error_message('#birth_day', 'Incorrect Date of Birth Format');
      }else{
        remove_error_message('#birth_day');
      }

    ////
      modulus_eleven = 0;
      for(var i = 0; i<$('#member_number').val().length; i++){
        let x = 6 - i;
        modulus_eleven += $('#member_number').val()[i] * x;
      }
      ///
      if ($('#member_number').val().length != 6) {
        error_message('#member_number', 'Membership Number is not 6 digits');
      }else{
        if (modulus_eleven % 11 != 0) {
          error_message('#member_number', 'Membership Number is not a valid modulus 11 number');
        }else{
          remove_error_message('#member_number');
        }
       
      }
    ////

      let first_name = $('#first_name').val().search(/^[a-zA-Z]+$/);
      if (first_name == -1) {
        error_message('#first_name', 'Incorrect First Name Format');
      }else{
        remove_error_message('#first_name');
      }

      let last_name = $('#last_name').val().search(/^[a-zA-Z]+$/);
      if (last_name == -1) {
        error_message('#last_name', 'Incorrect Last Name Format');
      }else{
        remove_error_message('#last_name');
      }
    ////

      if ($('#address').val() === "" ) {
        error_message('#address', 'Incorrect Address Format');
      }else{
        remove_error_message('#address');
      }

      if ($('#postal_code').val() === "" ) {
        error_message('#postal_code', 'Incorrect Postal Code Format');
      }else{
        remove_error_message('#postal_code');
      }
    ////

    ////
    })