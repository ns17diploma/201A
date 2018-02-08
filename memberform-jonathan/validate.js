
/* Require Jquery And Js File */
const $ = require('jquery');
const SE = require('./error.js');

/* Create An Object */
let E = new SE()
class Validate{ 
    
    /* Obj From  App.js 'return_this()' */
    constructor(obj){
        this.obj = obj
        this.First_Name = obj['First_Name']
        console.log(this.First_Name)
        this.Last_Name = obj['Last_Name']
        this.Gender = obj['Gender']
        this.PostCode = obj['PostCode']
        this.DOB = obj['DOB']
        this.JD = obj['JD']
        this.SUB = obj['SUB']
        this.TOM = obj['TOM']
        this.Address = obj['Address']
        this.MBN = obj['MBN']
    }

        /* 
        * Validate Function Empty String,
        * Module Eleven, PostCode Five Digits, 
        * Mbn Six Digits 
        */
        CheckFN(){
            var fn = this.First_Name
            if (fn.length == "") {
                result = false
                E.ShowError('#First_Name','First Name Was Empty')
            }else{
                result = true
                E.Clear('#First_Name')
            }
            return result
        }

        CheckLN(){
            var LN = this.Last_Name
            if (LN.length == "") {
                result = false
                E.ShowError('#Last_Name','First Name Was Empty')
            }else{
                result = true
                E.Clear('#Last_Name')
            }
            return result
        }

        CheckG(){
            var Gender = this.Gender
            if (Gender == "") {
                result = false
                E.ShowError('#Gender','Gender Was Empty')
            }else{
                result = true
                E.Clear('#Gender')
           }
            return result
        }   
        CheckPC(){
            var PC = this.PostCode
            if (PC.length != 5) {
                 result = false
                E.ShowError('#PostCode','Please Input Five Digit')
            }else{
                result = true
                E.Clear('#PostCode')
            }
            if (PC.length == "") {
                E.ShowError ('#PostCode','PostCode Was Empty')
            }else{
               E.Clear('#PostCode')
            }
            return result 
        }

        CheckDOB(){
            var DOB = this.DOB
            if (DOB.length != 10) {
                result = false
                E.ShowError('#DOB','DOB Invalid')
            }else{
                result = true
                E.Clear('#DOB')
            }
            return result
        }
        CheckD(){

            if(this.JD<this.DOB){
                result = false
                E.ShowError('#JD','JD Invalid')
            }else{
                result = true
                E.Clear('#JD')
            }
            return result
        }
        CheckJD(){
            var jd = this.JD
            if (jd.length != 10) {
                result = false
                E.ShowError('#JD','Invalid Join Date')
            }
            else{
                result = true
                E.Clear('#JD')
            }
            return result
        }

        CheckSUB(){
            var SUB = this.SUB
            if (SUB == "") {
                result = false
                E.ShowError('#SUB','SUB Was Empty')
            }else{
                result = true
                E.Clear('#SUB')
            }
            return result
        }

        CheckTOM(){
            var TOM = this.TOM
            if (TOM == "") {
                result = false
                E.ShowError('#TOM','Please Choose An Option')
            }else{
                result = true
                E.Clear('#TOM')
            }
            return result
        }

        CheckAddr(){
            var Addr = this.Address
            if (Addr.length == "") {
                result = false
                E.ShowError('#Address','Address Was Empty')
            }else {
                result = true
                E.Clear('#Address')
            }
            return result
        }

        CheckMBN(){
            var MBN = this.MBN
            let total = 0;
            for (var i = 0; i < 6; i++) {
                let x = 6 -i
                total += $('#MBN').val()[i]*x 
            }
            if ((total % 11) != 0) {
                result = false
                E.ShowError('#MBN','Invalid MBN')
            }
            if(MBN.length == ""){
                E.ShowError('#MBN','MBN Was Empty')
                result  = false
            }
            if (!/^\d{6}$/.test(MBN)) {
                result = false
                E.ShowError('#MBN','MBN Must Be Numeric')
            }else{
                result = true
                E.Clear('#MBN')
            }
            return result

        }
}   

module.exports = Validate
