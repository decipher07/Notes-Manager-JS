const validator = require('validator');
const chalk = require ('chalk');
const notes = require ('./notes.js');
const yargs = require ('yargs');

// Customize Yargs 
yargs.version ('1.1.0');

// Create Add Command 
yargs.command (
    {
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note Title',
                demandOption: true ,
                type: 'string'
            },
            body: {
                describe: 'Note Body',
                demandOption: true ,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.addNotes(argv.title, argv.body);
            //console.log('Title: ' + argv.title + '\n Body: ' + argv.body );
        }
    }
)

// Create Remove Command 
yargs.command (
    {
        command: 'remove',
        describe: 'Remove a note',
        builder:{
            title: {
                describe: 'Notes Title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Notes Body',
                demandOption: true ,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.removeNotes(argv.title);
            //console.log('Removing the note');
        }
    }
)

// Create A List Command 
yargs.command (
    {
        command: 'list',
        describe: 'placeholder',
        handler: function (){
            notes.listNotes();
            //console.log('Creating a list command');
        }
    }
)

// Create a read Command 

yargs.command (
    {
        command: 'read',
        describe: 'placeholder',
        builder: {
            title : {
                describe: 'Read',
                demandOption: true ,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.readNote(argv.title);
            //console.log('Reading all list Commands');
        } 
    }
)
yargs.parse()
// add, remove, read, list 
//console.log(yargs.argv);


// console.log(process.argv);
// console.log(yargs.argv);
















// const command = process.argv[2];
// console.log(process.argv);
// if (command === 'add')
//     console.log ('Adding a New Node');

// 
// console.log(validator.isEmail('example.com'));



// const name = require ('./utils.js');
// name();



// const sum = name(4, -2);
// console.log(sum);
//const name = 'DJ';
//console.log(name);
// const fs = require('fs');
// //fs.writeFileSync('notes.txt','My Name is Andrew');
// fs.appendFileSync('notes.txt', 'My age is 35');
