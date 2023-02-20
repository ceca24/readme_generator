// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// custome module to generate markdown
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type : 'input',
        name : 'title',
        message : 'What is the title of your project?',
        // validate property to ensure that the user enters a value
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type : 'input',
        name : 'description',
        message : 'Please provide a description of your project.',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type : 'input',
        name : 'installation',
        message : 'Please provide installation instructions.',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type : 'input',
        name : 'usage',
        message : 'Please provide usage information.',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type : 'input',
        name : 'contribution',
        message : 'Please provide contribution guidelines.',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type : 'input',
        name : 'test',
        message : 'Please provide test instructions.',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type : 'list',
        name : 'license',
        message : 'Please select a license.',
        choices : ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type : 'input',
        name : 'github',
        message : 'Please provide your GitHub username.',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type : 'input',
        name : 'email',
        message : 'Please provide your email address.',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
