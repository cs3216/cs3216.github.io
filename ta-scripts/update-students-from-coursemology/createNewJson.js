/*
  Developed by John Phua, 2020
  To run this script, run:
  node createNewJson.js

  It will generate a new `student.json` in the current folder (where this .js file is)
  for you to use in `website/students`.
  It will also create a <year> folder with the images of students to add to
  `website/static/img/students`.

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
  
  (By default, dataDir is defined as `/data/submissions`)
*/

const slugify = require("slugify");
const fs = require("fs");
const path = require("path");
const { htmlToText } = require("html-to-text");

// Directory containing folders of user submissions downloaded from Coursemology (expects parent directory of user folders)
const dataDir = "data/submissions";
// Unless json format or dir change, there should be no need to modify this
const originalFileDir = "../../website/students/students.json";

// Subfolders for each question
const ONELINER_FOLDER = "Question 1 Give us a one-line description of yourself";
const LINK_FOLDER = "Question 2 Link (URL) for your name";
const FACULTY_FOLDER = "Question 3 Faculty";
const PHOTO_FOLDER = "Question 4 Please upload a photo of yourself here";
// For text responses, Coursemology exports them as `answer.txt`.
const ANSWER_FILE = "answer.txt";

fs.readFile(originalFileDir, function (err, data) {
  if (err) {
    return console.error(err);
  }

  fs.readdir(dataDir, { withFileTypes: true }, (err, userSubmissions) => {
    if (err) {
      return console.error(err);
    }

    const currDate = new Date();
    const thisYear = currDate.getFullYear();
    const thisYearFilePath = thisYear.toString();
    let newYearStudentsObject = { year: thisYear, students: [] };

    if (!fs.existsSync(thisYearFilePath)) {
      fs.mkdirSync(thisYearFilePath);
    }

    userSubmissions
      .filter((entry) => entry.isDirectory())
      .forEach((submission) => {
        copyImageWithRename(
          thisYearFilePath,
          submission.name,
          path.join(dataDir, submission.name)
        );
        newYearStudentsObject.students.push(
          processStudent(submission.name, path.join(dataDir, submission.name))
        );
      });

    const oldStudentsArray = JSON.parse(data).filter(
      (obj) => obj.year !== thisYear
    );
    const newStudentsArray = [newYearStudentsObject, ...oldStudentsArray].sort(
      (a, b) => b.year - a.year
    );
    fs.writeFile(
      `students.json`,
      `${JSON.stringify(newStudentsArray, null, 2)}\n`,
      function (err) {
        if (err) {
          return console.error(err);
        }
      }
    );
  });
});

function processStudent(studentName, studentDirName) {
  const imageID = formImageName(studentName);
  const studentObject = {
    name: toTitleCase(studentName.trim()),
    id: imageID,
    faculty: processStudentFaculty(studentDirName),
    blog: processStudentLink(studentDirName),
    one_liner: processStudentOneLiner(studentDirName),
  };
  return studentObject;
}

function processStudentOneLiner(studentDirName) {
  const file = path.join(studentDirName, ONELINER_FOLDER, ANSWER_FILE);

  if (fs.existsSync(file)) {
    return standardiseCharacters(
      parseHtmlToText(fs.readFileSync(file, "utf8"))
    );
  } else {
    console.log("One-liner not found in " + studentDirName);
    return "";
  }
}

function processStudentLink(studentDirName) {
  const file = path.join(studentDirName, LINK_FOLDER, ANSWER_FILE);

  if (fs.existsSync(file)) {
    const rawLink = parseHtmlToText(fs.readFileSync(file, "utf8"));
    if (!rawLink.startsWith("http://") && !rawLink.startsWith("https://")) {
      console.log(
        `${studentDirName} link does not start with http(s), prefixing ${rawLink} with 'https://'.`
      );
      return "https://" + rawLink;
    }
    return rawLink;
  } else {
    console.log("Link not found in " + studentDirName);
    return "";
  }
}

function processStudentFaculty(studentDirName) {
  const file = path.join(studentDirName, FACULTY_FOLDER, ANSWER_FILE);

  if (fs.existsSync(file)) {
    const rawFaculty = parseHtmlToText(fs.readFileSync(file, "utf8"));
    return rawFaculty
      .replace(/^Computer Science$/i, "Computing")
      .replace(/^School of Computing$/i, "Computing")
      .replace(/^SoC$/i, "Computing");
  } else {
    console.log("Faculty not found in " + studentDirName);
    return "";
  }
}

function copyImageWithRename(targetFolder, studentName, studentDirName) {
  const dirPath = path.join(studentDirName, PHOTO_FOLDER);
  fs.readdir(dirPath, (err, files) => {
    if (err || files.length === 0) {
      return console.log("Image not found for " + studentName, err);
    }

    const imagePath = path.join(dirPath, files[0]);
    const destPath = path.join(
      targetFolder,
      `${formImageName(studentName)}.jpg`
    );
    fs.copyFile(imagePath, destPath, (err) => {
      if (err) {
        console.log("Image could not be copied for " + studentName, err);
      }
    });
  });
}

function toTitleCase(words) {
  return words
    .split(" ")
    .map(
      (word) =>
        `${word.charAt(0).toUpperCase()}${word.substring(1).toLowerCase()}`
    )
    .join(" ");
}

function formImageName(studentName) {
  return slugify(studentName.toLowerCase());
}

function parseHtmlToText(htmlString) {
  return htmlToText(htmlString, {
    ignoreHref: true,
    wordwrap: false,
    singleNewLineParagraphs: true,
    uppercaseHeadings: false,
  })
    .replace(/\s/g, " ")
    .trim();
}

function standardiseCharacters(str) {
  return str
    .replace("”", '"')
    .replace("“", '"')
    .replace("’", "'")
    .replace("‘", "'")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/[\u2026]/g, "...");
}
