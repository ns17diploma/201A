var fs = require('fs')
var $ = require('jquery')
const JsonFileManager = require('./managers/JsonFileManagers')
const Member = require('./managers/Member')
const Validator = require('./managers/Validator')
const ViewManager = require('./managers/ViewManager');
let all_Error = []

$(function(){ 

  $('.error').each(function() {
    $this = $(this)
    all_Error.push($this.attr('id'))
  })
  let vm = new ViewManager();
  const jfm = new JsonFileManager()
  const validator = new Validator()
  const member = new Member()
  /* THIS CODE IS WHEN WE CLICK THE SAVE BUTTON IT WILL WORK */

  $('#save').click(function(){
    vm.clear();
    var obj = new Member (
    $('#number1').val(),
    $('#sex').val(),
    $('#first').val(),
    $('#last').val(),
    $('#address0').val(),
    $('#post').val(),
    $('#date1').val(),
    $('#date2').val(),
    $('#date2').val(),
    $('#type').val(),
    $('#due').val())
    
    let membership = $('#number1').val()
    let sex = $('#sex').val()
    let first = $('#first').val()
    let last = $('#last').val()
    let address = $('#address0').val()
    let post = $('#post').val()
    let date_of_birth = $('#date1').val()
    let join_date = $('#date2').val()
    let date = $('#date2').val()
    let type = $('#type').val()
    let due = $('#due').val()

    // validator.validate()  
    validator.membership()
    validator.date_of_birth()
    validator.join_date()
    validator.date()
    validator.first()
    validator.last()
    validator.post()
    validator.address()
    validator.sex()
    validator.type()
    validator.due()
    
    if (validator.validate(obj) === true && validator.membership(obj) === true && validator.date(obj) === true && 
        validator.date_of_birth(obj) === true && validator.join_date(obj) === true && validator.first(obj) === true && 
        validator.last(obj) === true && validator.post(obj) === true && validator.sex(obj) === true && 
        validator.type(obj) === true && validator.due(obj) === true && validator.address(obj) === true) {
        $('#error00').show();
        $('#error0').hide();
        jfm.saveMember(obj);
        console.log('success')
      }
      else {
        console.log('error')
        $('#error0').show();
        $('#error00').hide();
      }
  })
  
  /* THIS CODE IS LET THE MEMBERSHIP NUMBER MUST BE 6 DIGITS AND NUMERIC*/ 

  $('#number1').on('keyup',function(){
    vm.clear();
      let mn = $('#number1').val();
      let ms = mn.toString();
      if (ms.length > 6) {
        var c = ms.substr((Number(ms.length)-6), 6);
        $('#number1').val(c);
      } 
      else if (!/\d/.test(ms)) {
        vm.errorMessage('#number1', 'Membership Number was not numeric' )
      }
      else if (ms.length !== 6) {
        vm.errorMessage('#number1', 'Membership Number was not 6 digits' )
      }
       
      else if (ms.length === 6) {
        vm.removeError('#number1')
      }
    })
  
  /* THIS CODE IS LET THE POSTCODE  MUST BE 5 DIGITS */

  $('#post').on('keyup',function(){
    vm.clear();
      let mn = $('#post').val();
      let ms = mn.toString();
      if (ms.length > 5) {
        var c = ms.substr((Number(ms.length)-5), 5);
        $('#post').val(c);
      } 
      else if (ms.length !== 5) {
       vm.errorMessage('#post','Postcode was not 5 digits')
      }
      else if (ms.length === 5) {
        vm.removeError('#post')
      }
  })
  
});