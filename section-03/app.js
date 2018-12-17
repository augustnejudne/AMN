const yargs = require('yargs');

const notes = require('./notes.js');

const yargsOptions = {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  }
};

const argv = yargs
  .command('add', 'Add a new note.', yargsOptions)
  .command('list', 'List all notes')
  .command('read', 'Read a note.', {
    title: yargsOptions.title
  })
  .command('remove', 'Remove a note.', {
    title: yargsOptions.title
  })
  .help().argv;
var command = argv._[0];

switch (command) {
  case 'add': {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
      console.log(`Note "${note.title}: ${note.body}" successfully added`);
    } else {
      console.log('Note title already exists');
    }
    break;
  }
  case 'list': {
    // let notesList = notes.listNotes();
    notes.listNotes().forEach(n => {
      console.log(`${n.title}: ${n.body}`);
    });
    break;
  }
  case 'read': {
    let n = notes.readNote(argv.title);
    console.log(n ? `${n.title}: ${n.body}` : 'Note not found');
    break;
  }
  case 'remove': {
    let noteRemoved = notes.removeNote(argv.title);
    console.log(
      noteRemoved
        ? `Successfully removed note with title: ${argv.title}.`
        : 'Removal failed'
    );
    break;
  }
  default:
    console.log('--help for help');
}
