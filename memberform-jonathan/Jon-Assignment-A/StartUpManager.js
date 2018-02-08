const $ = require('jquery');
const jsf = require('jsonfile');
const fs = require('fs');
const filename = ('jsfile.json');
const Validator = require('./validate.js')


/*
* Createed Class StartUp
*/
class Start_Up{

	/* Call this function */
	constructor(){
		this.Ready();
		// this.Read_File();
		// this.Record();
	}

	/* Function */	
	Ready(){
		if (!fs.existsSync(filename)) {
			jsf.writeFileSync(filename,[]);
		}
	}

	Read_File(){
		return jsf.readFileSync(filename);
	}

	Record(){
		console.log(answer)
		var json = this.Read_File('jsfile.json');
		json.push();
		jsf.writeFileSync('jsfile.json',json);  
	}
};
module.exports = Start_Up


