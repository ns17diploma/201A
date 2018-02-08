class ViewManager {
  
  constructor() {
    this.remove
  }
  
  errorMessage(ID, message){
    $(ID).siblings('.error-message').remove();
    $('br').remove();
    let err = '<div class="ui pointing basic red label error-message">' + message +'</div>';
    $(ID).after(err);
    $(ID).closest('.field').addClass('error')  
  }

  removeMessage(ID) {
    $(ID).siblings().remove('.error-message');
    $(ID).closest('.field').removeClass('error');
  }

}
module.exports = ViewManager