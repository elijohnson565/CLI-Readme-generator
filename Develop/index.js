// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    "What is your projects title?: ", 
    "Enter a description of your project.: ", 
    "Enter a table of contents (Optional).: ", 
    "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.: ", 
    "Provide instructions and examples for use.: ",
    "Enter a project license for your project.: ",
    "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.: ",
    "Go the extra mile and write tests for your application. Then provide examples on how to run them here.: ",
    "Enter your github username, in case people want to reach out with any questions.: ",
    "Enter an email, in case people want to reach out with any questions.: "
];

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'about',
        message: questions[0],
        when: ({ confirmAbout }) => confirmAbout
      }
    ]);
  };


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
