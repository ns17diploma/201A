var jsonfile = require('jsonfile');
var file = "members.json";
var fs = require('fs');
var $ = require('jquery');
var data = jsonfile.readFileSync(file);


class JsonFileManager{
  
  /*
    Constructor is a special function, it accept 
    the parameter all_id from app.js (Line 14)
  */
  constructor(all_id){
   
   /*If member.json no exist, create a new one (Line 17-19)*/
    if (!fs.existsSync(file)) {
      jsonfile.writeFileSync(file, [])
    }
    
    /*
      Get all the value from all_id, add assign to each variable
      "this" means this object (Line 25-35)
    */
    this.f_name      = all_id[0];
    this.l_name      = all_id[1];
    this.gender      = all_id[2];
    this.bday        = all_id[3];
    this.address     = all_id[4];
    this.postcode    = all_id[5];
    this.member_num  = all_id[6];
    this.member_type = all_id[7];
    this.join_date   = all_id[8];
    this.due_month   = all_id[9];
  }
  
 /*
  A function to take the variable from constructor and 
  assign to an object, after that return the object (Line 41-54)
*/
  transformObj() {
    return {
        'f_name'      : this.f_name,
        'l_name'      : this.l_name,
        'gender'      : this.gender,
        'bday'        : this.bday,
        'address'     : this.address,
        'postcode'    : this.postcode,
        'member_num'  : this.member_num,
        'member_type' : this.member_type,
        'join_date'   : this.join_date,
        'due_month'   : this.due_month
    };
  }

  /*Function to save member (Line 57-67)*/
  saveMember(){

    /*
      Get the object of transformObj function and
      push this object to member.json (Line 63)
    */
    data.push(this.transformObj()); 

    /*Write the new record to member.json (Line 66)*/
    jsonfile.writeFileSync(file, data, {spaces:2,EOL:'\r\n'})
  }
}

/*Export class JsonFileManager*/
module.exports = JsonFileManager