var fs = require('fs');
var $ = require('jquery');
const JsonFileManager = require('./OOP_Manager/JsonFileManager');
const ViewManager = require('./OOP_Manager/ViewManager');
const Member = require('./OOP_Manager/Member');
const Validator = require('./OOP_Manager/Validator');

$(function(){
  const vm = new ViewManager()
  const jfm = new JsonFileManager()
  const member = new Member()
  const validator = new Validator()
  
/**********************************************/  
/*CLEAR BUTTON*/

$('#clear_button').on('click', function(){
      vm.clear_button()
    })

/**********************************************/
/*SAVE BUTTON*/

  $('#save_button').click(function(){
    
/**********************************************/
/*VALIDATE VALUE*/  

        validator.JoinDate()
        validator.DateOfBirth()
        validator.MembershipNumber()
        validator.FirstName()
        validator.LastName()
        validator.Address()
        validator.PostalCode()

/**********************************************/
/*ERROR MESSAGE*/

      if ($('.field').hasClass('error')) {
       vm.validate_fail()

/**********************************************/
/*SUCCESS MESSAGE*/

      } else {
        vm.validate_success()
        
/**********************************************/
/*GET INFORMATION VALUE*/

            var obj = new Member (
            $('#member_number').val(),
            $('#first_name').val(),
            $('#last_name').val(),
            $('#address').val(),
            $('#sexual').val(),
            $('#birth_day').val(),
            $('#join_date').val(),
            $('#member_type').val(),
            $('#sub_month').val(),
            $('#postal_code').val()
         );
        vm.clear_button()
        jfm.saveMembers(obj.transformObj());
    }
  })
})

 
