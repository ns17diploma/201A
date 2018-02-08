const $ = require('jquery')
const ViewManager = require('./ViewManager');

let vm = new ViewManager();

class Validator {

  constructor(){
  }
  
  /* THIS CODE IS LET THE MEMBERSHIP NUMBER CANNOT EMPTY */

  membership(obj){
    if( $('#number1').val() === ""){
      vm.errorMessage('#number1', 'Membership number was empty')
      return false  
    }
    else {
      vm.removeError('#number1')
      return true       
    }
  }

  /* THIS CODE IS LET THE SEX CANNOT EMPTY */

  sex(obj){
    if($('#sex').val() === ""){
      vm.errorMessage('#sex','Cannot empty')
      return false  
    }
    else {
       vm.removeError('#sex')
      return true       
    }
  }

  /* THIS CODE IS LET THE FIRST NAME CANNOT EMPTY */

  first(obj){
    if($('#first').val() === ""){
      vm.errorMessage('#first','First name was empty')
      return false  
    }
    else {
      vm.removeError( '#first')
      return true       
    }
  }

  /* THIS CODE IS LET THE LAST NAME CANNOT EMPTY */

  last(obj){
    if($('#last').val() === ""){
      vm.errorMessage('#last','Last name was empty')
      return false  
    }
    else {
      vm.removeError('#last')
      return true       
    }
  }
  
  /* THIS CODE IS LET THE POSTCODE CANNOT EMPTY */

  post(obj){
    if($('#post').val() === ""){
      vm.errorMessage('#post','Cannot empty')
      return false  
    }
    else {
       vm.removeError('#post')
      return true       
    }
  }

  /* THIS CODE IS LET THE TYPE OF MEMBERSHIP CANNOT EMPTY */

  type(obj){
    if($('#type').val() === ""){
      vm.errorMessage('#type','Cannot empty')
      return false  
    }
    else {
      vm.removeError('#type')
      return true       
    }
  }

  /* THIS CODE IS LET THE SUBSCRIPTION DUE MONTH CANNOT EMPTY */

  due(obj){
    if($('#due').val() === ""){
      vm.errorMessage('#due','Cannot empty')
      return false  
    }
    else {
      vm.removeError('#due')
      return true       
    }
  }

  /* THIS CODE IS LET THE ADDRESS EMPTY */

  address(obj) {
    var address = [$('#address0').val(),$('#address1').val(),$('#address2').val()];
    if ( address[0] === "") {
      vm.errorMessage('#address2','Address was empty')
      vm.double('#address0,#address1')
      return false
    }
    else {
       vm.removeError('#address2')
       vm.removeDouble('#address0,#address1')
      return true
    }
  }

  /* THIS CODE IS LET THE MEMBERSHIP NUMBER BE MODULES 11 */

  validate(obj) {
    let number = 0;
    let mn = $('#number1').val();
    let ms = mn.toString();
    for(var i = 0; i< ms.length; i++){
        let x = 6 - i;
        number += Number(ms[i]) * x;
    }
    if ((number % 11) !== 0 || ms.length !== 6) {
        vm.errorMessage('#number1','Membership Number was not a valid modulus 11 number')
        return false
    }
    
    else if ((number % 11) === 0 && ms.length === 6) {
        vm.removeError('#number1')
        return true
    }
  }

  /* THIS CODE IS LET THE DATE OF BIRTH CANNOT EMPTY AND CANNOT MORE THAN 10 DIGITS*/

  date_of_birth(obj){
    if ( $('#date1').val() == "" ||  $('#date1').val().length !== 10 ) {
      vm.errorMessage('#date1','Invalid Date')
      return false
    }
    else {
      vm.removeError('#date1')
      return true
    };
  }

  /* THIS CODE IS LET THE JOIN DATE CANNOT EMPTY AND CANNOT MORE THAN 10 DIGITS*/

  join_date(obj) {
    if ($('#date2').val() === "" || $('#date2').val().length !== 10 ) {
      vm.errorMessage('#date2','Invalid Date')
      return false
    }
    else {
      vm.removeError('#date2')
      return true
    };
  }

  /* THIS CODE IS LET THE JOIN DATE CANNOT OLDER THAN DATE OF BIRTH*/

  date(obj){
    var birth = $('#date1').val().substr(0,4)
    var join = $('#date2').val().substr(0,4)
    if ( $('#date1').val()!=='' && $('#date2').val()!=='' ) {

      if ( Number(birth) > Number(join)) {
       vm.errorMessage('#date2','Your join date cannot older than date of birth')
       return false;
      }
      else {
       vm.removeError('#date2')
       return true;
      }
    }
  } 
}

module.exports = Validator