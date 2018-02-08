class Member {

	constructor (
		membership_number,
		join_date,
		first_name,
		last_name,
		date_of_birth,
		gender,
		address,
		postcode,
		subscription_due_month,
		type_of_membership,
		) {
		this.membership_number = membership_number;
		this.join_date = join_date;
		this.first_name = first_name;
		this.last_name = last_name;
		this.date_of_birth = date_of_birth;
		this.gender = gender;
		this.address = address;
		this.postcode = postcode;
		this.subscription_due_month = subscription_due_month;
		this.type_of_membership = type_of_membership;
	}

	transferMemberObj() {
		return {
			'Membership_Number' : this.membership_number,
			'Join_Date' : this.join_date,
			'First_Name' : this.first_name,
			'Last_Name' : this.last_name,
			'Date_of_Birth' : this.date_of_birth,
			'Gender' : this.gender,
			'Address' : this.address,
			'Postcode' : this.postcode,
			'Type_of_Membership' : this.type_of_membership,
			'Subscription_Due_Month' : this.subscription_due_month
		}
	}

}

module.exports = Member;