// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./src/page-template.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: projectName => {
          if (projectName){
            return true;
          } else {
            console.log('Please provide the name of your project!')
          }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub username associated with your project. (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter the link to your project!')
          }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project. (Required)',
        validate: projectDescription => {
            if (projectDescription){
            return true;
            } else {
            console.log('Please provide a description of the project!')
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['one', 'two', 'three', 'four'],
        
    },
];

showAnswers()
.then()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
