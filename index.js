// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: "What is your Github username?",
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'project',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project: ',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: "What kind of license should your project have?",
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None of the above'],
  },
  {
    type: 'input',
    name: 'install',
    message: "What command should be run to install dependencies?",
  },
  {
    type: 'input',
    name: 'tests',
    message: "What command should be run to run tests?",
  },
  {
    type: 'input',
    name: 'use',
    message: "What does the used need to know about using the repo?"
  },
  {
    type: 'input',
    name: 'contrib',
    message: "What does the used need to know about contributing to the repo?"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Generating ReadMe file..."));
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((input) => {
      writeToFile('.Generated-ReadMe.md', generateMarkdown(input))
    })
 }

// Function call to initialize app
init();
