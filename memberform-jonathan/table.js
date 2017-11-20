var $ = require('jquery')
var jsonfile = require('jsonfile'   )
var file = 'jsfile.json'
var chunk = require('chunk')

	
$(function(){

	var members = jsonfile.readFileSync(file);
    let memberpagegroups = chunk(members, 10)
    console.log(memberpagegroups)
    createtable (memberpagegroups[0])
    if (memberpagegroups.length > 1) {
        createpagination(memberpagegroups)
    }
    

   function createtable(theMembers){
        $('#passtable').html('')

        for(var i in theMembers){

            let rowhtml = `<tr>
            <td>${theMembers[i]['first_Name']}</td>
            <td>${theMembers[i]['last_Name']}</td>
            <td>${theMembers[i]['Gender']}</td>
            <td>${theMembers[i]['PostCode']}</td>
            <td>${theMembers[i]['DateOfBirth']}</td>
            <td>${theMembers[i]['join_Date']}</td>
            <td>${theMembers[i]['SUB']}</td>
            <td>${theMembers[i]['TOM']}</td>
            <td>${theMembers[i]['Address']}</td>
            <td>${theMembers[i]['MBM']}</td>
            </tr>`
            $('#passtable').append(rowhtml)
        }
    }

    function createpagination(pages){
        $('#memberpagination').html('')
        for (var i = 0; i < pages.length; i++) {

            let item = '<button class="clickBtn" value="'+ i + '">'+(Number(i) + 1) +'</button> '
            $('#memberpagination').append(item)
            $('button.clickBtn').on('click',function(){
                $this = $(this)
                createtable(pages[$this.val()])
            }) 
        }
    }
	var html_table =
		'<table>'+'<tr>'+
		    '<td>'+'first_name'    +'</td>'+
            '<td>'+'last_name'     +'</td>'+
            '<td>'+'Gender'         +'</td>'+
            '<td>'+'postcode'       +'</td>'+
            '<td>'+'dateofbirth'   +'</td>'+
            '<td>'+'Join_date'     +'</td>'+
            '<td>'+'SUB'        +'</td>'+
            '<td>'+'TOM'        +'</td>'+
            '<td>'+'Address'    +'</td>'+
            '<td>'+'MBM' +'</td>'   
            +'</tr>'
            +'</table>';

            $('div#button01').html(html_table);

})
