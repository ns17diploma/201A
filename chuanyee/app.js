
var jsf = require ('jsonfile');
var filename ='jsonfile.json'
var $ = require('jquery');


$(function(){
 
	

	function write(){
	var obj = {
		Membership_Number: $('#membership_number').val(),  
		First_Name: $('#first_name').val(),
		Last_Name: $('#last_name').val(),
		Address: $('#ad_dress').val(),
		Postcode: $('#post_code').val(),
		Sex: $('#gender').val(),
		Date_Of_Birth: $('#date_birth').val(),
		Join_Date: $('#join_date').val(),
		Type_Of_Membership:$('#type_member').val(),
		Subscription: $('#due_month').val()
	}
	
	
	// jsf.writeFile('jsonfile.json', obj ,function(err){
	// 	console.log(err)
	// });

		var arr = jsf.readFileSync(filename);
		arr.push(obj);
		jsf.writeFileSync(filename,arr,{spaces:1});
	}


//* Validation of Membership Number 

 /*q $(document).ready(function(){
	$('#membership_number').on('keyup',function(){
		var a = this.value;
		var b = a.toString();
		if(b.length > 5){
			var c = b.substr((Number(b.length)-6),6);
			$('#membership_number').val(c);
		}
	})
})




/***************************************/

$('.error01').hide();
$('.error02').hide();
$('.error03').hide();
$('.error04').hide();
$('.error05').hide();
$('.error06').hide();
$('.error07').hide();
$('.error08').hide();
$('.error09').hide();
$('.error10').hide();
$('.error11').hide();
$('.error12').hide();

var result = true;

function notifyError(){
	var membership_number = $('#membership_number').val();
	var memNum = membership_number.toString(); // Change the membership_number to string
	var error01 = $('#first_error');
	var error11 = $('#first_error');
	var error12 = $('#first_error');

	var firstName = $('#first_name').val();
	var error02 = $('#second_error');

	var lastName = $('#last_name').val();
	var error03 = $('#third_error');

	var address = $('#ad_dress').val();
	var error04 = $('#fourth_error');

	var postcode = $('#post_code').val();
	var error05 = $('#fifth_error');

	var gender = $('#sexual').val();
	var error06 = $('#sixth_error');

	var date = $('#date_birth').val();
	var error07 = $('#seventh_error');

	var joindate = $('#join_date').val();
	var error08 = $('#eighth_error');

	var type = $('#typeof').val();
	var error09 = $('#ninth_error');

	var month = $('#due_month').val();
	var error10 = $('#tenth_error');


/****************************************************************/

	function checkNumber(){

		mnTotal = 0;
		for(var i =0; i< memNum.length; i++){
			let x = 6 - i;
			mnTotal += Number(memNum[i])*x;
		}

		if(memNum.length != 6){ //Only String can check length
			error01.addClass('error');
			error11.addClass('error');
			error12.addClass('error');
			$('.error01').show();
			$('.error11').show();
			$('.error12').show();
			result = false;	
		}

		else if ((mnTotal % 11) != 0) {
			error01.addClass('error');
			error11.addClass('error');
			error12.addClass('error');
			$('.error01').show();
			$('.error11').show();
			$('.error12').show();
			result = false;
		}

		else if(!/^\d{6}$/.test(membership_number)){
			error01.addClass('error');
			error11.addClass('error');
			error12.addClass('error');
			$('.error01').show();
			$('.error11').show();
			$('.error12').show();
			result = false;
		}

		 else{
			$('.error01').hide();
			$('.error11').hide();
			$('.error12').hide();
			error01.removeClass('error');
			error11.removeClass('error');
			error12.removeClass('error');
		}
			return result;
	}



	function checkFirstName(){
		if(firstName === ""){
			error02.addClass('error');
			$('.error02').show();
		} else{
			$('.error02').hide();
			error02.removeClass('error');
		}
	}


	function checkLastName(){
		if(lastName === ""){
			error03.addClass('error');
			$('.error03').show();
		} else{
			$('.error03').hide();
			error03.removeClass('error');
			
		}
	}

	function checkAddress(){
		if(address === ""){
			error04.addClass('error');
			$('.error04').show();
		} else{
			$('.error04').hide();
			error04.removeClass('error');
		}
	}

	function checkPostcode(){
		if(postcode === ""){
			error05.addClass('error');
			$('.error05').show();
		} else{
			$('.error05').hide();
			error05.removeClass('error');
		}
	}

	// function checkGender(){
	// 	if(gender === ""){
	// 		error06.addClass('error');
	// 		$('.error06').show();
	// 	} else{
	// 		$('.error06').hide();
	// 		error06.removeClass('error');
	// 	}
	// }

	function checkBirth(){
		if(date === ""){
			error07.addClass('error');
			$('.error07').show();
		} else{
			$('.error07').hide();
			error07.removeClass('error');
		}
	}

	function checkJoinDate(){
		if(joindate === ""){
			error08.addClass('error');
			$('.error08').show();
		} else{
			$('.error08').hide();
			error08.removeClass('error')
		}
	}

	function checkType(){
		if(type === ""){
			error09.addClass('error');
			$('.error09').show();
		} else{
			$('.error09').hide();
			error09.removeClass('error')
		}
	}

	// function checkMonth(){
	// 	if(month === ""){
	// 		error10.addClass('error');
	// 		$('.error10').show();
	// 	} else{
	// 		$('.error10').hide();
	// 		error10.removeClass('error')
	// 	}
	// }

	


	checkNumber();
	checkFirstName();
	checkLastName();
	checkAddress();
	checkPostcode();
	// checkGender();
	checkBirth();
	checkJoinDate();
	checkType();
		// checkMonth();

}

$('#save').click(function(){
	notifyError();
	if (result === true) {
		write();
	} else {
		console.error('Error');
	}
	
})

});
