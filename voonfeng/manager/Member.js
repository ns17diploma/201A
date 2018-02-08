class Member {

  constructor(
    member_number,
    sex,
    first_name,
    last_name,
    date_of_birth,
    join_date,
    sub_due_month,
    type_of_membership,
    address,
    postalcode
  ) {
    this.member_number = member_number
    this.sex = sex
    this.first_name = first_name
    this.last_name = last_name
    this.date_of_birth = date_of_birth
    this.join_date = join_date
    this.sub_due_month = sub_due_month
    this.type_of_membership = type_of_membership
    this.address = address
    this.postalcode = postalcode
  }

  transformObj() {
    return {
      'Membership_Number' : this.member_number,
      'Sexual' : this.sex,
      'First_Name' : this.first_name,
      'Last_Name' : this.last_name,
      'Date_of_Birth' : this.date_of_birth,
      'Join_Date' : this.join_date,
      'Sub_Due_Month' : this.sub_due_month,
      'Type_of_Membership' : this.type_of_membership,
      'Address' : this.address,
      'Postalcode' : this.postalcode
    };
  }


}

module.exports = Member