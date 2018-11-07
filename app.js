console.log('Starting app.js...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  console.log('showing a list of notes...');
} else if (command === 'remove') {
  console.log('removing note...');
} else if (command === 'read') {
  console.log('reading note...');
} else {
  console.log('command not recognized...');
}
