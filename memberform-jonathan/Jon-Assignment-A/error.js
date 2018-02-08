
/* Require Jquery */
const $ = require('jquery');

/* Create Class ViewError */
class ViewError{

	/* A Function With Two Arguements */
	ShowError(ID, Message){

		/* Create Error Div */
		let Create = '<div class="red error" >'+ Message +'</div>'
		$(ID).after(Create)
	}
	/* Function Clear Remove Div(Single) */
	Clear(ID){
		$(ID).siblings().remove('div')
	}

	/* Function cls Remove Div(All) */
	cls(){
		$('.red').remove()
	}

}
module.exports = ViewError