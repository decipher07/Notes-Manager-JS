const fs = require ('fs');
const chalk = require ('chalk');

const addNote = function (title, body){
    const notes =loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title 
    })
    if (duplicateNotes == 0){
        notes.push({
            title: title,
            body: body 
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note Added\n'));
    }else{
        console.log(chalk.red.inverse('Note Title taken !'));
    }

}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title )

    if (note){
        console.log(chalk.inverse(note.title))
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note Not Found'));
    }

}

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = function (){
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data ;
    }catch (e){
        return []
    }
}

const removeNote = function (title){
    //console.log(title);
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title ;
    })

    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Notes Removed'));
        saveNotes(notesToKeep);
    }
    else {
        console.log(chalk.red.inverse('Notes Not Removed'));
    }
    
}

const listNotes = () => {
    console.log(chalk.inverse('Your Notes'));
    const notes = loadNotes();
    notes.forEach( (note) => {
        console.log(note.title)
    })
}

module.exports = {
    addNotes: addNote ,
    removeNotes: removeNote ,
    listNotes: listNotes ,
    readNote : readNote
}