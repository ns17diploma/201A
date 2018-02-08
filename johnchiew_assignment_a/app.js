var jsonfile = require('jsonfile');
var $ = require('jquery');
var chunk = require('chunk');
var fs = require('fs');
var file = 'data.json';
var data = {};
var containerData = jsonfile.readFileSync(file);
var Validator = require('./manager/Validator.js');
var JsonFileManager = require('./manager/JsonFileManager.js');
var ViewManager = require('./manager/ViewManager.js');
var Member = require('./manager/Member.js');

var jfm = new JsonFileManager();
var vm = new ViewManager();

/************************************************************
 *Table
 */
$(function(){
	
	if (containerData.length > 0) {
		let members = chunk(containerData, 10);
	
		make_table(members[0]);

		if (members.length > 1) {
			pagination(members.length);
		}
	}
})

function make_table(containerData){

	$('#displayTable tbody').html('');
	for (var i in containerData){
	
		info =	'<tr><td>'+containerData[i].membershipNumber + '</td>'+
				'<td>'+containerData[i].gender+'</td>'+
				'<td>'+containerData[i].firstName+'</td>'+
				'<td>'+containerData[i].lastName+'</td>'+
				'<td>'+containerData[i].dateBirth+'</td>'+
				'<td>'+containerData[i].joinDate+'</td>'+
				'<td>'+containerData[i].address+'</td>'+
				'<td>'+containerData[i].postcode+'</td>'+
				'<td>'+containerData[i].typeOfMembership+'</td>'+
				'<td>'+containerData[i].subscriptionDueMonth+'</td></tr>'
	
		$('#displayTable tbody').append(info);
	
	}
}




function pagination(pages) {
	let containerData = jsonfile.readFileSync(file)
	let members = chunk(containerData, 10)
	$('#members-pagination').html('');

	for(var i = 0; i < pages; i++){
		let item_html = `<span class="item" data-pages="${i}">${i+1}</span>`;
		$('#members-pagination').append(item_html);
	}

	$('#members-pagination span.item').click(function(){
		$this = $(this)
		make_table(members[$this.data('pages')]);
	});
}
/*********************************************************************************/

var result = false;
$('#saveRecord').on('click', function(){
	var member = new Member (
	 	$('#membership-number').val(),
    $('#gender').val(),
    $('#first-name').val(),
    $('#last-name').val(),
    $('#date-birth').val(),
    $('#join-date').val(),
    $('#address').val(),
    $('#postcode').val(),
    $('#typeMember').val(),
    $('#due').val()
		)
	var valid = new Validator();

	var jfm = new JsonFileManager()
	
    valid.checkMember(member.transformObj()['membership_number']);
    valid.checkGender(member.transformObj()['gender']);
    valid.checkFirstName(member.transformObj()['first_name']);
    valid.checkLastName(member.transformObj()['last_name']);
    valid.checkDateBirth(member.transformObj()['date_birth']);
    valid.checkJoinDate(member.transformObj()['join_date']);
    valid.checkAddress(member.transformObj()['address']);
    valid.checkPostcode(member.transformObj()['postcode']);
    valid.checkTypeOfMembership(member.transformObj()['type_member']);
    valid.checkSubscriptionDueMonth(member.transformObj()['due']);

	if (
      valid.checkMember(member.transformObj()['membership_number']) == true &&
      valid.checkGender(member.transformObj()['gender']) == true && 
      valid.checkFirstName(member.transformObj()['first_name']) == true && 
      valid.checkLastName(member.transformObj()['last_name']) == true && 
      valid.checkDateBirth(member.transformObj()['date_birth']) == true && 
      valid.checkJoinDate(member.transformObj()['join_date']) == true && 
      valid.checkAddress(member.transformObj()['address']) == true && 
      valid.checkPostcode(member.transformObj()['postcode']) == true && 
      valid.checkTypeOfMembership(member.transformObj()['type_member']) == true && 
      valid.checkSubscriptionDueMonth(member.transformObj()['due']) == true 
      ) {
				jfm.saveMember();
				jfm.addMember();
				alert('Form Complete');
				location.reload();
      }
      else {
				alert('Please Check Back');
      }

})