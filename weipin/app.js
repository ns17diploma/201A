let jsf = require('jsonfile');
let fs = require('fs');
let $ = require('jquery');

function error() {

	$('.error').hide();

	if (!fs.existsSync('jsfile.json')) {	
		jsf.writeFileSync('jsfile.json', []);
	}
	
}


function saveRecord(){
	var obj = {
		Membership_Number: $('#membershipNumber').val(),
		Join_Date: $('#joinDate').val(),
		First_Name: $('#firstName').val(),
		Last_Name: $('#lastName').val(),
		Birth: $('#birth').val(),
		Sex: $('#gender').val(),
		Address: $('#address').val(),
		Postcode: $('#postcode').val(),
		Type_of_Membership: $('#typeOfMembership').val(),
		Subscription_Due_Month: $('#due').val(),
	}

	function addMember(){

		var arr = jsf.readFileSync('jsfile.json');
		arr.push(obj);
		jsf.writeFileSync('jsfile.json', arr, function (err){
			console.error(err)
		})

	}
	addMember()
}

var result = false;

function detectError(){

	var mn = $('#membershipNumber').val();
	var mns = mn.toString();
	var fn = $('#firstName').val();
	var ln = $('#lastName').val();
	var address = $('#address').val();
	var postcode = $('#postcode').val();
	var birth = $('#birth').val();
	var joinDate = $('#joinDate').val();
	var gender = $('#gender').val();
	var due = $('#due').val();
	var type = $('#typeOfMembership').val();

	//membership-number
	function detectmn() {

		mnTotal = 0;
		for (var i = 0 ; i < mns.length ; i++) {
			let x = 6 - i;
			mnTotal += Number(mns[i]) * x;
		}
	
		if ( mn == "" || !/\d{6}/.test(mn) || mns.length !== 6 || (mnTotal % 11) !== 0) {
			$('.mnError00').show();
			result = false;
		} else {
			$('.mnError00').hide();
			result = true;
		}
		return result;
	}

	//first-name
	function detectfn() {
		if ( fn == "") {
			$('.fnError00').show();
			result = false;
		}
		
		else {
			$('.fnError00').hide();
			result = true;
		}
		return result;
	}

	//last-name
	function detectln() {
		if ( ln == "" ) {
			$('.lnError00').show();
			result = false;
		}

		else {
			$('.lnError00').hide();
			result = true;
		}
		return result;
	}

	//address
	function detectAddress() {
		if ( address == "" ) {
			$('.addressError00').show();
			result = false;
		}
	
		else {
			$('.addressError00').hide();
			result = true;
		}
		return result;
	}

	//postcode
	function detectPostcode() {
		if ( postcode == "" || !/\d{5}/.test(postcode) || postcode.length !== 5) {
			$('.postcodeError00').show();
			result = false;
		} else {
			$('.postcodeError00').hide();
			result = true
		}
		return result;
	}


	//gender
	function detectGender() {
		if ( gender == "" ) {
			$('.genderError00').show();
			result = false;
		}
		else {
			$('.genderError00').hide();
			result = true;
		}
		return result;
	}


	//due
	function detectDue() {
		if ( due == "" ) {
			$('.dueError00').show();
			result = false;
		}
		else {
			$('.dueError00').hide();
			result = true;
		}
		return result;
	}


	//type_of_membership
	function detectType() {
		if ( type == "" ) {
			$('.typeError00').show();
			result = false;
		}
		else {
			$('.typeError00').hide();
			result = true;
		}
		return result;
	}


	//date_of_birth
	function detectBirth(){
		if ( birth == "" || birth.length !== 10 ) {
			$('.birthError00').show();
			result = false;
		}
		else {
			$('.birthError00').hide();
			result = true;
		}
		return result;
	}


	//join_date
	function detectJoin() {
		if ( joinDate === "" || joinDate.length !== 10 ) {
			$('.joinError00').show();
			result = false;
		}
		else {
			$('.joinError00').hide();
			result = true;
		}
		return result;
	}


	//two_date
	function twoDate() {
		var checkBirth = birth.substr(0,4)
		var checkJoin = joinDate.substr(0,4)
		if ( Number(checkBirth) > Number(checkJoin)) {
			$('.birthError00').show();
			result = false;
		}
		else {
			$('.birthError00').hide();
			result = true;
		}
		return result;
	}

	if (birth == "" || joinDate == "") {
		result = false
	} else {
		twoDate()
	}

	detectmn();
	detectfn();
	detectln();
	detectAddress();
	detectPostcode();
	detectGender();
	detectType();
	detectDue();
	detectBirth();
	detectJoin();

}

$('#submitButton').on('click', function(){
	detectError();
	
	if ( result == false ) {
		alert('Please complete form');
	}
	else {
		saveRecord();
		$('.error').hide();
	}

})



