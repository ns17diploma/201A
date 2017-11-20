var jsf = require('jsonfile');
var filename = 'jsfile.json';
var $ = require('jquery');

$(function(){ 
	$('#error0').hide();
	$('#error01').hide();
	$('#error02').hide();
	var $result = true

	//save button
	$('#save').click(function(){
		verifyError()
		validate()
	 	if ($result === false || $('body *').hasClass('error')) {
			console.log('ERROR')	
		}
		else {
			submitform();
			console.log("YES")
		} 
	})
 
	function verifyError() {
		//input error
		$('.input').each(function(){
			$this = $(this)
			if ($this.val() === "") {
				$this.addClass('error')
				error_label('#message-box', $('#error0').show())
				$result = false
			} else {
				$result = true				
			}
			return $result
		})
	}

	$('#number1').on('keyup',function(){
		let mn = $('#number1').val();
		let ms = mn.toString();
		if (ms.length > 6) {
			var c = ms.substr((Number(ms.length)-6), 6);
			$('#number1').val(c);
		} 
		else if (ms.length !== 6) {
			error_label('#number1', $('#error02').show());
		}
		else if (ms.length === 6) {
			no_error('#number1', $('#error02').hide());
		}
	})

	function validate() {
		let number = 0;
		let mn = $('#number1').val();
		let ms = mn.toString();
		for(var i = 0; i< ms.length; i++){
		    let x = 6 - i;
		    number += Number(ms[i]) * x;
		}
		if ((number % 11) !== 0 || ms.length !== 6) {
		    error_label('#number1', $('#error01').show())
		    $result = false
		}
		
		else if ((number % 11) === 0 && ms.length === 6) {
			$('#error02').hide()
		  	no_error('#number1', $('#error01').hide())	
		  	$result = true
		}
		return $result
	}

	function submitform(){

		var obj = {
				Membership_Number: $('#number1').val(),
				Sex: $('#sex').val(),
				First_Name: $('#first').val(),
				Last_Name: $('#last').val(),
				Address: [$('#address1').val(),$('#address2').val(),$('#address3').val()],
				Postcode: $('#post').val(),
				Date_of_birth: $('#date1').val(),
				Join_Date:  $('#date2').val(),
				Type_of_Membership: $('#sex2').val(),
				Subscription_Due_Month: $('#due').val()
		}

		var arr = jsf.readFileSync(filename);
		arr.push(obj);
		jsf.writeFileSync(filename,arr,{spaces: 1, EOL:'\r\n'});
	}	
});

/**************************/

//error
function error_label(input_id, message)
{

  let themessage = "";
 	$(input_id).after(themessage);
  	$(input_id).closest('.field').addClass('error')
}

//no error
function no_error(input_id, message)
{

  let themessage = "";
 	$(input_id).after(themessage);
  	$(input_id).closest('.field').removeClass('error')
}