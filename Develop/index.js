// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generatePage = require('./src/page-template');
const generateMarkdown = require("./utils/generateMarkdown");
//const generateLicense = require()

//    `https://img.shields.io/badge/license-${userLicense}-blue`

// TODO: Create an array of questions for user input

const questions = [
        {
            type: 'input',
            name: 'username ',
            message: 'Enter GitHub username',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your name to continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'Enter email address',
            validate: emailAddressInput => {
                if (emailAddressInput) {
                    return true;
                } else {
                    console.log('Enter an email to continue');
                    return false;
                }
            }
        },
        
{
    type: 'input',
        name: 'projectName',
            message: 'Enter project name',
                validate: projectNameInput => {
                    if (projectNameInput) {
                        return true;
                    } else {
                        console.log('Enter project name to continue');
                        return false;
                    }
                }
},
{
    type: 'input',
        name: 'desc',
            message: 'Enter project description',
                validate: descInput => {
                    if (descInput) {
                        return true;
                    } else {
                        console.log('Enter project description to continue');
                        return false;
                    }
                }
},
{
    type: 'input',
        name: 'install',
            message: 'Steps required to install project',
                validate: installInput => {
                    if (installInput) {
                        return true;
                    } else {
                        console.log('Enter steps required to install project');
                        return false;
                    }
                }
},
{
type: 'input',
name: 'usage',
    message: 'Enter instructions and examples for use',
        validate: descrInput => {
            if (descrInput) {
                return true;
            } else {
                console.log('Enter instruction to continue');
                return false;
            }
        }
},
{
    type: "list",
        name: "license",
            message: "Chose a license: ",
                choices: ["Apache", "GNU", "MIT", "Mozilla", "Open"]
},
{
    type: 'input',
        name: 'appUrl',
            message: 'Enter deployed application URL (if available)',
},


{
    type: 'input',
        name: 'imageGif',
            message: 'Enter a gif image (if available)',
},
{
    type: 'input',
        name: 'creditRef',
            message: 'Include credits, contributors and/or references if applicable'
},
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Markdown file has been created.')
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            const fileName = "./dist/README.md"
            const markdown = generateMarkdown(data)
            writeToFile(fileName, markdown)
        })
}

// Function call to initialize app
init();
