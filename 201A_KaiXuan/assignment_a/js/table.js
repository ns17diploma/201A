  var jfm = require('./js/JsonFileManager.js')
  var jsonfile = require('jsonfile');
  var file = "members.json";
  var fs = require('fs');
  var $ = require('jquery');
  var chunk = require('chunk');

  $(function(){


    if(!fs.existsSync(file)) {
      jsonfile.writeFileSync(file, [])
    }

    var data = jsonfile.readFileSync(file)
    if (data.length === 0) {
      alert('NO ANY MEMBER NOW')
    } else {
      addTable(0)
      let someInfo = chunk(data, 10)
      if (someInfo.length > 1) {
        makeAll(someInfo)
      }
    }

    function makeAll(btnNum) {
      $('#allBtn').html("")
      for (var j = 0; j < btnNum.length; j++) {
        let theBtn = '<button type="button" class="pageBtn" value="' 
          + (Number(j) + 1) + '">' + (Number(j) + 1) + '</button>'
        $('#allBtn').append(theBtn);
      } 
      console.log("WAADA")
    }

    function addTable(x) {
      let theData = jsonfile.readFileSync(file);
      let showMember = chunk(data, 10)
      $('#listTable').html("");
      let theMembers = showMember[x];
      if (theMembers.length > 0) {
        for (var i = 0; i < theMembers.length; i++) {


          let members = `<tr>
                  <td>${theMembers[i]['f_name']}</td>
                  <td>${theMembers[i]['l_name']}</td>
                  <td>${theMembers[i]['gender']}</td>
                  <td>${theMembers[i]['bday']}</td>
                  <td>${theMembers[i]['address']}</td>
                  <td>${theMembers[i]['postcode']}</td>
                  <td>${theMembers[i]['member_num']}</td>
                  <td>${theMembers[i]['member_type']}</td>
                  <td>${theMembers[i]['join_date']}</td>
                  <td>${theMembers[i]['due_month']}</td>
                  </tr>`
          $('#listTable').append(members);  
        }}
      }

    $('.pageBtn').click(function(){
      $this = $(this)
      addTable(Number($this.val()) - 1)   
    })
  })