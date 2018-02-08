const ViewManager = require('./ViewManager.js')
const vm = new ViewManager();

class Validator {

  /*
  *
  ***MEMBERSHIP NUMBER VALIDATE
  ***LINES 19-42 IS VALIDATE MEMBERSHIP NUMBER'S INPUT.
  ***LINES 20-24 IS A LOOP TO CALCULATE INPUT MUST CAN MODULUS 11.
  ***LINES 26-28 USER NO INPUT WILL SHOW 'MEMBERSHIP NUMBER CANNOT EMPTY'.
  ***LINES 29-31 INPUT OF USER LETTER WILL SHOW 'MEMBERSHIP NUMBER IS NOT NUMEIC'.
  ***LINES 32-34 INPUT OF USER NOT ENOUGH 6 DIGITS OR MORE THAN 6 DIGITS WILL 
     SHOW 'MEMBERSHIP NUMBER IS NOT 6 DIGITS'.
  ***LINES 35-37 INPUT OF USER CANNOT MODULUS 11 WILL SHOW 'MEMBERSHIP NUMBER IS NOT VALID MODULUS 11 NUMBER'.
  ***LINES 38-41 PASS ALL VALIDATE WILL REMOVE ERROR MESSAGE ABOUT MEMBERSHIP NUMBER AND ADD 1 TO RESULT.
  *
  */
  detectmn(mn){
    let mnTotal = 0;
    for (var i = 0 ; i < mn.length ; i++) {
      let x = 6 - i;
      mnTotal = mnTotal + (Number(mn[i]) * x);
    }

    if ( mn == '' ) {
      vm.errorMessage('#membershipNumber', 'Membership_Number_cannot_empty' );
    }
    else if ( !/^\d+$/.test(mn) ) {
      vm.errorMessage('#membershipNumber', 'Membership_Number_is_not_numeric' );
    }
    else if ( mn.length !== 6 ) {
      vm.errorMessage('#membershipNumber', 'Membership_Number_is_not_6_digits' );
    }
    else if ( (mnTotal % 11) !== 0 ) {
      vm.errorMessage('#membershipNumber', 'Membership_Number_is_not_a_valid_modulus_11_number' );
    }
    else {
      vm.addTrue();
    }
  }

  /*
  *
  ***FIRST NAME VALIDATE
  ***LINES 53-55 USER NO INPUT WILL SHOW 'FIRST NAME CANNOT EMPTY'.
  ***LINES 56-58 USER'S INPUT NOT LETTER WILL SHOW 'FIRST NAME CANNOT NUMERIC'.
  ***LINES 59-62 PASS ALL VALIDATE WILL REMOVE ERROR MESSAGE ABOUT FIRST NAME AND ADD 1 TO RESULT.
  *
  */
  detectfn(fn) {
    if ( fn == '' ) {
      vm.errorMessage( '#firstName', 'First_Name_cannot_empty' );
    }
    else if ( !/^[a-zA-Z\s]+$/.test(fn) ) {
      vm.errorMessage( '#firstName', 'First_Name_cannot_numeric' );
    }
    else {
      vm.addTrue();
    }
  }

  /*
  *
  ***LAST NAME VALIDATE
  ***LINES 74-76 USER NO INPUT WILL SHOW 'LAST NAME CANNOT EMPTY'.
  ***LINES 77-79 USER'S INPUT NOT LETTER WILL SHOW 'LAST NAME CANNOT NUMERIC'.
  ***LINES 80-83 PASS ALL VALIDATE WILL REMOVE ERROR MESSAGE ABOUT LAST NAME AND ADD 1 TO RESULT.
  *
  */
  detectln(ln) {
    if ( ln == '' ) {
      vm.errorMessage( '#lastName', 'Last_Name_cannot_empty' );
    }
    else if ( !/^[a-zA-Z\s]+$/.test(ln) ) {
      vm.errorMessage( '#lastName', 'Last_Name_cannot_numeric' );
    }
    else {
      vm.addTrue();
    }
  }
  
  /*
  *
  ***ADDRESS VALIDATE
  ***LINES 94-96 USER NO INPUT WILL SHOW 'ADDRESS CANNOT EMPTY'. 
  ***LINES 97-100 PASS VALIDATE WILL REMOVE ERROR MESSAGE ABOUT ADDRESS AND ADD 1 TO RESULT. 
  *
  */
  detectAddress(address) {
    if ( address == '' ) {
      vm.errorMessage( '#address', 'Address_cannot_empty' );
    }
    else {
      vm.addTrue();
    }
  }
  
  /*
  *
  ***POSTCODE VALIDATE
  ***LINES - USER NO INPUT, WILL SHOW 'POSTCODE CANNOT EMPTY'.
  ***LINES - USER'S INPUT IS LETTER WILL SHOW 'POSTCODE CANNOT EMPTY'.
  ***LINES - USER'S INPUT IS NOT ENOUGH 5 DIGITS OF MORE THAN 5 DIGITS WILL SHOW 'POSTCODE IS NOT 5 DIGITS'.
  ***LINES - PASS ALL VALIDATE WILL REMOVE ERROR MESSAGE ABOUT POSTCODE AND ADD 1 TO RESULT.
  *
  */
  detectPostcode(postcode) {
    if ( postcode == '' ) {
      vm.errorMessage( '#postcode', 'Postcode_cannot_empty' );
    }
    else if ( !/^\d+$/.test(postcode) ) {
      vm.errorMessage( '#postcode', 'Postcode_is_not_numeric' );
    }
    else if ( postcode.length !== 5) {
      vm.errorMessage( '#postcode', 'Postcode_is_not_5_digits' );
    }
    else {
      vm.addTrue();
    }
  }
  
  /*
  *
  ***GENDER VALIDATE
  ***LINES - GENDER NO CHOOSE WILL SHOW 'GENDER MUST BE FEMALE OR MALE'.
  ***PASS VALIDATE WILL REMOVE ERROR MESSAGE ABOUT GEMDER AND ADD 1 TO RESULT.
  *
  */
  detectGender(gender) {
    if ( gender == '' ) {
      vm.errorMessage( '#gender', 'Gender_must_be_Female_or_Male' );
    }
    else {
      vm.addTrue();
    }
  }
  
  
  /*
  *
  ***SUBSCRIPTION DUE MONTH VALIDATE
  ***LINES - USER NO CHOOSE WILL SHOW 'SUBSCRIPTION MONTH INVALID'.
  ***LINES - PASS ALL VALIDATE WILL REMOVE ERROR MESSAGE ABOUT SUBSCRIPTION DUE MONTH AND ADD 1 TO RESULT.
  *
  */
  detectDue(due) {
    if ( due == '' ) {
      vm.errorMessage( '#due', 'Subscription_month_invalid' );
    }
    else {
      vm.addTrue();
    }
  }
  
  
  /*
  *
  ***TYPE OF MEMBERSHIP
  ***LINES - USER NO CHOOSE WILL SHOW 'MEMBERSHIP TYPE MUST BE F, S, T OR B'.
  *
  */
  detectType(type) {
    if ( type == '' ) {
      vm.errorMessage( '#typeOfMembership', 'Membership_type_must_be_F, S, T or B' );
    }
    else {
      vm.addTrue();
    }
  }
  

  /*
  *
  ***JOIN DATE VALIDATE
  ***LINE IS REMOVE THE '-'
  ***LINES - 
  *
  */
  detectJoin(join) {
    let checkJoin = join.replace(/-/g, "")
    if ( join == '' || checkJoin.length !== 8 ) {
      vm.errorMessage( '#joinDate', 'Invalid_Join_Date' );
    }
    else {
      vm.addTrue();
    }
  }
  

  //date_of_birth
  detectBirth(birth){
    let checkBirth = birth.replace(/-/g, "")
    if ( birth == '' || checkBirth.length !== 8 ) {
      vm.errorMessage( '#birth', 'Invalid_Date_of_Birth' );
    }
    else {
      vm.addTrue();
    }
  }
  

  //two_date
  twoDate(join, birth) {
    let checkJoin = join.substr(0,4)
    let checkBirth = birth.substr(0,4)
    if ( Number(checkBirth) > Number(checkJoin)) {
      vm.errorMessage( '#birth', 'Invalid_Date_of_Birth(Year)' );
      vm.errorMessage( '#joinDate', 'Invalid_Join_Date(Year)' );
    }
    else {
      vm.addTrue();
    }
  }
  
  checkTwoDate(join, birth) {
    let checkJoin = join.replace(/-/g, "")
    let checkBirth = birth.replace(/-/g, "")
    if( checkJoin.length == 8 && checkBirth.length == 8 ) {
      this.twoDate(join, birth);
    }
  }
}

module.exports = Validator;