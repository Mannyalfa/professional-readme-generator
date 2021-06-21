// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const generateLicense = require()

`https://img.shields.io/badge/license-${userLicense}-blue` 

// TODO: Create an array of questions for user input
const questions = [    {
    type: 'input',
    name: 'username ',
    message: 'Enter GitHub username',
},
{
    type: 'input',
    name: 'emailAddress',
    message: 'Enter email address',
},
{
    type: 'input',
    name: 'projectName',
    message: 'Enter project name',
    validate: projectName => {
        if (projectName) {
            return true;
        } else {
            console.log('Enter Project Name');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'descr',
    message: 'Enter project description',
    validate: descrInput => {
        if (descrInput) {
            return true;
        } else {
            console.log('Enter Project Description');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'appUrl',
    message: 'Enter deployed application URL if available',
},
{
    type: 'input',
    name: 'imageGif',
    message: 'Enter a gif image (if available)',
},
{
    type: 'input',
    name: 'creditRef',
    message: 'Include credits and/or references if applicable'
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
