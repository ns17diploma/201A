var fs = require('fs');
var jsf = require('jsonfile');
var filename = ('jsfile.json');
var $ = require('jquery');
var jQuery = $;
var chunk = require('chunk');

$(function(){
	if (!fs.existsSync(filename)) {
		jsf.writeFileSync(filename, [])
	}
	$('#error0').hide();
	$('#error01').hide();
	$('#error02').hide();
	$('#error03').hide();
	
	var $result = true
  	$('#button').click(function(){
  		checkValidate()
		check()
    	if ($result === true) {
    	checkform();
    	}
    	else {
    		$result = false
   		}
  	})

	$('#input-membership').on('keyup',function(){
		
		var x=this.value;
		var y=x.toString();
		if (y.length>5){
			var z=y.substr((Number(y.length)-6),6);
			$('#input-membership').val(z);
		}

    	if (y.length < 6) {
    		error_label('#input-membership',$('#error03').show())	
        	return false;
    	}
		else{
			reroo_label('#input-membership',$('#error03').hide())
			$return = true
		}
	})

	function checkform(){
		var obj = {
			Membership_Number:$('#input-membership').val(),
			First_name:$('#input-name').val(),
			Last_name:$('#input-last').val(),
			Address:[$('#address1').val(),$('#address2').val(),$('#address3').val()],
			Postcode:$('#Postcode').val(),
			Sex:$('#sex').val(),
			Date_of_birth:$('#dob').val(),
			Join_Date:$('#jd').val(),
			Type_of_membership:$('#input-membership-type').val(),
			Subscription_Due_Month:$('#day').val()
		} 
		if (!fs.existsSync(filename)) {
    		jsf.writeFileSync(filename, [])
 		}
		var arr=jsf.readFileSync(filename);
		console.log(arr)
		arr.push(obj);
		jsf.writeFileSync(filename,arr, {spaces:2});
	};

	function check(){
		$('input').each(function(){
			let input = $(this)
			if (input.val() === ""){
				error_label('#message-box',$('#error03').show())
				$result=false
			}
			else{
				reroo_label('#message-box',$('#error03').hide())
				$result=true
			}
			return $result
		}) 
	}
  	
})
	function checkValidate()
	{  
	  	// modulus 11
	  	let x = $('#input-membership').val();		
	  	let y = x.toString();
	  	let z = 0;
	  	
	  	// if (y.length !== 6) {
	  	// 	$result = false
	  	// 	return false;
	  	// }
		// else{
	  		for(var i = 0; i< y.length; i++){
	    		let l = 6 - i;
	    		z += Number(y[i]) * l;	
			}
	  		if ((z % 11) !== 0) {
	    		error_label('#input-membership',$('#error01').show())
	    		$result = false
	 		}
	 		else if ((z % 11) === 0 || y.length === 6){
	 			$('#input-membership').parent().removeClass('error')
	 			reroo_label('#input-membership',$('#error01').hide())
	 			$result = true
	 		}
	 		else {
	 			reroo_label('#message-box',$('#error03').hide());
	 			// reroo_label('#input-membership',$('#error01').hide());
	 		}
	  		return $result
		// }
	}


/*****************************************/
function error_label(input_id, message)
{
  let html=""
  $(input_id).after(html);
  $(input_id).closest('.field').addClass('error')

}

function reroo_label(input_id, message)
{
  let html=""
  $(input_id).after(html);
  $(input_id).closest('.field').removeClass('error')
}