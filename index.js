// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = []

inquirer
    .prompt([
        {
            type:'input',
            name: 'name',
            message: 'What is the name of your project?'
        }
    ])
    .then(answers => console.log(answers));


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
