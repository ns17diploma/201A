const DataManager = require('./DataManager')
const ErrorManager = require('./ErrorManager.js')
class ValidateManager {
  constructor(allID) {
    this.allID = allID
    this.dm = new DataManager(allID)
    this.em = new ErrorManager(allID)
  }
  // When an object was created from class ValidateManager, save the passed allId as allID
  emptyValidate() {
    for (let i in this.allID) {
      if ($('#' + this.allID[i]).hasClass('necessary')) {
        if ($('#' + this.allID[i]).val() === "") {
          this.em.showError(this.allID[i], this.allID[i] + " cannot empty!")
        } else {
          this.em.removeError(this.allID[i])
        }
      }
    }
  } 
  // Loop only the element that has class necessary and check element with that id name's value
  // If empty is true, call EM.showError() and pass that id name and message
  // Else call EM.removeError and pass that id name
  lengthValidate(id, limit) {
    if (id === "" || id.length !== limit || isNaN(id)) {
      this.em.showError(this.allID[0], this.allID[0] + " must be " + limit + " digits!")
    } else {
      this.em.removeError(this.allID[0])
    } 
  }
  // Check the passed id length is same with the passed limit
  // If the length is not same with limit or the passed id is empty, call EM.showError()
  // Else call EM.removeError and pass that id name
  numericValidate(id) {
    let numeric = /\D+/g
    if (numeric.exec(id) !== null || id === "" ) {
      this.em.showError(this.allID[0], this.allID[0] + " must be numeric!")
    } else  {
      this.em.removeError(this.allID[0])
    }
  }
  // Check whether the passed id is numeric
  // If the passed id is numeric, call EM.removeError() and passed both id name and message
  // Else call Em.showError() and pass that id name
  modulusValidate(id) {
    let total = 0
    for (let i = 0; i < id.length; i++) {
      let mul = id.length - i
      total += Number(id[i] * mul)
    }
    if ((total % 11) !== 0 || id === "") {
      this.em.showError(this.allID[0], this.allID[0] + " must be number of modulus 11!")
    } else if ((total % 11) === 0) {
      this.em.removeError(this.allID[0])
    }      
  }
  // Loop and multiply each value of the passed id and save all result as total
  // If the total is number of modulus 11, call EM.removeError() and pass that id name
  // Else call EM.showError() and pass both that id name and message
  dateValidate(date1, date2, id, message) {
    let first = date1 ? date1 : "00000"
    let second = date2 ? date2 : "00000"
    first = first.substr(0,4) 
    second = second.substr(0,4)
    if (Number(first) < Number(second)) {
      this.em.removeError(id)
    } else {
      this.em.showError(id, message)
    }
  }
  // Check whether the passed date1 and date2. If date1 and date2 is undefined, assign 00000 into them
  // Else assign the value of date1 into first, and date2 into second, then take only the first 4 digits
  // If integer of first is lower than integer second call EM.removeError() and pass the passed id
  // Else call EM.showError() and pass the passed id and passed message

  alphaValidate(id_name, id_value) {
    let alpha_check = /\d/
    if (alpha_check.exec(id_value) !== null || id_value === "") {
      this.em.showError(id_name, id_name + " cannot be numeric!")
    } else {
      this.em.removeError(id_name)
    }
  }
  // Check the passed id_value has any number digits. If so, call EM.showError()
  // Then pass the passed id_name and message. Else, call EM.removeError() and pass the passed id_name
}  
module.exports = ValidateManager // Export class ValidateManager