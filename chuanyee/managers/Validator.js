
var $ = require('jquery');
var $result = true

const ViewManager = require('./../managers/ViewManager');

let vm = new ViewManager();

class Validator{

  constructor(){
  
  }

  /* MEMBERSHIP NUMBER CANNOT BE EMPTY, MUST BE 6 DIGITS 
       , MUST BE NUMERIC AND MODULUS 11 */ 
  validateMember(member)
  {
    let mns = $('#membership_number').val()
    var mnTotal = 0;
    for(var i = 0; i < mns.length; i++){
      let x = 6 - i;
      mnTotal += Number(mns[i]) * x;
    }
    
    if(mns == "" || !/\d{6}/ || mns.length !== 6 || (mnTotal % 11) !== 0){
      // $('#error03').show()
      vm.errorMessage("#membership_number","Membership Number was not numeric and empty")
      return false
    } 
    else {
      vm.removeError("#membership_number");
      return true;
    }

  }

// FIRST NAME CANNOT BE EMPTY AND MUST BE LETTER//  
  validateFirstName(firstname)
  {
      if (firstname === "" || /\d/.exec(firstname)) {
      vm.errorMessage("#first_name","First Name must be letter")      
      vm.errorMessage("#first_name","First Name cannot be empty")      
      return false;
    } else {
      vm.removeError("#first_name");
      return true;
    }
  }

  // LAST NAME CANNOT BE EMPTY AND MUST BE LETTER//  
  validateLastName(lastname)
  {
    if (lastname === "" || /\d/.exec(lastname)) {
      vm.errorMessage("#last_name", "Last Name must be letter");
      
      vm.errorMessage("#last_name", "Last Name cannot be empty");
      return false;
    } else {
      vm.removeError("#last_name");
      return true;
    }
  }

  // ADDRESS CANNOT BE EMPTY //  
  validateAddress(address)
  {
    if(address === ""){
      vm.errorMessage("#address","Address cannot be empty");
      return false;
    }else{
      vm.removeError("#address");
      return true;
    }
  }

  
  // POSTCODE CANNOT BE EMPTY, NUMERIC AND MUST BE 5 DIGITS //
  validatePostcodeDigits(postcode)
  {
    let post = postcode.toString();
    if ( postcode == "" || !/\d{5}/.exec(postcode) || post.length !== 5) {
      vm.errorMessage("#postcode", "Postcode must be 5 digits");
      return false 
    } else  {
      vm.removeError("#postcode");
      return true;
    }
  }

    // MEMBERSHIP NUMBER MUST BE 6 DIGITS //  
  validateDigits(membership_number)
  {
    let mn = $('#membership_number').val();
    let ms = mn.toString(); 
    if (ms.length !== 6) {
      vm.errorMessage("#membership_number","Membership Number must be 6 digits");
      return false
    }
    else if (ms.length === 6) {
      vm.removeError("#membership_number");
      return true
    }
  }

  // MEMBERSHIP NUMBER MUST BE MODULUS 11 //
  validateModulus(member)
  {
    var number = 0;
    let mn = $('#membership_number').val();
    let ms = mn.toString();
    for(var i = 0; i< ms.length; i++){
        let x = 6 - i;
        number += Number(ms[i]) * x;
    }

    if ((number % 11) !== 0 || ms.length !== 6) {
        vm.errorMessage("#membership_number", "Membership Number was not a valid modulus 11 number");
        return false
    }
    
    else if ((number % 11) === 0 && ms.length === 6) {
        vm.removeError("#membership_number");  
        return true
    }
  }
    
  // THE DATE OF JOIN CANNOT EARLY THAN DATE OF BIRTH //
  validateTwoDates(birth, join)
  {
    var checkBirth = birth.substr(0,4);
    var checkJoin = join.substr(0,4);

    if ( Number(checkBirth) > Number(checkJoin)) {
      vm.errorMessage("#date_of_birth", "Invalid Date of Birth");
      return false;
    }
    else {
      vm.removeError();
      return true;
    }
  }
  // JOIN DATE AND BIRTH DATE CANNOT BE EMPTY //
  validateBirth(birth, join)
  {
        if (birth === "" || join === "") {
      vm.errorMessage("#date_of_birth", "Invalid Date of Birth");
      return false
    } else {
      vm.removeError("#date_of_birth");
      return true
    }
  }

  // TYPE OF MEMBERSHIP MUST SELECT ONE OF THE OPTION //
  validateType(type)
  {
        if (type === ""){
      vm.errorMessage('#type_of_membership', "Type of membership cannot be empty");
      return false
    }else{
      vm.removeError('#type_of_membership');
      return true
    }
  }

  
 
  // SUBSCRIPTION DUE MONTH CANNOT BE EMPTY //
  validateSubscription(subscription)
  {
    if(subscription === ""){
      vm.errorMessage('#month', "Subscription of month cannot be empty");
      return false
    }else{
      vm.removeError('#month');
      return true
    }
  }

  // SEX MUST SELECT F OR M //
  validateSex(sex)
  {
    if(sex === ""){
      vm.errorMessage('#sex', "Sex must select F or M")
      return false
    }else{
      vm.removeError('#sex');
      return true
    }
  }
}
module.exports = Validator
