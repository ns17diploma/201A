
class ViewManager {

	constructor (allError){
		this.allError = allError
		for (let x in allError){
			$('#'+allError[x].hide())
		}		
	}

	errorMessage(ID,errorMassage){
		let messageHTML = '<div class = "ui pointing basic red label error-message">'
		+ errorMassage + '<br>' + '</div>';
		$(ID).after(messageHTML);

		return false
	}

	clear(){
		$('.error-message').remove();
	}

	removeError(ID){
		$(ID).siblings("div").remove();
    	$(ID).closest("div").removeClass('error-message');

    	return true;
	}
}

module.exports = ViewManager;