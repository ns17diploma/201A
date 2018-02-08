
var fs = require('fs')
var $ = require('jquery');
var $result = true;

	
const JsonFileManager = require('./managers/JsonFileManager');
const Validator = require('./managers/Validator');
const Member = require('./models/Member');
const ViewManager = require('./managers/ViewManager')
let allError = []

$(function(){
	$('.error-message').each(function(){
		$this = $(this)
		allError.push($this.attr('id'))
	})

	let vm = new ViewManager(allError)
	const jfm = new JsonFileManager()
	const validator = new Validator()


	// POSTCODE MUST BE 5 DIGITS // 
	$('#postcode').on('keyup',function(){
		vm.clear();
	    let pc = $('#postcode').val();
	    let p = pc.toString();
	    if(p.length > 5){
	      var c = p.substr((Number(p.length)-5),5);
	      $('#postcode').val(c);
	    }
	    else if (p.length !== 5){
	      vm.errorMessage("#postcode", "Postcode must be 5 digits");
	      return false
	    }
	    else if (p.length === 5){
	      vm.removeError("#postcode");
	     return true;
	    }
  })

	$('#save').on('click', function(){
		vm.clear();
		var member = new Member(
		$('#membership_number').val(),
		$('#sex').val(),
		$('#first_name').val(),
		$('#date_of_birth').val(),
		$('#last_name').val(),
		$('#join_date').val(),
		$('#address').val(),
		$('#type_of_membership').val(),
		$('#postcode').val(),
    	$('#month').val())



    let memberNum = $('#membership_number').val()
    let firstname = $('#first_name').val()
    let lastname = $('#last_name').val()
    let birth = $('#date_of_birth').val()
    let join = $('#join_date').val()
    let postcode = $('#postcode').val()
    let address = $('#address').val()
    let type = $('#type_of_membership').val()
    let subscription = $('#month').val()

   	validator.validatePostcodeDigits(postcode)
   	validator.validateDigits(membership_number)
   	validator.validateModulus(member)
   	validator.validateBirth(birth,join)
   	validator.validateFirstName(firstname)
   	validator.validateLastName(lastname)
   	validator.validateAddress(address)
   	validator.validateType(type)
   	validator.validateSubscription(subscription)

	if (validator.validateMember(member) == true && 
       validator.validatePostcodeDigits(postcode) == true && 
       validator.validateDigits(membership_number) == true && 
       validator.validateModulus(member) == true &&
	   validator.validateBirth(birth,join) == true && 
       validator.validateTwoDates(birth,join) == true &&
	   validator.validatePostcodeDigits(postcode) == true && 
       validator.validateFirstName(firstname) == true &&
       validator.validateLastName(lastname) == true && 
       validator.validateAddress(address) == true &&
       validator.validateType(type) == true &&
       validator.validateSubscription(subscription) == true) {
	   console.log('Save')
       jfm.saveMember(member);
       $('#success').show();
	}

    else{
      	// $('#error0').show();
      	console.log('error')
		}
	})
});





