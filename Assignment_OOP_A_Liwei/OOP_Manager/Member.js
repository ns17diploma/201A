var person = function(){
	
}
/**********************************************/
/*GET MEMBER DATA VALUE*/

class Member{

	constructor(
 		MembershipNumber,
 		FirstName,
 		LastName,
 		Address,
 		Sex,
 		DateOfBirth,
 		JoinDate,
 		Type,
 		SubsMonth,
 		PostalCode
		){
                 this.MembershipNumber =  MembershipNumber
                 this.FirstName =  FirstName
                 this.LastName =  LastName
                 this.Address =  Address
                 this.Sex =  Sex
                 this.DateOfBirth =  DateOfBirth
                 this.JoinDate =  JoinDate
                 this.Type =  Type
                 this.SubsMonth =  SubsMonth
                 this.PostalCode =  PostalCode		
	       }
        
       transformObj(){
	return{
		'MembershipNumber' : this.MembershipNumber,
		'FirstName' : this.FirstName,
		'LastName' : this.LastName,
		'Address' : this.Address,
		'Sex' : this.Sex,
		'DateOfBirth' : this.DateOfBirth,
		'JoinDate' : this.JoinDate,
		'Type' : this.Type,
		'SubsMonth' : this.SubsMonth,
		'PostalCode' : this.PostalCode	
	}
}
}

module.exports = Member