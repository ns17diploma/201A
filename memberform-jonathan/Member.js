
/*Require Needed Files*/
const $ = require('jquery');
const jsf = require('jsonfile');
const fs = require('fs');
const filename = ('jsfile.json');

/*
*Create Class Member
*/
class Member{

		 constructor(
		 		First_Name,
		 		Last_Name,
		 		Gender,
		 		PostCode,
		 		DOB,
		 		JD,
		 		SUB,
		 		TOM,
		 		Address,
		 		MBN ){

				/*Assign Each Id Value*/				
				this.First_Name = $('#First_Name').val(),
				this.Last_Name = $('#Last_Name').val(),
				this.Gender = $('#Gender').val(),
				this.PostCode = $('#PostCode').val(),
				this.DOB = $('#DOB').val(),
				this.JD = $('#JD').val(),
				this.SUB = $('#SUB').val(),
				this.TOM = $('#TOM').val(),
				this.Address = $('#Address').val(),        
				this.MBN = $('#MBN').val()  
			}

		/*
		*Created return_this Function
		*Assign this To An Object
		*/
		 return_this(){
				return{  
					'First_Name' : this.First_Name,
					'Last_Name' : this.Last_Name,
					'Gender' : this.Gender,
					'PostCode' : this.PostCode,
					'DOB' : this.DOB,
					'JD' : this.JD,
					'SUB' : this.SUB,
					'TOM' : this.TOM,
					'Address' : this.Address,
					'MBN' : this.MBN
				}

		 }
}
module.exports = Member
