var fs = require('fs');
var $ = require('jquery');

const JsonFileManager = require ('./managers/JsonFileManager');
const Validator = require ('./managers/Validator');
const Member = require ('./managers/Member');
const ViewManager = require ('./managers/ViewManager');
let allError = []

const jfm = new JsonFileManager()

$(function(){

	$('#error01').hide();

	$('.error-message').each(function(){
		$this= $(this)
		allError.push($this.attr('id'))
	})

	let vm = new ViewManager()
	const validator = new Validator()


	$('#input-membership').on('keyup',function(){
		
		//THIS IS TO LET MEMBERSHIP NUMBER NOT LESS THAN 6 DIGITS
		vm.clear();

		var x=this.value;
		var y=x.toString();
		if (y.length>5){
			var z=y.substr((Number(y.length)-6),6);
			$('#input-membership').val(z);
		}

    	if (y.length < 6) {
    		vm.errorMessage("#input-membership", "Membership Number was not 6 digits");
        	return false;
    	}
    	else { 
        vm.removeError("#input-membership"); 
        //$('#error04').hide();
        return true;
      }
	})


  	$('#button').click(function(){

  		vm.clear();
  		
  		var member = new Member(
  			$('#input-membership').val(),
  			$('#input-name').val(),
  			$('#input-last').val(),
  			$('#address1').val(),
  			$('#Postcode').val(),
  			$('#sex').val(),
  			$('#dob').val(),
  			$('#jd').val(),
  			$('#input-membership-type').val(),
  			$('#day').val()
  		)

  		// console.log(validator.checkValidate(member))
		// console.log(validator.check(member))
		console.log(validator.firstname(member))
		console.log(validator.lastname(member))
		console.log(validator.joinDate(member))
		console.log(validator.birth(member))
		console.log(validator.postcode(member)) 
		console.log(validator.address(member))
		console.log(validator.membership(member))
		console.log(validator.day(member))
		console.log(validator.sex(member))
		console.log(validator.compare(member))

    	if (validator.checkValidate(member) === true && 
    		validator.firstname(member) === true && validator.lastname(member) === true && 
			validator.birth(member) === true && validator.joinDate(member) === true && 
			validator.postcode(member)  === true && validator.address(member) === true && 
			validator.membership(member) === true && validator.day(member) === true && 
			validator.sex(member) === true && validator.compare(member) === true ) {

    		$('#error00').show();

    		$('#error01').hide();
	  	    jfm.saveMember(member);
	    	console.log('success')

    	}

    	else {
    		$('#error01').show();
    		$('#error00').hide();
    	    console.log('error')
   		}
	})
  	
})
