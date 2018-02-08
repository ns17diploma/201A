class JsonFileManager {
  
  constructor() {
    this.file = 'data.json'
    if (!fs.existsSync(this.file)) {
      jsonfile.writeFileSync(this.file,[])
    }
  }

  saveMember() {
   this.obj = {
    membershipNumber: $('#membership-number').val(),
    gender: $('#gender').val(),
    firstName: $('#first-name').val(),
    lastName: $('#last-name').val(),
    dateBirth: $('#date-birth').val(),
    joinDate: $('#join-date').val(),
    address: $('#address').val(),
    postcode: $('#postcode').val(),
    typeOfMembership: $('#typeMember').val(),
    subscriptionDueMonth: $('#due').val()
   }
  }

  addMember() {
    containerData.push(this.obj);
    jsonfile.writeFileSync(file, containerData, {spaces: 2, EOL: '\r\n'})
  }
}

module.exports = JsonFileManager