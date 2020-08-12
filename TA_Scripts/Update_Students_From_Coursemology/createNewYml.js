/*
  Developed by John Phua, 2020
  To run this script, run:
  node createNewYml.js

  It will generate a new student.yml in the same folder for you to replace in `_data`.
  It will also create a <year> folder with the images of students to add to `img/students`.

  Expects the Coursemology answer zip to take on the following format:
  /<dataDir>
    /<student name>
      /<FACULTY_FOLDER>
        /<ANSWER_FILE>
      /<LINK_FOLDER>
        /<ANSWER_FILE>
      /<ONELINER_FOLDER>
        /<ANSWER_FILE>
      /<PHOTO_FOLDER>
        /<photo>.jpg
    /... other students
*/
const slugify = require('slugify')
const fs = require('fs')
const path = require('path');
const htmlToText = require('html-to-text');

// Unless yml format or dir change, there should be no need to modify this
var originalFileDir = '../../_data/students.yml'
// Directory containing folders of user submissions downloaded from Coursemology (expects parent directory of user folders)
const dataDir = "data/submissions"

const FACULTY_FOLDER = 'Question 3 Faculty'
const LINK_FOLDER = 'Question 2 Link (URL) for your name'
const ONELINER_FOLDER = 'Question 1 Give us a one-line description of yourself'
const PHOTO_FOLDER = 'Question 4 Please upload a photo of yourself here'
const ANSWER_FILE = 'answer.txt'

fs.readFile(originalFileDir, function (err, data) {
  if (err) {
    return console.error(err)
  }

  fs.readdir(dataDir, {withFileTypes: true}, (err, userSubmissions) => {
    if (err) {
      return console.error(err)
    }

    let currDate = new Date()
    let thisYear = (1900 + currDate.getYear()).toString()
    var oldStr = data.toString()
    var ymlStr = '- batch:\n  year: ' + thisYear + '\n  students:'

    if (!fs.existsSync(thisYear)) {
      fs.mkdirSync(thisYear)
    }

    userSubmissions.filter(entry => entry.isDirectory())
        .forEach(submission => {
          copyImageWithRename(thisYear, submission.name, path.join(dataDir, submission.name))
          ymlStr += processStudent(submission.name, path.join(dataDir, submission.name))
        })

    ymlStr += '\n' + oldStr
    fs.writeFile(`students.yml`, ymlStr, function (err) {
      if (err) {
        return console.error(err)
      }
    })
  })
})

function processStudent(studentName, studentDirName) {
  const imageID = formImageName(studentName)
  let studentStr = `\n  - name: ${studentName.trim()}`
  studentStr += `\n    id: ${imageID}`
  studentStr += processStudentFaculty(studentDirName)
  studentStr += processStudentLink(studentDirName)
  studentStr += processStudentOneLiner(studentDirName)
  return studentStr
}

function processStudentFaculty(studentDirName) {
  const file = path.join(studentDirName, FACULTY_FOLDER, ANSWER_FILE)

  if (fs.existsSync(file)) {
    return `\n    faculty: "${parseHtmlToText(fs.readFileSync(file, 'utf8')).trim()}"`
  } else {
    console.log("Faculty not found in " + studentDirName)
    return ""
  }
}

function processStudentLink(studentDirName) {
  const file = path.join(studentDirName, LINK_FOLDER, ANSWER_FILE)
  if (fs.existsSync(file)) {
    return `\n    blog: "${parseHtmlToText(fs.readFileSync(file, 'utf8')).trim()}"`
  } else {
    console.log("Link not found in " + studentDirName)
    return ""
  }
}

function processStudentOneLiner(studentDirName) {
  const file = path.join(studentDirName, ONELINER_FOLDER, ANSWER_FILE)
  if (fs.existsSync(file)) {
    return `\n    one_liner: "${parseHtmlToText(fs.readFileSync(file, 'utf8')).trim()}"`
  } else {
    console.log("One-liner not found in " + studentDirName)
    return ""
  }
}

function copyImageWithRename(targetFolder, studentName, studentDirName) {
  const dirPath = path.join(studentDirName, PHOTO_FOLDER)
  fs.readdir(dirPath, (err, files) => {
    if (err || files.length === 0) {
      return console.log("Image not found for " + studentName, err)
    }

    const imagePath = path.join(dirPath, files[0])
    const destPath = path.join(targetFolder, `${formImageName(studentName)}.jpg`)
    fs.copyFile(imagePath, destPath, (err) => {
      if (err) {
        console.log("Image could not be copied for " + studentName, err)
      }
    })
  })
}

function formImageName(studentName) {
  return slugify(studentName.toLowerCase())
}

function parseHtmlToText(htmlString) {
  return htmlToText.fromString(htmlString, {
    ignoreHref: true,
    wordwrap: false,
    singleNewLineParagraphs: true,
    uppercaseHeadings: false
  })
}