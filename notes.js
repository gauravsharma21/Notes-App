const fs = require('fs')
const chalk = require('chalk')
const getNotes =  () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicatenote = notes.find((note) => note.title === title )
    if(!duplicatenote){
        notes.push({
            title: title,
            body: body
        }
        )
        saveNotes(notes)
        console.log(chalk.green.inverse("Note added"))
    }
    else{
        console.log(chalk.red.inverse("Note exists"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const buffer = fs.readFileSync('notes.json')
        const notes = JSON.parse(buffer.toString())
        return notes
    }
    catch (e) {
        return []
    }
}
const removeNote = (title) => {
    const notes = loadNotes()
    const requirednotes = notes.filter( (note) => note.title !== title )
    if(requirednotes.length != notes.length){
        saveNotes(requirednotes)
        console.log(chalk.green.inverse("Note removed!"))
    }
    else{
        console.log(chalk.red.inverse("No note found!"))
    }
}
const listNote = () => {
    console.log(chalk.green.inverse("Your Notes!!"))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    });
}
const readNote = (title) => {
    const notes = loadNotes()
    const reqnote = notes.find((note) => note.title === title)
    if(reqnote == undefined){
        console.log(chalk.red.inverse("No note found!"))
    }
    else{
        console.log(chalk.green.inverse(title))
        console.log(reqnote.body)
    }
}
module.exports = {
    getNote: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}
