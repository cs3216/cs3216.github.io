/*
  Developed by Ten Zhi-Yang, 2017
  To run this script, run:
  node createNewYml.js

  it will generate a new students.yml in the same folder for you to manually update. (instead of replacing the original file)
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

// Unless yml format or dir change, there should be no need to modify this
var originalFileDir = '../../_data/students.yml'
var csvToJson = require('./dependancies/csv.js')
var fs = require('fs')

var obj = {
  filename: csvFilename
}

var callback = function (err, json) {
  if (err) {
    return console.error(err)
  }
  // console.log(json)
  json.map(function (value) {
    value.id = value[nameKey].toLowerCase().replaceAll(' ', '-')
  })

  fs.readFile(originalFileDir, function (err, data) {
    if (err) {
      return console.error(err)
    }
    var oldStr = data.toString()
    // console.log(oldStr)
    var currDate = new Date()
    var thisYear = 1900 + currDate.getYear()
    var newStr = '- batch:\n  year: ' + thisYear + '\n  students:'
    for (let student of json) {
      newStr += '\n  - name: ' + student[nameKey]
      newStr += '\n    id: ' + student.id
      newStr += '\n    faculty: ' + student[facKey]
      newStr += '\n    blog: ' + student[blogKey]
      newStr += '\n    one_liner: "' + student[oneLinerKey] + '"'
    }
    newStr += '\n' + oldStr
    // console.log(newStr)
    fs.writeFile('students.yml', newStr, function (err) {
      if (err) {
        return console.error(err)
      }
    })
  })
}

csvToJson.parse(obj, callback)

String.prototype.replaceAll = function (search, replacement) { // eslint-disable-line
  var target = this
  return target.split(search).join(replacement)
}
