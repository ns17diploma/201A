const $ = require('jquery')
const jsf = require('jsonfile')
const fs = require('fs')
const JsonFileManager = require('./manager/JsonFileManager')
const TableManager = require('./manager/TableManager')
const file = './record/data.json'
const chunk = require('chunk')

$(function(){
  let jfm = new JsonFileManager(file)
  let tm = new TableManager(10, jfm) // Create a new object tm from class TableManager and pass 10
  $('.viewer').click(function(){
    tm.makeTable(tm.data[$(this).val()])
  })
})
// When element with class name viewer was clickedm call tm.makeTable()
// And pass its value