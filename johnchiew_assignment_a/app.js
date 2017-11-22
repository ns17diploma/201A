var jsonfile = require('jsonfile');
var $ = require('jquery');
var chunk = require('chunk');
var fs = require('fs');
var file = 'data.json';
var data = {};
	
// create data.json
	if (!fs.existsSync(file)) {
		jsonfile.writeFileSync(file, '[]')
	}


// Submit Function
	function sumbitform(){


		data.membershipNumber = $('#membership-number').val();
		data.gender = $('#gender').val();
		data.firstName = $('#first-name').val();
		data.lastName = $('#last-name').val();
		data.dateBirth = $('#date-birth').val();
		data.joinDate = $('#join-date').val();
		data.address = $('#address').val();
		data.postcode = $('#postcode').val();
		data.typeOfMembership = $('#typeMember').val();
		data.subscriptionDueMonth = $('#due').val();
		
		var containerData = jsonfile.readFileSync(file);
		containerData.push(data);
		jsonfile.writeFile('data.json', containerData, {EOL:'\r\n', spaces:2}, function(err){
			console.error(err)
		});
}

// Table

$(function(){

	var containerData = jsonfile.readFileSync(file);

	if (containerData.length > 0) {
		let members = chunk(containerData, 10);
	
		make_table(members[0]);

		if (members.length > 1) {
			pagination(members.length);
		}
	}
})

function make_table(containerData){

	$('#displayTable tbody').html('');
	for (var i in containerData){
	
		info =	'<tr><td>'+containerData[i].membershipNumber + '</td>'+
				'<td>'+containerData[i].gender+'</td>'+
				'<td>'+containerData[i].firstName+'</td>'+
				'<td>'+containerData[i].lastName+'</td>'+
				'<td>'+containerData[i].dateBirth+'</td>'+
				'<td>'+containerData[i].joinDate+'</td>'+
				'<td>'+containerData[i].address+'</td>'+
				'<td>'+containerData[i].postcode+'</td>'+
				'<td>'+containerData[i].typeOfMembership+'</td>'+
				'<td>'+containerData[i].subscriptionDueMonth+'</td></tr>'
	
		$('#displayTable tbody').append(info);
	
	}
}


function pagination(pages) {
	let containerData = jsonfile.readFileSync(file)
	let members = chunk(containerData, 10)
	$('#members-pagination').html('');

	for(var i = 0; i < pages; i++){
		let item_html = `<span class="item" data-pages="${i}">${i+1}</span>`;
		$('#members-pagination').append(item_html);
	}

	$('#members-pagination span.item').click(function(){
		$this = $(this)
		make_table(members[$this.data('pages')]);
	});

}

// Validation
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


var result = false;
function notifyError(element) {
	var membershipNumber = $('#membership-number').val();
	var error01 = $('#firstError');

	var gender = $('#gender').val();
	var error02 = $('#secondError');
	
	var firstName = $('#first-name').val();
	var error03 = $('#thirdError');
	
	var lastName = $('#last-name').val();
	var error04 = $('#fourthError');
	
	var dateBirth = $('#date-birth').val();
	var error05 = $('#fifthError');

	var joinDate = $('#join-date').val();
	var error06 = $('#sixthError');

	var address = $('#address').val();
	var error07 = $('#seventhError');

	var postcode = $('#postcode').val();
	var error08 = $('#eighthError');

	var typeOfMembership = $('#typeMember').val();
	var error09 = $('#ninthError');

	var subscriptionDueMonth = $('#due').val();
	var error10 = $('#tenthError');
	
	function checkMember() {
		var totalmn = 0;
		var digit = membershipNumber.toString();
			//must be six number 
		if (digit.length === 6) {
			for(var i = 0; i < digit.length; i++){
				var x = digit.length - i;
				totalmn += Number(digit[i]) * x;
				//console.log(totalmn)
			}
			//modulus 11
			if ((totalmn % 11) !== 0) {
				error01.addClass('error');
				$('#membership-number').val("");
				$('.error01').show();
				result = false;
				return result;
			} else {
				$('.error01').hide();
				error01.removeClass('error');
				result = true;
			}

		} else {
			error01.addClass('error');
			$('#membership-number').val("");
			$('.error01').show();
		}

	}

	function checkGender() {
		if (gender === "" ) {
			error02.addClass('error');
			$('#gender').val("");
			$('.error02').show();
			result = false;
			return result;
		} else {
			$('.error02').hide();
			error02.removeClass('error');
			
		}
	}

	function checkFirstName() {
		if (firstName === "") {
			error03.addClass('error');
			$('#first-name').val("");
			$('.error03').show();
			result = false;
			return result;
		} else {
			$('.error03').hide();
			error03.removeClass('error');
			
		}
	}

	function checkLastName() {
		if (lastName === "") {
			error04.addClass('error');
			$('#last-name').val("");
			$('.error04').show();
			result = false;
			return result;
		} else {
			$('.error04').hide();
			error04.removeClass('error');
			
		}
	}

	function checkDateBirth() {
		if (dateBirth === "") {
			error05.addClass('error');
			$('#date-birth').val("");
			$('.error05').show();
			result = false;
			return result;
		} else {
			$('.error05').hide();
			error05.removeClass('error');
			
		}
	}

	function checkJoinDate() {
		if (joinDate === "") {
			error06.addClass('error');
			$('#join-date').val("");
			$('.error06').show();
			result = false;
			return result;
		} else {
			$('.error06').hide();
			error06.removeClass('error');
			
		}
	}

	function checkAddress() {
		if (address === "") {
			error07.addClass('error');
			$('#address').val("");
			$('.error07').show();
			result = false;
			return result;
		} else {
			$('.error07').hide();
			error07.removeClass('error');
			
		}
	}

	function checkPostcode() {
		if (postcode === "") {
			error08.addClass('error');
			$('#postcode').val("");
			$('.error08').show();
			result = false;
			return result;
		} else {
			$('.error08').hide();
			error08.removeClass('error');
			
		}
	}

	function checkTypeOfMembership() {
		if (typeOfMembership === "" ) {
			error09.addClass('error');
			$('#typeMember').val("");
			$('.error09').show();
			result = false;
			return result;
		} else {
			$('.error09').hide();
			error09.removeClass('error');
			
		}
	}

	function checkSubscriptionDueMonth() {
		if (subscriptionDueMonth === "" ) {
			error10.addClass('error');
			$('#due').val("");
			$('.error10').show();
			result = false;
			return result;
		} else {
			$('.error10').hide();
			error10.removeClass('error');
		 	
		}
	}

	checkMember();
	checkGender();
	checkFirstName();
	checkLastName();
	checkDateBirth();
	checkJoinDate();
	checkAddress();
	checkPostcode();
	checkTypeOfMembership();
	checkSubscriptionDueMonth();
}

// Save function for run save or show error
function saveRecord() {	
	notifyError();
	if (result === false) {
		console.error('ERROR')
	} else {
		console.log('YEAH')
		sumbitform();
	}
}
