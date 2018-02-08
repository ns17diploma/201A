var jsf = require('jsonfile');
var $ = require('jquery');
var file = 'jsfile.json';
var chunk = require('chunk');
var members = jsf.readFileSync(file);

$(function(){
	let membersGroup = chunk( members,10 );
	htmlTable( membersGroup[0] );
	if ( membersGroup.length > 1 ) {
		createPage(membersGroup.length);
	}
})

function htmlTable(member){
	$('#table').html('');
	var htmlInsideTable = "";
	for (var i in member){
		htmlInsideTable = htmlInsideTable + '<tr><td>' + member[i].Membership_Number + '</td>' + 
							'<td>' + member[i].Join_Date + '</td>'+
							'<td>' + member[i].First_Name + '</td>'+
							'<td>' + member[i].Last_Name + '</td>'+
							'<td>' + member[i].Date_of_Birth + '</td>'+
							'<td>' + member[i].Gender + '</td>'+
							'<td>' + member[i].Address + '</td>'+
							'<td>' + member[i].Postcode + '</td>'+
							'<td>' + member[i].Type_of_Membership + '</td>'+
							'<td>' + member[i].Subscription_Due_Month + '</td></tr>';
	}

	var htmlTable = '<table>' + 
					'<tr>' +
					'<th>' + 'Membership_Number' + '</th>' +
					'<th>' + 'Join_Date' + '</th>' +
					'<th>' + 'First_Name' + '</th>' +
					'<th>' + 'Last_Name' + '</th>' +
					'<th>' + 'Date_of_Birth' + '</th>' +
					'<th>' + 'Gender' + '</th>' +
					'<th>' + 'Address' + '</th>' +
					'<th>' + 'Postcode' + '</th>' +
					'<th>' + 'Type_of_Member' + '</th>' +
					'<th>' + 'Subscription_Due_Month' + '</th>' +
					'</tr>' + htmlInsideTable +
					'<table>';

	$('section#table').html(htmlTable);
}

function createPage(numb){
	let membersGroup = chunk( members,10 );
	for ( var i = 0; i < numb; i++ ) {
		let page = `<span class="item" data-page="${i}"><button>${i+1}</button></span>`;
		$('#pages').append(page);
	}
	$('#pages span.item').click(function(){
		$this = $(this);
		htmlTable(membersGroup[$this.data('page')]);
	})
}