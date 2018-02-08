class JsonFileManager {
  constructor(file) {
    this.file = file
    if (!fs.existsSync(this.file)) {
      fs.mkdirSync(this.file)
      jsf.writeFileSync(this.file, [])
    }
  }
// When an objec was created from class JsonFileManager, assign the passed file as file
// Check whether the passed file is existed or not. If not, write [] into it 
  getJsonFile() {
    return jsf.readFileSync(this.file)
  }
// Read the file and return it
  saveJsonFile(obj) {
    let allData = this.getJsonFile()
    allData.push(obj)
    jsf.writeFileSync(this.file, allData, {spaces:2, EOL:'\r\n'})
  }
  // assign the result of this.getJsonFile() into allData, and push the passed data into it
  // Then, write allData to the file with 2 spaces and new line 
}
module.exports = JsonFileManager // Export class JsonFileManager