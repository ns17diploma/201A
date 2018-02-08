class JsonFileManager {

  constructor(){
    this.file = 'jsfile.json'
    this.createJsonFile();
  }

  createJsonFile(){
    if (!fs.existsSync(this.file)) {
        jsf.writeFileSync(this.file, []);
    }
  }

  // saveRecord(){
  //   this.obj = {
  //     Membership_Number: $('#membershipNumber').val(),
  //     Join_Date: $('#joinDate').val(),
  //     First_Name: $('#firstName').val(),
  //     Last_Name: $('#lastName').val(),
  //     Birth: $('#birth').val(),
  //     Sex: $('#gender').val(),
  //     Address: $('#address').val(),
  //     Postcode: $('#postcode').val(),
  //     Type_of_Membership: $('#typeOfMembership').val(),
  //     Subscription_Due_Month: $('#due').val(),
  //   }
  // }

    saveRecord( record ){
      var arr = jsf.readFileSync(this.file);
      arr.push( record );
      jsf.writeFileSync(this.file, arr)
    }
}

module.exports = JsonFileManager;