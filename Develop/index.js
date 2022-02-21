// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    "What is your projects title? (Required):", 
    "Enter a description of your project. (Required):", 
    "Enter a table of contents (Optional).:", 
    "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.:", 
    "Provide instructions and examples for use.:",
    "Enter a project license for your project.:",
    "Please list project contributors, if any (optional)",
    "Go the extra mile and write tests for your application. Then provide examples on how to run them here.:",
    "Enter your github username, in case people want to reach out with any questions.:",
    "Enter an email, in case people want to reach out with any questions.:"
];

const promptUser = () => {
  console.log(`
  =================
  Create a New README File!
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0],
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1],
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: questions[2],
        validate: ToCInput => {
          if (ToCInput) {
            return true;
          } else {
            console.log('No Table of Contents was entered');
            return true;
          }
        }
      },
      {
        type: 'input',
        name: 'steps',
        message: questions[3],
        validate: stepsInput => {
          if (stepsInput) {
            return true;
          } else {
            console.log('You didnt enter installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: questions[4],
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You didnt enter any examples for usage!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'license',
        message: questions[5],
        validate: licenseInput => {
          if (licenseInput) {
            return true;
          } else {
            console.log('You didnt enter any license!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'credits',
        message: questions[6],
        validate: creditsInput => {
          if (creditsInput) {
            return true;
          } else {
            console.log('You didnt enter any credits. It will be left blank');
            return true;
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: questions[7],
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('You didnt enter any tests');
            return true;
          }
        }
      },
      {
        type: 'input',
        name: 'username',
        message: questions[8],
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
            console.log('You didnt enter a github username');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: questions[9],
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You didnt enter an email');
            return false;
          }
        }
      },
      
    
    ])
    
    .then(projectData => {
      const readmeTemplate = writeToFile(projectData)
      fs.writeFile("./README.md", readmeTemplate, err => {
        if(err)
          throw new Error(err)
          else{
            console.log("README file has been created!")
          }
      })
    });
  };

  

// TODO: Create a function to write README file
function writeToFile(data) {
return `
# Title
${data.title}

## Description
${data.description}

## Table of Contents
${data.tableOfContents}

## Installation
${data.steps}

## Usage
${data.usage}

## License
${data.license}

## Credits
${data.credits}

## Tests
${data.tests}

## Github Username
${data.username}

## Email
${data.email}
    `;
};

// TODO: Create a function to initialize app
function init() {
  promptUser()
}

// Function call to initialize app
init();
