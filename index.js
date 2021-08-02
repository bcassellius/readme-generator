// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require ('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: projectName => {
      if (projectName){
        return true;
      } else {
        console.log('Please provide the title of your project!')
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
    type: 'input',
    name: 'installation',
    message: 'Provide instructions for application installation.'
  },
  { type: 'input',
    name: 'usage',
    message: 'Provide information for application usage.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Unlicense'],
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
    name: 'tests',
    message: 'Provide information on tests for your app here.'
  },
  {
    type:'input',
    name: 'questions',
    message: 'Enter an email address where questions can be sent. (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter the email address where you can be reached about questions on your project!')
      }
    }        
  },  
]



  
  
// // TODO: Create a function to write README file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.md', generateMarkdown(readmeObj), err => {
      console.log("A README is created. Find it in the dist folder!")
      if (err) throw err
    });
  });
};



// // TODO: Create a function to initialize app

function showAnswers() {
  inquirer.prompt(questions)
  .then(inquirerResponses => {
    console.log(inquirerResponses)
    readmeObj = inquirerResponses
  }
)}; 

// function init() {
//   return inquirer
//   .prompt(questions)
//   .then(inquirerResponse => {
//     readmeObj = inquirerResponse
//   })
// }

// init();

showAnswers();

// // // record video windows + g