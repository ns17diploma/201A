const $ = require('jquery')
const jsf = require('jsonfile')
const fs = require('fs')
const file = './record/data.json'
const JsonFileManager = require('./manager/JsonFileManager')
const ValidateManager = require('./manager/ValidateManager')
const DataManager = require('./manager/DataManager')

$(function(){
  let allID = [] // Create a new array new allID
  let jsm = new JsonFileManager(file) // Create a new object jsm from class JsonFileManager
  $('.getValue').each(function(){
    $this = $(this)
    allID.push($this.attr('id'))
  }) // For each element that has class getValue, push their id name to allID

  $('#submitBtn').click(function(){ // Element with id name submitBtn has function when clicked 
    let dm = new DataManager(allID) // Create a new object dm from class DataManager and pass allID
    let vm = new ValidateManager(allID) 
    // Create a new object vm from class ValidateManager and pass allID 
    vm.emptyValidate() 
    vm.numericValidate($('#Membership-number').val())
    vm.modulusValidate($('#Membership-number').val())
    vm.lengthValidate($('#Membership-number').val(), 6)
    vm.alphaValidate('First-name', $('#First-name').val())
    vm.alphaValidate('Last-name', $('#Last-name').val())
    vm.dateValidate($('#Date-of-Birth').val(), 
                    $('#Join-date').val(), 
                    'Date-of-Birth', 
                    "Date-of-Birth and Join-date is invalid!")
    // These 7 functions are called to validate value from HTML element.  
    if ($('body *').hasClass('error field') === false) {
      alert('Submit Successful')
      jsm.saveJsonFile(dm.transformObj())
    } else {
      alert('Please complete the form correctly!')
    }
    // If all element in body has no class error and field, alert Submit Successful!
  }) //  Then call jsm.saveJsonFile(). Else alert Please complete the form correctly!
})