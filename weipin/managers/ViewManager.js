class ViewManager {

  constructor(){
    this.clear();
  }

  clear() {
    $('a').remove();
    result = 0;
  }

  addTrue() {
    result++;
    return result;
  }

  errorMessage( inputID, message ) {
    $(inputID).siblings().remove('a');
    let messageHTML = '<a class="errorLabel">' + message + '</a>';
    $(inputID).after(messageHTML);
    $(inputID).closest('.field').addClass('error');
  }

}

module.exports = ViewManager;