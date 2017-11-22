	var jsonfile = require('jsonfile');
	var file = "data.json";
	var fs = require('fs');
	var $ = require('jquery');
	var chunk = require('chunk');

	$(function(){


		if(!fs.existsSync(file)) {
			jsonfile.writeFileSync(file, [])
		}

		var data = jsonfile.readFileSync(file)
		if (data.length === 0) {
			alert('NO ANY MEMBER NOW')
		} else {
			addTable(0)
		}

		//var data = jsonfile.readFileSync(file);

		//let showMember = chunk(data, 10)
		//addTable(0);

		function makeAll(btnNum) {
			for (var j = 0; j < btnNum; j++) {
				let theBtn = '<button type="button" class="pageBtn" value="' 
					+ (Number(j) + 1) + '">' + (Number(j) + 1) + '</button>'
				$('#allBtn').append(theBtn);
				let showMember = chunk(data, 10)
			}

		}

		function addTable(x) {
			let theData = jsonfile.readFileSync(file);
			let showMember = chunk(data, 10)
			$('#listTable').html("");
			let theMembers = showMember[x];
			if (theMembers.length > 0) {
				for (var i = 0; i < theMembers.length; i++) {


					let members = `<tr>
									<td>${theMembers[i]['firstName']}</td>
									<td>${theMembers[i]['lastName']}</td>
									<td>${theMembers[i]['gender']}</td>
									<td>${theMembers[i]['birthday']}</td>
									<td>${theMembers[i]['address']}</td>
									<td>${theMembers[i]['postcode']}</td>
									<td>${theMembers[i]['memberNum']}</td>
									<td>${theMembers[i]['memberType']}</td>
									<td>${theMembers[i]['joinDate']}</td>
									<td>${theMembers[i]['subscriptionMonth']}</td>
									</tr>`
					$('#listTable').append(members);	
				}}
				makeAll(showMember.length);

			}

		$('.pageBtn').click(function(){
			$this = $(this)
			addTable(Number($this.val()) - 1)		
		})
	})