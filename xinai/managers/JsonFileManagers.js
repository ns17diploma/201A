const fs = require('fs')
const jsf = require('jsonfile');

var filename = 'jsfile.json'; 
class JsonFileManagers{
  
  constructor(){
    
    if (!fs.existsSync(filename)) 
  
    {
      jsf.writeFileSync(filename, [])
    }
  }

  saveMember(obj)
  {
    var arr = this.getMembers()
    arr.push(obj.transformObj());
    jsf.writeFileSync(filename,arr,{spaces: 1, EOL:'\r\n'});
    console.log(obj.transformObj())
  }

  getMembers()
  {    
    return jsf.readFileSync(filename);
  }
}

module.exports = JsonFileManagers