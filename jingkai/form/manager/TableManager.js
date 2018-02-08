class TableManager {
  constructor(limit, jfm) {
    this.allData = jfm.getJsonFile() // call jfm.getJsonFile() and save the result as allData
    this.data = chunk(this.allData, limit) // chunk allData and save as data
    this.makeTable(this.data[0]) // call makeTable and pass first data in data 
    if (this.data.length > 1) {
      this.makeBtn(this.data)
    } // if the length of data is greater than 1, call makeBtn() and pass data   
  } 
  makeTable(the_data) {
    let table_header = Object.keys(the_data[0]) // Get the property name of allID's object
    $('#showData').html("") // Clean all in element id name of showData
    let table_contain = "" // Create a new variable name table_contain and assign empty to it
    for (let i in table_header) {
      table_contain += `<td>${table_header[i]}</td>`
    } // Loop and create table header
    $('#showData').append("<tr>" + table_contain + "</tr>") // Append all table header to table
    
    for (let x = 0; x < the_data.length; x++) {
      let table_data = "" // Create a new variable name table_data and assign empty to it
      for (let y = 0; y < table_header.length; y++) {
        table_data += `<td>${the_data[x][table_header[y]]}</td>`
      }
      $('#showData').append("<tr>" + table_data + "</tr>")
    } // Take all data from passed data and append it to variable table_data
  } // Append variable table_data to element id name of showData

  makeBtn(page) {
    for (let m = 0; m < page.length; m ++) {
      let btn = `<button class="viewer" value="${m}">${m+1}</button>`
      $('#allBtn').append(btn)
    } // Loop the passed page and create same number of buttons
    // Then element id name allBtn append these buttons
    
  } // Make those buttons functionable. When clicked will call makeTable() and pass button's value
}

module.exports = TableManager // Export class TableManager