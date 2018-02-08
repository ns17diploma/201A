var jsonfile = require('jsonfile');
var file = 'jsonfile.json'
var chunk = require('chunk');

var $ = require('jquery');

$(function(){
  
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
  for (var i in members) {
   html_inside_table += '<tr><td>' + members[i].membership_number + '</td>' +
            '<td>' + members[i].sex + '</td>' +
            '<td>' + members[i].first_name + '</td>' +
            '<td>' + members[i].date_of_birth + '</td>' +
            '<td>' + members[i].last_name + '</td>' +
            '<td>' + members[i].join_date + '</td>' +
            '<td>' + members[i].address + '</td>' + 
            '<td>' + members[i].type_of_membership + '</td>'+
            '<td>' + members[i].postcode + '</td>' +
            '<td>' + members[i].month + '</td>' +
            +'</tr>'
  }

  var html_table =
          '<tr>'+
            '<th>'+'Membership_Number' + '</th>' +
            '<th>'+'Sex' + '</th>' +
            '<th>'+'First_Name' + '</th>' +
            '<th>'+'Date_of_Birth' + '</th>' +
            '<th>'+'Last_Name' + '</th>' +
            '<th>'+'Join_Date' + '</th>' +
            '<th>'+'Address' + '</th>'+
            '<th>'+'Type_of_Membership' + '</th>'+
            '<th>'+'Postcode' + '</th>' +
            '<th>'+'Subscription_due_Month' + '</th>' +
          '</tr>'
          + html_inside_table ;

  $('#content').html(html_table);

};

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




