console.log('starting app.js...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);

// var user = os.userInfo();

// fs.appendFile(
//   'greetings.txt',
//   `Hello ${user.username}! you are ${notes.age}`,
//   error => {
//     if (error) {
//       console.log('Unable to write to file');
//     } else {
//       console.log('File appended successfully!');
//     }
//   }
// );
