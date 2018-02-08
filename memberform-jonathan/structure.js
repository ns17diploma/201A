const $ = require('jquery')
const chunk = require('chunk')
const jsonfile = require('jsonfile')
const namefile = 'jsfile.json'

$(function(){

   var Ready_c = jsonfile.readFileSync(namefile)
   let Group_m = chunk(Ready_c, 10)
   Create_Table(Group_m[0])
   if (Group_m.length > 1) {
      Create_p(Group_m)
   }

   function Create_Table(theMembers){
      $('#passtable').html('')
      
      for (var i in theMembers){
         var row =
            '<tr>'+
            '<td>'+ theMembers[i].First_Name + '</td>' +
            '<td>' + theMembers[i].Last_Name + '</td>' +
               '<td>' + theMembers[i].Gender + '</td>' +
               '<td>' + theMembers[i].PostCode + '</td>' +
               '<td>' + theMembers[i].DOB + '</td>' +
               '<td>' + theMembers[i].JD + '</td>' +
               '<td>' + theMembers[i].SUB + '</td>' +
               '<td>' + theMembers[i].TOM + '</td>' +
               '<td>' + theMembers[i].Address + '</td>' +
               '<td>' + theMembers[i].MBN + '</td>' +
         '</tr>'

         $('#passtable').append(row)

      }
      var html = 
      '<table>'+'<tr>'+
         '<td>'+'First_Name' +'</td>'+
         '<td>'+'Last_Name'  +'</td>'+
            '<td>'+'Gender'     +'</td>'+
            '<td>'+'PostCode'   +'</td>'+
            '<td>'+'DOB'        +'</td>'+
            '<td>'+'JD'         +'</td>'+
            '<td>'+'SUB'        +'</td>'+
            '<td>'+'TOM'        +'</td>'+
            '<td>'+'Address'    +'</td>'+
            '<td>'+'MBN'      +'</td>'+   
            '</tr>'+row+
        '</table>';
       $('div#button01').html(html);

   }

   function Create_p(pages){
      $('#memberpagination').html('')
      
      for (var i = 0; i < pages.length; i++) {
         let coun = '<button class="clickBtn" value="'+i+'">'+i+1+'</button>'
         $('memberpagination').append(coun)
         $('.clickBtn').on('click',function(){
            var ans = $(this).val()
            Create_Table(pages[ans])
         })    
      }
   }
})