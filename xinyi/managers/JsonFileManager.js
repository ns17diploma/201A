
const fs = require('fs');
const jsf = require('jsonfile');

class JsonFileManager {

	constructor() {
	this.filename = 'members.json'
		if (!fs.existsSync(this.filename)) {
		  jsf.writeFileSync(this.filename, [])
		}
	}

	saveMember(member)
	{
		var members = this.getMembers()
		members.push(member)
		jsf.writeFileSync(this.filename, members)
	}

	getMembers()
	{
		return jsf.readFileSync(this.filename)
	}
}

module.exports = JsonFileManager