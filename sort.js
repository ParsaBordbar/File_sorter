const fs = require('fs');
const path = require('path');

const rename = (oldName, newName) =>{
  fs.rename(oldName, newName, (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });
}

const sort = (filesList, correctList) => {
  filesList.forEach((file) => {

    let fileExtension = path.extname(file);
    let fileName = path.basename(file, fileExtension);

    for (let i = 0; i < correctList.length; i++) {
      if (fileName == correctList[i]) {
            let newFileName = `${i}-${file}`;
            rename(file, newFileName);
            break;
      }
    }
  });
}

const folderPath = './';

let filesList = fs.readdirSync(folderPath);

let correctList = [
    "Introduction",
    "RESTful Services",
    "Introducing Express",
    "Building Your First Web Server",
    "Nodemon",
    "Environment Variables",
    "Route Parameters",
    "Handling HTTP GET Requests",
    "Handling HTTP POST Requests",
    "Calling Endpoints Using Postman",
    "Input Validation",
    "Handling HTTP PUT Requests",
    "Handling HTTP Delete Requests",
    "Project- Build the Genres API",
    "Building RESTful APIs with Express Recap",
];

sort = (filesList, correctList);