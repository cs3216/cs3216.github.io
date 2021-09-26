# Create New JSON Script

Here's a quick guide on using this script.

1. Download submissions from Coursemology. This can be done by heading to the submissions page and clicking the three-dots menu icon on the right-hand side. There will be an option to download all submissions.
1. Unzip the submissions folder and copy the folders over to this directory, under `data/`. In other words, you should have something like:

   ```text
     /update-students-from-coursemology/data
       /submissions
         /student1
           /Question 1...
           /Question 2...
           ...
         /student2
           ...
         ...
   ```

1. Install the dependencies by running `npm install`.
1. Run `node createNewJson.js`
1. Check through the new `students.json` file (which will be in this current directory) and update the faculties:
   - For SoC students, the `faculty` should be `"Computing"`.
   - For students with multiple faculties, e.g. DDP students, their `faculty` should be comma-separated, e.g. `"Computing, Science"`.
   - In general, you can follow NUS' faculty names: <https://www.nus.edu.sg/education>.
1. Copy the new year folder (which will be in this current directory) over to `website/static/img/students`, and replace `website/students/students.json` with the new `students.json`.
1. Create a new `<year>.md` file in `website/students` and update it with the new year values.
