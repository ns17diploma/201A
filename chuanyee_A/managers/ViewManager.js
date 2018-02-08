class ViewManager {

  constructor(allError){
    this.allError = allError
    for (let i in allError) {
      $('#' + allError[i]).hide()
    }
  }

  clear(){
    $('.error-message').remove()
  }

  errorMessage( ID, errormessage ) {
    // $(ID).siblings().hide();
    let messageHTML = '<div class = "ui pointing basic red label error-message">'
    + errormessage + '<br>' + '</div>';
    // $(ID).after(messageHTML);
    $(ID).after(messageHTML);
    
    return false;
  }
  

  removeError( ID ) {
    $(ID).siblings("div").remove("div");
    $(ID).closest("div").removeClass('error-message');
    return true;
  }
}

module.exports = ViewManager;