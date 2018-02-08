class ErrorManager {
  constructor(allID) {
    for (let i in allID) {
      this.removeError(allID[i])
    }
  } 
  // When an object was created from class ErrorManager, it will loop the passed allID
  // and call this.removeError() with each allID value
  showError(ID, message) {
    $('#' + ID).parent().next().append(message + "<br>")
    $('#' + ID).parent().addClass('error field')
  }
  // When called, it will find the passed ID element and append message to the next of that element
  removeError(ID) {
    $('#' + ID).parent().next().html("")
    $('#' + ID).parent().removeClass("error field")
  }
  // When called, it will find the parent and next of the passed ID element and write empty to it
}

module.exports = ErrorManager // Export class ErrorManager