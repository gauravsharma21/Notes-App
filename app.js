const yargs = require('yargs')
const note = require('./notes.js')
yargs.version('1.0.1')
yargs.command({
    command : 'add',
    describe : 'add a note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        note.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler(){
        note.listNote()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    }
},
    handler(argv) {
      note.readNote(argv.title)  
    }
})
yargs.parse()