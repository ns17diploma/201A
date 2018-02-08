class DataManager {
  constructor(allID) {
    this.allID = allID
  }
// When a new object was create from class DataManager, save the passed value as allID
  transformObj() {
    let obj = {}
    for (let i in this.allID) {
      obj[this.allID[i]] = $('#' + this.allID[i]).val() 
    }
    return obj
  }
  // Loop all value of this allID and append it into an object, then return that object
}
module.exports = DataManager // Export class DataManager
