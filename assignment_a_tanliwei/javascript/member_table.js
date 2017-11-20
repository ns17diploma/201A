app_js = 'app.js';
chunk = require('chunk');

$(function(){

  let members = jsf.readFileSync(file)

  if (members.length > 0) {    

    let member_page = chunk(members, 10)

    make_table(member_page[0])

    if (member_page.length > 1) {
      create_pagination(member_page)
    }
  }


})

function make_table(members)
{

  $('#members-table tbody').html('')
  for (var i in members) {

  let member_row_html = 
  '<tr><td>'+ members[i].MembershipNumber +'</td>'+
      '<td>'+ members[i].FirstName +'</td>'+
      '<td>'+ members[i].LastName +'</td>'+
      '<td>'+ members[i].Address +'</td>'+
      '<td>'+ members[i].Sex +'</td>'+
      '<td>'+ members[i].DateOfBirth +'</td>'+
      '<td>'+ members[i].JoinDate +'</td>'+
      '<td>'+ members[i].Type +'</td>'+
      '<td>'+ members[i].SubsMonth +'</td>'+
      '<td>'+ members[i].PostalCode +'</td>'+
  '</tr>';
    $('#members-table tbody').append(member_row_html)
  }
}

function create_pagination(pages) {

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
