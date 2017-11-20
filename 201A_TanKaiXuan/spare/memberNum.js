function create(){
	
	/*Create a random number*/
	var x = Math.floor((Math.random() * 999997) + 100001);
	
	var digit = x.toString();
	if (digit.length == 6) {
		
		var read = jsonfile.readFileSync(file);
		var inbox = "";
		
		for (var i in read){
			
			check_memberNum = read[i].membersNum;
			inbox += check_memberNum;
			console.log(inbox);
		}		
		document.getElementById('membersNum').innerHTML = x;

	} else {
		console.log('error');
	}

}
