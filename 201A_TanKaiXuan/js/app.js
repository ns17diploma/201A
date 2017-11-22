		/*Link JSON file and seect a position to save the information*/
		var jsonfile = require('jsonfile');
		var file = "data.json";
		var fs = require('fs');
		var data = "";






/************************Function to create member number**************************/
function create(){

	document.getElementById('lable_memberNum').style.display = 'none';
	memberNum = document.getElementById('validate_memberNum');
	memberNum.classList.remove("error"); 
	
	/*Create a random number*/
	var x = Math.floor((Math.random() * 999996) + 1);
	
	/*Convert number to string*/
	var digit = x.toString();
	var mul = 6;
	var sum = 0;
	for (var i = 0; i < digit.length; i++) {
		sum += (digit[i] * mul);
		mul--
	}

	if (digit.length === 6 && (sum % 11) === 0) {
		document.getElementById('memberNum').value = x; 
	} else {
		create();
	}

	 
	

}
/********************** Store Information ******************************/
/*Check user input before store*/
function validation() {

   	var firstName = document.getElementById('firstName').value;
   	var lastName = document.getElementById('lastName').value;
   	var gender = document.getElementById('gender').value;
   	var address = document.getElementById('address').value;
   	var postcode = document.getElementById('postcode').value;
   	var memberType = document.getElementById('memberType').value;
   	var month = document.getElementById('month').value;
    var joinDate = document.getElementById('joinDate').value;
    var birthday = document.getElementById('birthday').value;
    var memberNum = document.getElementById('memberNum').value;
    var checkMemberNum = memberNum.toString();
    var checkFullDate = joinDate.toString();
    var checkFullDate2 = birthday.toString();
    validate = 0; 

    /*Validation the user input*/
    if (firstName != "") {
    	validate++;
    } else {
    	firstName = document.getElementById('validate_firstName');
    	firstName.classList.add("error");
    	document.getElementById('lable_firstName').style.display = 'block';
    }
    if (lastName != "") {
    	validate++;
    } else {
    	lastName = document.getElementById('validate_lastName');
    	lastName.classList.add("error");
    	document.getElementById('lable_lastName').style.display = 'block';
    }
	if (address != "") {
		validate++;
	} else {
		address = document.getElementById('validate_address');
		address.classList.add("error");
		document.getElementById('lable_address').style.display = 'block';
	}
	if (postcode != "") {
		validate++;
	} else {
		postcode = document.getElementById('validate_postcode');
		postcode.classList.add("error");
		document.getElementById('lable_postcode').style.display = 'block';
	}

	if (checkFullDate.length == 10) {
		validate++;
	} else {
		joinDate = document.getElementById('validate_joinDate');
		joinDate.classList.add("error");
		document.getElementById('lable_joinDate').style.display = 'block';
	}
	if(checkFullDate2.length == 10){
		validate++;
	}else{
		birthday = document.getElementById('validate_birthday');
		birthday.classList.add("error");
    	document.getElementById('lable_birthday').style.display = 'block';		
	}
	if (checkMemberNum.length == 6) {
		validate++ ;
	} else {
		memberNum = document.getElementById('validate_memberNum');
		memberNum.classList.add("error");
		document.getElementById('lable_memberNum').style.display = 'block';
	}
	if (memberType != null) {
		validate++
	} else {
		memberType = document.getElementById('memberType');
		memberType.classList.add("error");
	}
	if (month != null) {
		validate++;
	} else {
		month = document.getElementById('month');
		month.classList.add("error");
	}

	if (validate == 9) {
		console.log("all pass");
		document.getElementById('myModal').style.display = "block";
		submitform();
		//document.getElementsByClassName('removeError').classList.remove("error");
		//document.getElementsByClassName('removeLable').style.display = "none";
	}
}

/*Function For Modal*/
function clickSpan() {
    document.getElementById('myModal').style.display = "none";
}function clickSpan() {
	location.reload();
}

    	
/*Object for storing information*/
var newData = {}

function submitform() {


			
	newData.firstName = document.getElementById("firstName").value;
	newData.lastName = document.getElementById("lastName").value;
	newData.gender = document.getElementById("gender").value;
	newData.birthday = document.getElementById("birthday").value;
	newData.address = document.getElementById("address").value;
	newData.postcode = document.getElementById("postcode").value;
	newData.memberNum = document.getElementById("memberNum").value;
	newData.memberType = document.getElementById("memberType").value;
	newData.joinDate = document.getElementById("joinDate").value;
	newData.subscriptionMonth = document.getElementById("month").value;

	/*push the newData in  arr of data*/
	let data = jsonfile.readFileSync(file);
	data.push(newData);
		
			
	/*Write the document in json file*/
	/*Space 2 means the begining of TAB (see the result of data.json)*/
	/*The function of EOL likes <br> */ 
	/*Get all of the information and return*/
	/*After that set a function to handle error*/
	jsonfile.writeFile(file, data, {spaces:2,EOL:'\r\n'}, function (err) {
			console.error(err);
			return;
	})
}





			




