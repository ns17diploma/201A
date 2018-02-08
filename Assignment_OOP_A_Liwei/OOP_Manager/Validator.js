////REQUIRE SOURCE

const $ = require('jquery')
const ViewManager = require('./ViewManager')
const vm = new ViewManager()
class Validator {

//// VALIDATE JOIN DATE FORMAT CORRECT

    JoinDate(obj){
      if ($('#join_date').val().length > 10 ) {
        vm.error_message('#join_date', 'Incorrect Date of Join Format');
      }else{
        vm.remove_error_message('#join_date');
      }
    }

//// VALIDATE DATE OF BIRTH FORMAT CORRECT 

    DateOfBirth(obj){
      if ($('#birth_day').val().length > 10 ) {
        vm.error_message('#birth_day', 'Incorrect Date of Birth Format');
      }else{
        vm.remove_error_message('#birth_day');
      }
    }
    
//// VALIDATE MEMBERSHIP NUMBER IS 6 DIGITS 

    MembershipNumber(obj){
      var modulus_eleven = 0;
      for(var i = 0; i<$('#member_number').val().length; i++){
        let x = 6 - i;
        modulus_eleven += $('#member_number').val()[i] * x;
      }
      ////
      if ($('#member_number').val().length != 6) {
        vm.error_message('#member_number', 'Membership Number is not 6 digits');
      }else{
        if (modulus_eleven % 11 != 0) {
          vm.error_message('#member_number', 'Membership Number is not a valid modulus 11 number');
        }else{
          vm.remove_error_message('#member_number');
        }
       }
      }

////VALIDATE FIRST NAME FORMAT IS CORRECT

    FirstName(obj){
      if ($('#first_name').val() === "" ) {
        vm.error_message('#first_name', 'First Name Case is Empty');
      }else{
      let first_name = $('#first_name').val().search(/^[a-zA-Z]+$/);
      if (first_name == -1) {
        vm.error_message('#first_name', 'Incorrect First Name Format');
      }else{
        vm.remove_error_message('#first_name');
      }
    }
}
////VALIDATE FIRST NAME FORMAT IS CORRECT

    LastName(obj){
      if ($('#last_name').val() === "" ) {
        vm.error_message('#last_name', 'Last Name Case is Empty');
      }else{
      let last_name = $('#last_name').val().search(/^[a-zA-Z]+$/);
      if (last_name == -1) {
        vm.error_message('#last_name', 'Incorrect Last Name Format');
      }else{
        vm.remove_error_message('#last_name');
      }
    }
  }

////VALIDATE ADDRESS FORMAT IS CORRECT

    Address(obj){

        if ($('#address').val() === "" ) {
          vm.error_message('#address', 'Incorrect Address Format');
        }else{
          vm.remove_error_message('#address');
        }
      }

////VALIDATE POSTALCODE NUMBER IS 5 DIGITS

    PostalCode(obj){
      if ($('#postal_code').val() === "" ) {
        vm.error_message('#postal_code', 'Incorrect Postal Code Format');
      }else{
        vm.remove_error_message('#postal_code');
      }
    }
}

module.exports = Validator