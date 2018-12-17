const fs = require('fs');

///////////////
// UTILITIES //
///////////////
const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//////////////
// ADD NOTE //
//////////////
const addNote = (title, body) => {
  const notes = fetchNotes();
  const duplicateNotes = notes.filter(n => n.title === title);
  const note = {
    title,
    body
  };
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

////////////////
// LIST NOTES //
////////////////
const listNotes = () => {
  return fetchNotes();
};

///////////////
// READ NOTE //
///////////////
const readNote = title => {
  debugger;
  let notes = fetchNotes();
  return notes.filter(n => n.title === title)[0];
};

/////////////////
// REMOVE NOTE //
/////////////////
const removeNote = title => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter(n => n.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length ? true : false;
};

module.exports = {
  listNotes,
  readNote,
  addNote,
  removeNote
};
