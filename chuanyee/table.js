
var jsonfile = require('jsonfile');
var file = 'jsonfile.json'
var chunk = require('chunk');

var $ = require('jquery');

$(function (){
	
	let members =jsonfile.readFileSync(file)

	if (members.length > 0){
		let member_page_group = chunk(members, 10)

		make_table(member_page_group[0])

		if(member_page_group.length > 1){
			create_pagination(member_page_group)
		}
	}
})

function make_table(members){
	var html_inside_table = ""
	for (var i in members){
	html_inside_table = html_inside_table + '<tr><td>' + members[i].Membership_Number + '</td>' + '<td>' +
						members[i].First_Name + '</td>' + '</td>' +
						'<td>' + members[i].Last_Name + '</td>' +
						'<td>' + members[i].Address + '</td>' +
						'<td>' + members[i].Sex + '</td>' +
						'<td>' + members[i].Date_Of_Birth + '</td>' +
						'<td>' + members[i].Type_Of_Membership + '</td>' +
						'<td>' + members[i].Subscription + '</td>' + '</tr>'
	}

	var html_table ='<table>' +
					'<tr>'+
						'<th>'+'Membership_Number' + '</th>' +
						'<th>'+'First_Name' + '</th>' +
						'<th>'+'Last_Name' + '</th>' +
						'<th>'+'Address' + '</th>' +
						'<th>'+'Gender' + '</th>' +
						'<th>'+'Date_Of_Birth' + '</th>' +
						'<th>'+'Type_Of_Membership' + '</th>' +
						'<th>'+'Subscription' + '</th>'+
					'</tr>'
					+ html_inside_table + '</table>';

$('section#content').html(html_table);

}

function create_pagination(pages){
	$('#members-pagination').html('')

	for (var i = 0; i< pages.length; i++ ){
		let item_html = `<span class="item" data-page="${i}">${i+1}</span>`
		$('#members-pagination').append(item_html)
	}
	$('#members-pagination span.item').click(function(){
		$this = $(this)
		make_table(pages[$this.data('page')]);
	});
}

