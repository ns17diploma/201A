class Validator {

  // Membership Number 
  checkMember(mn) {
    var totalmn = 0;
    for(var i = 0; i < mn.length; i++){
      var x = 6 - i;
      totalmn += Number(mn[i]) * x;
    }

    // If empty, show the error message.
    if (mn == '') {
      vm.errorMessage('#membership-number', 'Membership Number must not empty');
      return false;
    }
    // If less than or more than 6 digits, show error message.
    else if (mn.length !== 6) {
      vm.errorMessage('#membership-number', 'Membership Number only 6 digits');
      return false;
    }
    // If not modulus 11 number, show error message
    else if ((totalmn % 11) !== 0) {
      vm.errorMessage('#membership-number', 'Membership Number is not modulus 11');
      return false;
    }
    else {
      vm.removeMessage("#membership-number");
      return true;
    }

  }

  // Gender
  checkGender(gender) {
    //If empty, show error message
    if (gender == '' ) {
      vm.errorMessage('#gender', 'Please select your gender F or M');
      return false;
    }
    else {
      vm.removeMessage('#gender');
      return true;
    }
  }

  // First Name
  checkFirstName(fn) {
    // If empty, show error message
    if (fn == '') {
      vm.errorMessage('#first-name', 'Please insert your First Name');
      return false;
    }
    // Only alphabet, if not show error message
    else if (!/^[a-zA-Z\s]+$/.test(fn)) {
      vm.errorMessage('#first-name', 'Only Alphabet');
      return false;
    }
    else {
      vm.removeMessage('#first-name');
      return true;
    }
  }

  // Last Name
  checkLastName(ln) {
    // If empty, show error message
    if (ln == '') {
      vm.errorMessage('#last-name', 'Please insert your Last Name')
      return false;
    }
    // Only alphabet, if not show error message
    else if (!/^[a-zA-Z\s]+$/.test(ln)) {
      vm.errorMessage('#last-name', 'Only Alphabet')
      return false;
    }
    else {
      vm.removeMessage('#last-name')
      return true;
    }
  }

  // Date of Birth
  checkDateBirth(dob) {
    // If empty, show error message
    if (dob == '') {
      vm.errorMessage('#date-birth', 'Select your Birth Date');
      return false;
    } else {
      vm.removeMessage('#date-birth');
      return true;
    }
  }

  // Join Date
  checkJoinDate(jd) {
    // If empty, show error message
    if (jd == '') {
      vm.errorMessage('#join-date', 'Select your Join Date');
      return false;
    } else {
      vm.removeMessage('#join-date');
      return true;
    }
  }
  // Address
  checkAddress(address) {
    // If empty, show error message
    if (address == '') {
      vm.errorMessage('#address', 'Please insert Your Address');
      return false;
    } else {
      vm.removeMessage('#address');
      return true;
    }
  }

  // Postcode
  checkPostcode(pc) {
    if (pc == '') {
      vm.errorMessage('#postcode', 'Please insert the Postcode');
      return false;
    }
    // Only allow 5 digits, more or less show error message
    else if (pc.length !== 5) {
      vm.errorMessage('#postcode', 'Postcode only 5 digits');
      return false;
    }
    else {
      vm.removeMessage('#postcode');
      return true;
    }
  }

  // Type of Membership
  checkTypeOfMembership(tom) {
    // If empty, show error message
    if (tom == '' ) {
      vm.errorMessage('#typeMember', 'Select type of Membership e.g. F,S,T,B');
      return false;
    }
    else {
      vm.removeMessage('#typeMember');
      return true;
    }
  }

  // Subscription Due Month
  checkSubscriptionDueMonth(sdm) {
    // If empty, show error message
    if (sdm == '' ) {
      vm.errorMessage('#due', 'Select your Subscription Due Month');
      return false;
    } else {
      vm.removeMessage('#due');
      return true;
    }
  }

}

module.exports = Validator