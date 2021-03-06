const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  const notes = loadNotes();
  //const duplicateNotes = notes.filter(note => note.title === title);
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.bold('Note removed!'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

const listNote = () => {
  const notes = loadNotes();
  notes.forEach(note =>
    console.log(
      chalk.blue(`${getNotes()} Title: ${note.title}`) //, Body ${note.body}
    )
  );
};

const readNote = title => {
  const notes = loadNotes();
  const noteContet = notes.find(note => note.title === title);
  if (noteContet) {
    console.log(chalk.green.bold(`Note title: ${noteContet.title}`));
    console.log(chalk.blue(`Note content: ${noteContet.body}`));
  }
  if (!noteContet) {
    console.log(chalk.red.inverse('Note not found!'));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
