// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const profileDataArgs = process.argv.slice(2);
const [username, github] = profileDataArgs;
const generateMarkdown = require ('./utils/generateMarkdown');
const generatePage = require('./src/page-template.js');
fs.writeFile('index.md', generatePage(username, github), err => {
    if (err) throw err;
  
    // console.log('Portfolio complete! Check out index.html to see the output!');
});


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
    {
        type:'input',
        name: 'questions',
        message: 'Enter an email address where you can be reached. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter the email address where you can be reached about questions on your project!')
            }
        }        
    },  
]

function showAnswers() {
    inquirer.prompt(questions)
    .then(inquirerResponses => {
         console.log(inquirerResponses)
    }
)} 

showAnswers();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



// // record video windows + g