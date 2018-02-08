class Member{

  constructor(
    membership_number,
    sex,
    first_name,
    date_of_birth,
    last_name,
    join_date,
    address,
    type_of_membership,
    postcode,
    month
  ) {
    this.membership_number = membership_number
    this.sex = sex
    this.first_name = first_name
    this.date_of_birth = date_of_birth
    this.last_name = last_name
    this.join_date = join_date
    this.address = address
    this.type_of_membership = type_of_membership
    this.postcode = postcode
    this.month = month
  }

  transformObj(){
    return {
      'membership_number' : this.membership_number,
      'sex' : this.sex,
      'first_name' : this.first_name,
      'date_of_birth' : this.date_of_birth,
      'last_name' : this.last_name,
      'join_date' : this.join_date,
      'address' : this.address,
      'type_of_membership': this.type_of_membership,
      'postcode' : this.postcode,
      'month' : this.month
    };
  }
}

module.exports = Member