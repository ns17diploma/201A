
var jsonfile = require('jsonfile')
var file = 'members.json'
var $ = require('jquery');
var chunk = require('chunk')

$(function(){

  let members = jsonfile.readFileSync(file)

  if (members.length > 0) {

    let member_page_groups = chunk(members, 10)

    make_table(member_page_groups[0])

    if (member_page_groups.length > 1) {
      create_pagination(member_page_groups)
    }
  }
});

function make_table(members){
	var html_inside_table=""
	for(var i in members){
		html_inside_table = html_inside_table+'<tr><td>'+members[i].Membership_Number+'</td>'+
						'<td>'+members[i].First_Name+'</td>'+
						'<td>'+members[i].Last_name+'</td>'+
						'<td>'+members[i].Address+'</td>'+
						'<td>'+members[i].Postcode+'</td>'+
						'<td>'+members[i].Sex+'</td>'+
						'<td>'+members[i].Date_of_birth+'</td>'+
						'<td>'+members[i].Join_Date+'</td>'+
						'<td>'+members[i].Type_of_membership+'</td>'+
						'<td>'+members[i].Subscription_Due_Month+'</td>'+'</tr>';
	}

	var html_table = '<table>' +
					'<tr>'+
						'<th>'+'Membership_Number' + '</th>' +
						'<th>'+'First_Name' + '</th>' +
						'<th>'+'Last_name'+'</th>'+
						'<th>'+'Address' + '</th>' +
						'<th>'+'Postcode' + '</th>' +
						'<th>'+'Sex' + '</th>' +
						'<th>'+'Date_of_birth' + '</th>' +
						'<th>'+'Join_Date' + '</th>'+
						'<th>'+'Type_of_membership' + '</th>' +
						'<th>'+'Subscription_Due_Month' + '</th>'+
					'</tr>'
					+ html_inside_table + '</table>';

	$('section#content').html(html_table);
}

function create_pagination(pages){
	$('#members-pagination').html('')

  		for (var i = 0; i < pages.length; i++) {
    		let item_html = `<span class="item" data-page="${i}">${i+1}</span>`
    		$('#members-pagination').append(item_html)
  		}
  		$('#members-pagination span.item').click(function() {
   		 $this = $(this)
   		 make_table(pages[$this.data('page')]);
  		});
}