const fs = require('fs')
const jsf = require('jsonfile')

var filename = 'jsfile.json';
class jsonfilemanager{

	constructor(){
		if (!fs.existsSync(filename)) {
			jsf.writeFileSync(filename,[])
		}
	}

	saveMember(obj){
		var arr = this.getMembers();
        arr.push(obj);
        jsf.writeFile(filename,arr,{spaces: 1, EQL:'\r\n'});
	}

	getMembers(){
		return jsf.readFileSync(filename);
	}
}

module.exports = jsonfilemanager