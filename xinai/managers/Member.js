class Member {

  constructor(
    number1,
    sex,
    first,
    last,
    address0,
    post,
    date1,
    date2,
    type,
    due
  ) {
    this.Membership_Number = number1
    this.Sex = sex
    this.First_Name = first
    this.Last_Name = last
    this.Address = [$('#address0').val(),$('#address1').val(),$('#address2').val()]
    this.Postcode = post
    this.Date_of_birth = date1
    this.Join_Date = date2
    this.Type_of_Membership = type
    this.Subscription_Due_Month = due
  }

  transformObj() {
    return {
      'Membership_Number': this.Membership_Number,
      'Sex': this.Sex,
      'First_Name': this.First_Name,
      'Last_Name': this.Last_Name,
      'Address': this.Address,
      'Postcode': this.Postcode,
      'Date_of_birth': this.Date_of_birth,
      'Join_Date': this.Join_Date,
      'Type_of_Membership': this.Type_of_Membership,
      'Subscription_Due_Month': this.Subscription_Due_Month,
    };
  }
}

module.exports = Member