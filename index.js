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
        name: 'Installation',
        message:'Enter installation instructions:'
    },
    {
        type:'list',
        name: 'License',
        message:'Choose a License for your Readme:',
        choices: [
            "Mozilla Public License",
            "Apache",
            "MIT",
            "Boost Software License",
            "Unlicense",
        ],
    },
    // {
    //     type:'list',
    //     name: 'License',
    //     message:'Enter your GitHub username here:'
    // },
    {
        type:'input',
        name: 'GitHub',
        message:'Enter your GitHub username here:'
    },
    {
        type:'input',
        name: 'Tests',
        message:'Enter testing information for your application:'
    },
    {
        type:'input',
        name: 'Email',
        message:'Enter your email address where you can reached for questions:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log("Your responses:", data);
            console.log("Your responses have been logged");
            console.log ("Generating your markdown file...");
            fs.writeFile("Readme_new.md",generateReadme(data),function(err){
                if (err) throw err;
                console.log("New file successfully written.")
    
            })
        })
}

// Function call to initialize app
init();
