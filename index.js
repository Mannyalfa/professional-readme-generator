//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

//array of questions for user input

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
        message: "Choose a license: ",
        choices: [
            "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
            "Apache [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
            "Mozilla [![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
            "IBM [![License](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)", 
            "ZLIB [![License](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib",
            "GNU [![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)",

            "None [![License](https://img.shields.io/badge/no-license-lightgrey)",
            ]
    },
    {
        type: 'checkbox',
        name: "language",
        message: "Enter languages and applications used to develop and deploy this project:",
        choices: [
        "HTML",  

        "CSS", 

        "JavaScript",

        "JSON",

        "Inquirer",

        "NPM"
        ]
    },

    {
        type: 'input',
        name: "repo",
        message: 'Enter repository URL',
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


//write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Markdown file has been created.')
    });
}


//initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            const fileName = "./dist/README.md"
            const markdown = generateMarkdown(data)
            writeToFile(fileName, markdown)
        })
}

//initialize app
init();
