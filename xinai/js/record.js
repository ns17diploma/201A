var jsf = require('jsonfile');
var filename = 'jsfile.json'
var chunk = require ('chunk')
var $ = require('jquery');
const JsonFileManager = require('./managers/JsonFileManagers')

$(function(){
const jfm = new JsonFileManager()
  let members = jsf.readFileSync(filename)

  if (members.length > 0) {

    let member_page_groups = chunk(members, 10)

    make_table(member_page_groups[0])

    if (member_page_groups.length > 1) {
      create_pagination(member_page_groups)
    }
  }
})

function make_table(members)
{
  var html_insert_table = ""
  for (var i in members) {

    html_insert_table = html_insert_table +
              '<tr><td>' + members[i].Membership_Number + '</td>' + 
              '<td>' + members[i].Sex + '</td>' +
              '<td>' + members[i].First_Name + '</td>' + 
              '<td>' + members[i].Last_Name + '</td>' +
              '<td>' + members[i].Address + '</td>' + 
              '<td>' + members[i].Postcode + '</td>' + 
              '<td>' + members[i].Date_of_birth + '</td>' + 
              '<td>' + members[i].Join_Date + '</td>' +
              '<td>' + members[i].Type_of_Membership + '</td>' + 
              '<td>' + members[i].Subscription_Due_Month + '</td>' +'</tr>'; 
  }

  var html_table = '<table>' + 
            '<tr>' + 
              '<th>'+'Membership_Number'+'</th>'+
              '<th>'+'Sex'+'</th>'+
              '<th>'+'First_Name'+'</th>'+
              '<th>'+'Last_Name'+'</th>'+
              '<th>'+'Address'+'</th>'+
              '<th>'+'Postcode'+'</th>'+
              '<th>'+'Date_of_birth'+'</th>'+
              '<th>'+'Join_Date'+'</th>'+
              '<th>'+'Type_of_Membership'+'</th>'+
              '<th>'+'Subscription_Due_Month'+'</th>'+
            '</tr>'+
              html_insert_table + '</table>';

  $('section#content').html(html_table);
};

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