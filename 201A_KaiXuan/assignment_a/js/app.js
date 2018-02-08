var jsonfile = require('jsonfile');
const produceNum = require('./js/produceManager.js')
const validator = require('./js/validateManager.js')
const errMessage = require('./js/errorManager.js')
const JsonFileManager = require('./js/JsonFileManager')

var fs = require('fs')

/*Get the id of create number button, and add event to this button, if this button onclick, execute the function below*/
document.getElementById('create_num').addEventListener("click", function(){

  /*create a new object in produceManager.js, and assign to memberNum*/
  let memNum = new produceNum() 
  
  /*call the function create in this object*/
  memNum.create(document.getElementById('member_num'))

}) 

/*Get the id of submit button, and add event to this button, if this button onclick, execute the function below*/
document.getElementById("submit").addEventListener("click", function(){

  /*Assign all value of Id in an array called all_id*/
  var all_id = [
    document.getElementById('f_name').value,
    document.getElementById('l_name').value,
    document.getElementById('gender').value,
    document.getElementById('bday').value,
    document.getElementById('address').value,
    document.getElementById('postcode').value,
    document.getElementById('member_num').value,
    document.getElementById('member_type').value,
    document.getElementById('join_date').value,
    document.getElementById('due_month').value
  ]

  /*Create a new object in validateManager.js, and assign to validate*/
  let validate = new validator(all_id)

  /*if the length of return value from function validate.verification not equal 0, execute this statement*/
  if (validate.verification().length != 0) {

    /*Create a new object from errorManager.js, and assign to show_err*/
    let show_err = new errMessage(all_id)
    
    /*Call the function show_errMessage in this class, and pass the function validate.verification as a parameter to function show_errMessage*/
    show_err.show_errMessage(validate.verification())

  } 
  
  /*If the previous condition of boolean doesn't achieve, it will check this condition of boolean, if the return value of function verification is euqual 0, execute the below statement*/
  else if (validate.verification().length == 0) { 

    /*create a new object in JsonFileManager, and assign to write_jfm*/
    let write_jfm = new JsonFileManager(all_id);
    
    /*call the function in this class*/
    write_jfm.saveMember()

    /*Change the display style of myModal from "none" to "block"*/
    document.getElementById('myModal').style.display = "block";

  }
})

/*Function For Modal*/
function clickSpan() {
  document.getElementById('myModal').style.display = "none";
}function clickSpan() {
  location.reload();
}
