class Member {

  constructor(
    membership_number,
    gender,
    first_name,
    last_name,
    date_birth,
    join_date,
    address,
    postcode,
    type_member,
    due,
    ) {
    this.membership_number = membership_number
    this.gender = gender
    this.first_name = first_name
    this.last_name = last_name
    this.date_birth = date_birth
    this.join_date = join_date
    this.address = address
    this.postcode = postcode
    this.type_member = type_member
    this.due = due
  }

  transformObj() {
    return {
      'membership_number': this.membership_number,
      'gender': this.gender,
      'first_name': this.first_name,
      'last_name': this.last_name,
      'date_birth': this.date_birth,
      'join_date': this.join_date,
      'address': this.address,
      'postcode': this.postcode,
      'type_member': this.type_member,
      'due': this.due
    };
  }

}

module.exports = Member