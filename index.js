// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require("./utils/generateMarkdown");
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name:'Author',
        nessage: "Enter the author's (your) name?",
    },
    {
        type:'input',
        name: 'Title',
        message:'What is the title of your project?'
    },
    {
        type:'input',
        name: 'Description',
        message:'Describe your project:'
    },
    {
        type:'input',
        name: 'Table',
        message:'What is the title of your project?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
