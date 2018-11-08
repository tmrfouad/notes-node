const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOpts = {
  describe: 'Title of the note',
  demand: true,
  alias: 't'
};
const bodyOpts = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOpts,
    body: bodyOpts
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOpts
  })
  .command('remove', 'Remove a note', {
    title: titleOpts
  })
  .help().argv;
const command = argv._[0];
if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note added successfully.');
    notes.logNote(note);
  } else {
    console.log('There is already a note with this title.');
  }
} else if (command === 'list') {
  const notesList = notes.getAll();
  if (notesList && notesList.length > 0) {
    console.log(`Printing ${notesList.length} note(s):`);
    notesList.forEach(note => notes.logNote(note));
  } else {
    console.log('No notes.');
  }
} else if (command === 'remove') {
  const removed = notes.removeNote(argv.title);
  const msg = removed ? 'Note removed successfully.' : 'Note not found.';
  console.log(msg);
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found.');
    notes.logNote(note);
  } else {
    console.log('Note not found.');
  }
} else {
  console.log('command not recognized...');
}
