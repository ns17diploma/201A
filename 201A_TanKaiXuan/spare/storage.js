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
			var data = jsonfile.readFileSync(file);
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

		/* Write information in table.html */
		var read = jsonfile.readFileSync(file);
		var infox = "";
		for (var i in read){		
			var html_insideTable =  '<tr>'+
										'<td>' + read[i].firstName + '</td>' +
										'<td>' + read[i].lastName + '</td>' +
										'<td>' + read[i].gender + '</td>' +
										'<td>' + read[i].birthday + '</td>' +
										'<td>' + read[i].address + '</td>' +
										'<td>' + read[i].postcode + '</td>' +
										'<td>' + read[i].memberNum + '</td>' +
										'<td>' + read[i].memberType + '</td>' + 
										'<td>' + read[i].joinDate + '</td>' +
										'<td>' + read[i].subscriptionMonth + '</td>'+
									'</tr>';

			infox += html_insideTable;
		
			window.onload = function show(){ 
				document.getElementById('content').innerHTML = infox;
			}
}
