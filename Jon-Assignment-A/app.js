
/* Require JS And Jquery */
const $ = require('jquery');
const S_E = require('./error.js');
const GetMember = require('./Member.js');
const Validator = require('./validate.js');
const Start_Up = require('./StartUpManager.js')
let ST = new Start_Up();

let error = new S_E();

let result = false;
$(function(){
	
	$('#button').on('click',function(){
		/* Remove All Div In Red Color */
		error.cls();

		/* Create Class Instances From the Object */
		let M = new GetMember();
	    let V = new Validator(M.return_this());

	    /* Call Validate Function */

		if ( V.CheckFN() === true && V.CheckLN() === true && V.CheckPC() === true && V.CheckG() === true && V.CheckDOB() === true
		&& V.CheckSUB() === true && V.CheckTOM() === true && V.CheckAddr() === true && V.CheckMBN() === true && V.CheckJD() === true
		&& V.CheckTwoD() == true) {
			alert('Completed');
/*			ST.Record(M.return_this())
*/
		}else{
			alert('Error');
		}
	})
})
