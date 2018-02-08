
class Member {

  constructor(
    input_membership,
    input_name,
    input_last,
    address,
    Postcode,
    sex,
    dob,
    jd,
    input_membership_type,
    day
  ) {
    this.Membership_Number = input_membership
    this.First_Name = input_name
    this.Last_name = input_last
    this.Address = [$('#address1').val(),$('#address2').val(),$('#address3').val()]
    this.Postcode = Postcode
    this.Sex = sex
    this.Date_of_birth = dob
    this.Join_Date = jd
    this.Type_of_membership = input_membership_type
    this.Subscription_Due_Month = day
  }

  transformObj() {
    return {
      'Membership_Number' : this.Membership_Number,
      'First_Name' : this.First_Name,
      'Last_name' : this.Last_name,
      'Address' : this.Address,
      'Postcode' : this.Postcode,
      'Sex' : this.Sex,
      'Date_of_birth' : this.Date_of_birth,
      'Join_Date' : this.Join_Date,
      'Type_of_membership' : this.Type_of_membership,
      'Subscription_Due_Month' : this.Subscription_Due_Month,
    };
  }

}

module.exports = Member