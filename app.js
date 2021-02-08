const notes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');

//const text = notes('I am writing something');
//console.log(text);

// const validator = require('validator'); // import validator from 'validator'; if .mjs
// console.log(validator.isEmail(`robert@example.com`));
// console.log(validator.isURL(`http://example.com`));

//const success = chalk.green;
//const error = chalk.red;

//console.log(chalk.blue('Success!'));
//console.log(error('Error!'));
//console.log(process.argv);

// const command = process.argv[2];
// console.log(process.argv);
// if (command === 'add') {
//   console.log('Adding a note');
// }
// if (command === 'remove') {
//   console.log('Removing a note');
// }

//console.log(process.argv);

//Custumize yarg
yargs.version(`1.1.0`);
//add
yargs.command({
  command: 'add',
  description: 'Add a note',
  builder: {
    title: {
      description: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      description: 'Note Body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});
//remove
yargs.command({
  command: 'remove',
  description: 'Remove a note',
  builder: {
    title: {
      description: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
//list
yargs.command({
  command: 'list',
  description: 'List the notes',
  handler() {
    notes.listNote();
  },
});
//read
yargs.command({
  command: 'read',
  description: 'Reading the notes',
  builder: {
    title: {
      description: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});
console.log(yargs.argv);
//yargs.parse();
