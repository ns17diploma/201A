let jsf = require('jsonfile');
    let file = 'jsfile.json';
    var $ = require('jquery');
    score = 0;
    var Validator = require('./manager/Validator.js')
    var valid = new Validator;
    const Member = require('./manager/Member.js')
    const jsonfilemanager = require('./manager/jsonfilemanager')

    $(function(){
    	const jfm = new jsonfilemanager()
    	const validator = new Validator()
    	const member = new Member()

    //cancel
     $('.cancel').on('click',function(){
      location.reload();
    })

    //F button
    $('.inputcheck').hide();
    $('.save').on('click',function(){
    	

      if($('.field').hasClass('error') || $('.common').val() === ""){
        $('.inputcheck').show();
      }else{
        $('.inputcheck').hide();
      
  	
        var obj = new Member(
          $('.input_membershipnumber').val(),
          $('.input_sexual').val(),
          $('.input_firstname').val(),
          $('.input_lastname').val(),
          $('.input_date').val(),
          $('.input_joindate').val(),
          $('.input_address').val(),
          $('.input_type').val(),
          $('.input_subscription').val(),
          $('.input_postcode').val()
        )
        jfm.saveMember(obj);
      	// Get the modal
      	var modal = document.getElementById('myModal');

      	// Get the button that opens the modal
      	var btn = document.getElementById("myBtn");

      	// Get the <span> element that closes the modal
      	var span = document.getElementsByClassName("close")[0];

      	// When the user clicks on the button, open the modal 
      	modal.style.display = "block";
      	

      	// When the user clicks on <span> (x), close the modal
      	span.onclick = function() {
      	    modal.style.display = "none";
      	}

      	// When the user clicks anywhere outside of the modal, close it
      	window.onclick = function(event) {
      	    if (event.target == modal) {
      	        modal.style.display = "none";
      	    }
      	}
		
        }});
      
  
  })

module.exports = hide