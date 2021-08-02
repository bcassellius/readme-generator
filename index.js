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
    choices: ['MIT', 'GNU', 'GPLv3', 'Unlicense'],
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


function showAnswers() {
  inquirer.prompt(questions)
  .then(inquirerResponses => {
    console.log(inquirerResponses)
  }
)}; 

showAnswers();
  
  
// // TODO: Create a function to write README file
// // this will write the file
// const writeFile = fileContent => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('./dist/index.md', fileContent, err => {
//       // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//       if (err) {
//         reject (err);
//         // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//         return;
//       }    
//       resolve({
//         ok: true,
//         message: 'File created!'
//       });
//     });
//   });
// };
// function writeToFile(fileName, data) {
// }



// // TODO: Create a function to initialize app
// function init() {
//   return inquirer
//   .prompt(questions)
//   .then(response => {
//     readmeObj = response
//   })
// }

// // Function call to initialize app
// init();



// // // record video windows + g