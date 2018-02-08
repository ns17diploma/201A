class ViewManager {

  constructor(all_Error){
    this.all_Error = all_Error
    for (let i in all_Error) {
    $('#' + all_Error[i]).hide()
    }
  }

  clear() {
    $('.error-message').remove();
  }

  double(ID){
    $(ID).closest('div').addClass('error');
    return false
  }  
  removeDouble(ID){
    $(ID).closest('div').removeClass('error');
    return true
  }

  errorMessage( ID, message ) {
    let messageHTML = '<div class="ui pointing basic red label error-message">' + message + '</div>'
    $(ID).after(messageHTML);
    $(ID).closest('div').addClass('error');
    return false
  }
  
  removeError(ID) {
    $(ID).siblings("div").remove();
    $(ID).closest("div").removeClass('error');
    return true
  }
}

module.exports = ViewManager;