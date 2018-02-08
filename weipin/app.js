let jsf = require('jsonfile');
let fs = require('fs');
let $ = require('jquery');
let Validator = require('./managers/Validator.js');
let ViewManager = require('./managers/ViewManager.js');
let JsonFileManager = require('./managers/JsonFileManager.js');
let Member = require('./models/Member.js');

/*
*
LINE 17 CREATE AN OBJECT CALLED JsonFileManager.
LINE 18 CREATE AN OBJECT CALLED Validator.
LINE 20 RESULT IS A PART VALIDATE, IF A VALIDATION WILL PASS, THE 'RESULT' WILL PLUS ONE.
*
*/

var jsfm = new JsonFileManager();
var valid = new Validator();

var result = 0;


/*
*
***LINES 34-70 DO SAVE BUTTON
***LINE 35 IS CREATE AN OBJECT CALLED ViewManager
***LINES 33-44 CREATE AN OBJECT CALLED Member, AND LINES 34-43 IS 
   MEMBER_FORM'S INPUT, PASS INTO THE Member.
***LINES 49-59 IS PASS Member's OBJ FROM transferMemberObj.
***LINES 61-65 IF result EQUAL 11, WILL ALERT SUCCESS, SAVE RECORD AND RELOAD THE PAGE.
***LINES 66-68 IF result NOT EQUAL 11, WILL ALERT PLEASE COMPLETE FORM.
*
*/
$('#submitButton').on('click', function(){
  var vm = new ViewManager();
  var member = new Member(
    $('#membershipNumber').val(),
    $('#joinDate').val(),
    $('#firstName').val(),
    $('#lastName').val(),
    $('#birth').val(),
    $('#gender').val(),
    $('#address').val(),
    $('#postcode').val(),
    $('#due').val(),
    $('#typeOfMembership').val()
    );

  valid.detectmn(member.transferMemberObj()['Membership_Number'])
  valid.detectJoin(member.transferMemberObj()['Join_Date'])
  valid.detectfn(member.transferMemberObj()['First_Name'])
  valid.detectln(member.transferMemberObj()['Last_Name'])
  valid.detectBirth(member.transferMemberObj()['Date_of_Birth'])
  valid.detectGender(member.transferMemberObj()['Gender'])
  valid.detectAddress(member.transferMemberObj()['Address'])
  valid.detectPostcode(member.transferMemberObj()['Postcode'])
  valid.detectDue(member.transferMemberObj()['Subscription_Due_Month'])
  valid.detectType(member.transferMemberObj()['Type_of_Membership'])
  valid.checkTwoDate(member.transferMemberObj()['Join_Date'], member.transferMemberObj()['Date_of_Birth'])
  
  if (result == 11 ) {
    alert('Success');
    jsfm.saveRecord(member.transferMemberObj());
    location.reload();
  }
  else {
    alert('Please_complete_form');
  }

})
