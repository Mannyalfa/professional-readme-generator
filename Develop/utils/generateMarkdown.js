// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function to generate markdown for README
ffunction renderLicenseBadge(license) {

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
      [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
    }
  
   else if (license === 'IBM') {
      return `
      [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
      `
    }

    else if (license === 'ZLIB') {
      return `
      [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib) 
        `
    }
    
    else if(license === 'None'){
      return ` `
    }
  
  };

  return `# ${ data.projectName }

  ## by ${ data.name }
      ===================================================================================
## Table of Contents

      [Installation](#installation)
      * [Usage](#usage)
      * [License](#license)
      * [Credits](#credits)

    ## Description:
        ${ data.desc }

    ## Installation:
        ${ data.install }

    ## Usage:
        ${ data.usage }

    ## License:
        ${ data.license }

    ## Image:
        ${ data.imageGif }

    ## Website:
        ${ data.appUrl }   
    
    ## Credits:
        ${ data.creditRef }

    #### If you have any additional questions regarding this project, please contact: ${ data.emailAddress }









        `;
}

module.exports = generateMarkdown;
