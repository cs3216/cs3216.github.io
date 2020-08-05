/*
  Developed by Ten Zhi-Yang, 2017
  To run this script, run:
  node createNewYml.js

  it will generate a new <year>.yml in the same folder for you to manually update. (instead of replacing the original file)
  in order to follow existing standards, it will also generate the image id in lowercase and hyphens. The images will have to be renamed manually

  Disclaimer: file follows the Javascript Standard Style, so if you don't like the lack of semi-colons, too bad!
*/

// generate csv from google docs and put in the same folder, update this name
var csvFilename = 'contactlist.csv'
// depending on the csv generated you may need to change the key (title in the csv)
var nameKey = 'Name'
var facKey = 'Faculty'
var blogKey = 'Blog'
var oneLinerKey = 'One-liner'

var csvToJson = require('csv-to-json')
var slugify = require('slugify')
var fs = require('fs')

var obj = {
  filename: csvFilename
}

var callback = function (err, json) {
  if (err) {
    return console.error(err)
  }

  json.forEach(function (value) {
    value[nameKey] = value[nameKey].trim()
    value.id = slugify(value[nameKey].toLowerCase())
    value[facKey] = value[facKey].trim()
    value[blogKey] = value[blogKey].trim()
    value[oneLinerKey] = value[oneLinerKey].trim()
  })
  
  var currDate = new Date()
  var thisYear = 1900 + currDate.getYear()
  var newStr = 'year: ' + thisYear + '\nstudents:'
  for (let student of json) {
    newStr += `\n  - name: ${student[nameKey]}`
    newStr += `\n    id: ${student.id}`
    newStr += `\n    faculty: ${student[facKey]}`
    newStr += `\n    blog: ${student[blogKey]}`
    newStr += `\n    one_liner: "${student[oneLinerKey]}"`
  }

  fs.writeFile(thisYear + '.yml', newStr, function (err) {
    if (err) {
      return console.error(err)
    }
  })
}

csvToJson.parse(obj, callback)
