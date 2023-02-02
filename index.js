// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache']

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },{
        type: "input",
        message: "Please enter a description of your project.",
        name: "description"
    },{
        type: "input",
        message: "What are the installation instructions for this project? Write NONE if no instructions.",
        name: "install"
    },{
        type: "input",
        message: "How would you like your application to be used?",
        name: "usage"
    },{
        type: "input",
        message: "Who contributed on this project?",
        name: "guidelines"
    },{
        type: "input",
        message: "What are the Test Instructions?",
        name: "test"
    },{
        type: "list",
        message: "Please select a license.",
        choices: licenses,
        name: "license"
    },{
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },{
        type: "input",
        message: "What is your email address?",
        name: "email",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log ("Success!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README-GENERATOR.md" ,generateMarkdown(data));
    })
}

// Function call to initialize app
init();
