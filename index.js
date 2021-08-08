// packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require ('./utils/generateMarkdown');

// an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
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
    message: 'Provide a description of the project.',
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
    message: 'Provide instructions for application installation.',
    validate: projectInstallation => {
      if (projectInstallation){
        return true;
      } else {
        console.log('Please provide installation instructions!')
      }
    }
  },
  { type: 'input',
    name: 'usage',
    message: 'Provide information for application usage.',
    validate: projectUsage => {
      if (projectUsage) {
        return true;
      } else {
        console.log('Please provide information for usage!')
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Unlicense'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide information for contributions to this project.',
    validate: projectContributing => {
      if (projectContributing) {
        return true;
      } else {
        console.log('Please provide information on contributions made to this project!')
      }
    }
},
  {
    type: 'input',
    name: 'github',
    message: 'Enter the GitHub username associated with your project.',
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
    message: 'Provide information on tests for your app here.',
    validate: projectTests => {
      if (projectTests) {
        return true;
      } else {
        console.log('Please provide information on tests!')
      }
    }
  },
  {
    type:'input',
    name: 'questions',
    message: 'Enter an email address where questions can be sent.',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter the email address where you can be reached about questions on your project!')
      }
    }        
  },  
]
  
// a function to write README file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.md', generateMarkdown(fileContent), err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'A README is created. Find it in the dist folder!'
      });
    });
  });
};

// initialize app
function showAnswers() {
  inquirer.prompt(questions)
  .then(inquirerResponses => {
    writeFile(inquirerResponses);
    console.log(`Your README has been created in the dist folder!`);
  }
)}; 

showAnswers()