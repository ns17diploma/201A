var $ = require('jquery')
var jsf = require('jsonfile')
var fs = require('fs')
var file = './all-Member/data.json'

$(function(){
	var result = false;
	$('.pointing').hide()

	$('#submit').click(function(){
		checkEmpty()
		if ($('body *').hasClass('error') || result === false) {
			alert("Please fulfil your form correctly!")
			return false
		} else {			
			alert("Submit Successful!")
			addMember()
			clearAll()
		}
	})

	$('#first-name').mouseleave(function(){
		if ($(this).val() === "") {
			$(this).parent().addClass('error')
			$('#first-name-error').show()
		} else {
			$(this).parent().removeClass('error')
			$('#first-name-error').hide()
		}
	})

	$('#last-name').mouseleave(function(){
		if ($(this).val() === "") {
			$(this).parent().addClass('error')
			$('#last-name-error').show()
		} else {
			$(this).parent().removeClass('error')
			$('#last-name-error').hide()
		}
	})

	$('#membership-number').mouseleave(function(){
		let memNum = $('#membership-number').val()
		var sum = 0

		for (var i = 0; i < memNum.length; i++) {
			let mul = 6 - i
			return sum += (Number(memNum[i]) * mul)
		}
		
		if ((memNum.toString()).length !== 6) {
			$('#membership-number').parent().addClass('error')
			$('#membership-digits-error').show()
		} 
		if ((sum % 11) !== 0) {
			$('#membership-number').parent().addClass('error')
			$('#membership-number-error').show()	
		}
		if ((memNum.toString()).length === 6 && (sum % 11) === 0) {
			$(this).parent().removeClass('error')
			$('#membership-number-error').hide();
			$('#membership-digits-error').hide();
		}
	})

	$('#member-type').mouseleave(function(){
		if ($('#member-type').val() === "") {
			$(this).parent().addClass('error');
			$('#type-membership-error').show();
		} else {
			$(this).parent().removeClass('error')
			$('#type-membership-error').hide();
		}		
	})

	$('#birth').mouseleave(function(){
		let birthYear = ($('#birth').val()).slice(0,4);
		if (Number(birthYear) > 2017 || $(this).val() === "") {
			$(this).parent().addClass('error');
			$('#birth-error').show();
		} else {
			$(this).parent().removeClass('error')
			$('#birth-error').hide();
		}
	})

	$('#gender').mouseleave(function(){
		if ($('#gender').val() === "") {
			$('#gender').parent().addClass('error');
			$('#gender-error').show();	
		} else {
			$(this).parent().removeClass('error')
			$(this).parent().css({'border-color':'lightgreen'})
			$('#gender-error').hide();	
		}
	})

	$('#subscription-month').mouseleave(function(){
		if ($('#subscription-month').val() === "") {
			$('#subscription-month').parent().addClass('error');	
			$('#subscription-month-error').show();
		} else {
			$(this).parent().removeClass('error');
			$('#subscription-month-error').hide();
		}
	})

	$('#join-date').mouseleave(function(){
		if ($('#join-date').val() === "") {
			$(this).parent().addClass('error');
			$('#join-date-error').show();
		} else {
			$(this).parent().removeClass('error')
			$('#join-date-error').hide();
		}
	})

	$('#address').mouseleave(function(){
		if ($('#address').val() === "") {
			$(this).parent().addClass('error');
			$('#address-error').show();
		} else {
			$(this).parent().removeClass('error')
			$('#address-error').hide();
		}
	})

	$('#postcode').mouseleave(function(){
		if ($('#postcode').val() === "") {
			$(this).parent().addClass('error');
			$('#postcode-error').show();
		} else {
			$(this).parent().removeClass('error')
			$('#postcode-error').hide();
		}
	})

	function checkEmpty() {
		$('.takeValue').each(function(){
			$this = $(this)
			if ($this.val() === "") {
				return result = false
			} else {
				return result = true
			}
		})
	}

	function addMember() {
		if (!fs.existsSync(file)) {
   			jsf.writeFileSync(file, [])
  		}
  		let members = jsf.readFileSync(file);
  		let member = {};
  		$('.takeValue').each(function(){
  			let $this = $(this);
  			member[$this.attr('id')] = $this.val();
  		})
  		members.push(member);
  		jsf.writeFileSync(file, members, {spaces:2,EOL:'\r\n'});
	}

	function clearAll() {
		$('.takeValue').each(function(){
			$this = $(this)
			$this.val("") 
		})
	}

	// Clear Function 
	$('#clear').click(clearAll())
})