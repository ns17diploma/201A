

var $ = require('jquery')
var filename = ('jsfile.json')
var jsf = require('jsonfile')


$(document).ready(function(){
   $('.error0').hide()
   $('.error1').hide()
   $('.error2').hide()
   $('.error3').hide()
   $('.error4').hide()
   $('.error41').hide()
   $('.error5').hide()
   $('.error6').hide()
   $('#button').on('click',function(){
      validate()
      if (result === true) {
         record()
      }
      else{
         alert('Form Invalid');;
      }
   })
})






function record(){
   var all ={
      first_Name: $('#first_Name').val(),
      last_Name: $('#last_Name').val(),
      Gender: $('#gender').val(),
      PostCode: $('#postcode').val(),
      DateOfBirth: $('#dob').val(),
      join_Date: $('#jd').val(),
      SUB: $('#SUB').val(),
      TOM: $('#TOM').val(),
      Address: $('#address').val(),
      MBM: $('#MBN').val()
   }
   var json = jsf.readFileSync('jsfile.json')
   json.push(all)
   jsf.writeFileSync('jsfile.json', json)
}

var result = true;
function validate(){

   function first_Name(){
      var fn = $('#first_Name').val()
      if (fn == "") {
         $('.error0').show()
         result = false;
      }
      else{
         $('.error0').hide()
         result = true;
      }
      return result
   }
   first_Name()

   function last_Name(){
      var ls = $('#last_Name').val()
      if (ls == "") {
         $('.error1').show()
         result = false
      }
      else{
         $('.error1').hide()
         result = true
      }
      return result
   }
   last_Name()

   function postcode(){
      var pc = $('#pc').val()
      if (pc.length != 5) {
         $('.error3').show()
         result = false
      }
      else{
         $('.error3').hide()
         result = true
      }
      return result
   }
   postcode()

   function MBN(){
      var mbn = $('#MBN').val()
      if (mbn == "") {
         $('.error6').show()
         result = false
      }
      else{
         $('.error6').hide()
         result = true
      }
      let total = 0;
      for (var i = 0; i < 6; i++) {
      let x = 6 - i;
      total += $('#MBN').val()[i]*x 
      }
      if ((total%11)!=0) {
         $('.error6').show()
         result = false
      }
      else{
         $('.error6').hide()
         result = true
      }
      return result
   }
   MBN()

   function address(){
      var addr = $('#address').val()
      if (addr == "") {
         $('.error5').show()
         result = false;
      }
      else{
         $('.error5').hide()
         result = true;
      }
      return result;
   }
   address()

   function dob(){
      $('.error4').show()
      var dob = $('#dob').val()
      if (dob.length != 10 || dob == "") {
         $('.error4').show()
         result = false;
      }
      else{
         $('.error4').hide()
         result = true;
      }
      return result;
   }
   dob()

   function jd(){
      var jd = $('#jd').val()
      if (jd.length != 10 || jd == "") {
         $('.error41').show()
         result = false;
      }
      else{
         $('.error41').hide()
         result = true;
      }
      return result;
   }
   jd()
}