//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {

  if (license === 'MIT') {
    return `
      [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      `
  }

  else if (license === 'Apache') {
    return `
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 
    `
  }

  else if (license === 'Mozilla') {
    return `
      [![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
      `
  }

  else if (license === 'IBM') {
    return `
      [![License](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
      `
  }

  else if (license === 'ZLIB') {
    return `
      [![License](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib) 
        `
  }
  //If there is no license, return an empty string
  else if (license === 'None') {
    return ` `
  }

};

//generate markdown for README
function generateMarkdown(data) {

  return `# ${data.projectName}
  ===================================================================================
## Table of Contents:

    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Languages/Applications](#languages/applications)
    *[Credits](#credits)

    ## Description:
        ${data.desc}

    ## Installation:
        ${data.install}

    ## Usage:
        ${data.usage}

    ## License:
        ${data.license}

    ## Image:
    ![screenshot](${data.imageGif})

    ## Languages/Applications:
        ${data.language}

    ## Repository URL:
      ${data.appUrl} 

    ## Website:
        ${data.appUrl}   
    
    ## Credits:
        ${data.creditRef}

    #### If you have any additional questions regarding this project, please contact: ${data.emailAddress}


    `;
}
module.exports = generateMarkdown;






