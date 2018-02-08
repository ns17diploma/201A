
var $ = require('jquery');
// var $result = true
 
const ViewManager = require('./ViewManager');
 
let vm = new ViewManager();

class Validator {

  constructor() {

  }

  //THIS IS FOR TO LET THE MEMBERSHIP NUMBER IS MODULES 11

  checkValidate(member)
  {  
      // modulus 11
      let membershipnumber = $('#input-membership').val();
      let x = $('#input-membership').val();   
      let y = x.toString();
      let z = 0;
      
        for(var i = 0; i< y.length; i++){
          let l = 6 - i;
          z += Number(y[i]) * l;  
      }
        
      if (membershipnumber == '') {
          vm.errorMessage("#input-membership", "Membership Number was not a valid and must be numeric"); 
          return false;
        }
      if ( (z % 11) !== 0) {
          vm.errorMessage("#input-membership", "Membership Number was not a valid modulus 11 number");
          return false
      }
      else {
        return true
      }
  }

  //THIS IS FOR TO LET THE FIRST NAME IS NOT EMPTY

  firstname(member) {
      let First_name = $('#input-name').val();

      if ( First_name == "") {
        vm.errorMessage("#input-name","First Name must be letter");
        return false;
      }
    
      else { 
        vm.removeError("#input-name"); 
        return true;
      }
  }


  //THIS IS FOR TO LET THE JOIN DATE IS NOT OLDER THAN THE DATE OF BIRTH

  compare(member) {
    var datebirth = $('#dob').val().substr(0,4)
    var jDate = $('#jd').val().substr(0,4)
    if ($('#dob').val()!=='' && $('#jd').val()!=='') {
      if (Number(datebirth)>Number(jDate)) {
      vm.errorMessage("#jd","Join Date cannot older than Date of Birth");
      //$('#error13').show();
      return false;
      }else{
      vm.removeError("#jd"); 
      //$('#error13').hide();
      return true;
    }
  }
    
  }

  //THIS IS FOR TO LET THE LAST NAME IS NOT EMPTY

  lastname(member) {
      var Last_name = $('#input-last').val();
      if ( Last_name == "") {
         vm.errorMessage("#input-last","Last Name was not a valid input");
        //$('#error05').show();
        return false;
      }
    
      else {
        vm.removeError("#input-last")
        //$('#error05').hide();
        return true;
      }
  }

  //THIS IS FOR TO LET THE BIRTH IS NOT EMPTY

  birth(member){
    if ( $('#dob').val() == "" || $('#dob').val().length !== 10 ) {
      vm.errorMessage("#dob","Invalid Date of Birth");
      //$('#error07').show();
      return false;
    }
    else {
       vm.removeError("#dob")
      //$('#error07').hide();
      return true;
    }
  }

  //THIS IS FOR TO LET THE JOIN DATE IS NOT EMPTY

  joinDate(member) {
    if ($('#jd').val() == "" || $('#jd').val().length !== 10 ) {
      vm.errorMessage("#jd","Invalid Join Date");
      //$('#error06').show();
      return false;
    }
    else {
      vm.removeError("#jd");
      //$('#error06').hide();
      return true;
    }
  }

  //THIS IS FOR TO LET THE ADDRESS IS NOT EMPTY

   address(member) {
      var Address = [$('#address1').val(),$('#address2').val(),$('#address3').val()];
      if ( Address[0] == "") {
         vm.errorMessage("#address3","Invalid Address");
        //('#error09').show();
        return false;
      }
    
      else {
        vm.removeError("#address3");
        //$('#error09').hide();
        return true;
      }
  }

  //THIS IS FOR TO LET THE POSTCODE IS NOT LESS THAN 5

   postcode(member) {
    if ( $('#Postcode').val() == "" || $('#Postcode').val().length !== 5) {
      vm.errorMessage("#Postcode","Postcode must have 5 digit");
      //$('#error08').show();
      return false;
    } else {
      vm.removeError("#Postcode");
      //$('#error08').hide();
      return true
    }
  }

  //THIS IS FOR TO LET THE MEMBERSHIP TYPE IS NOT EMPTY

   membership(member) {
      var membership = $('#input-membership-type').val();
      if ( membership == "") {
        vm.errorMessage("#input-membership-type","Membership type must be F, S, T or B");
        //$('#error10').show();
        return false;
      }
    
      else {
        vm.removeError("#input-membership-type");
        //$('#error10').hide();
        return true;
      }
  }

  //THIS IS FOR TO LET THE SUBSCRIPTION DUE MONTH IS NOT EMPTY

   day(member) {
      var day = $('#day').val();
      if ( day == "") {
        vm.errorMessage("#day","Subscription Due Month was not valid");
        //$('#error11').show();
        return false;
      }
    
      else {
        vm.removeError("#day")
        //$('#error11').hide();
        return true;
      }
  }

  //THIS IS FOR TO LET THE SEX IS NOT EMPTY

   sex(member) {
      var sex = $('#sex').val();
      if ( sex == "") {
        vm.errorMessage("#sex","Sex was not valid");
        //$('#error12').show();
        return false;
      }
    
      else {
        vm.removeError("#sex")
        //$('#error12').hide();
        return true;
      }
  }
}


module.exports = Validator