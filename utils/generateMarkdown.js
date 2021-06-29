
//generate markdown for README
function generateMarkdown(data) {

return `# ${data.projectName}
  
## Table of Contents

1. [Description](#description)

2. [Installation](#installation)

3. [Usage](#usage)

4. [License](#license)

5. [Image](#Image)

6. [Languages/Applications](#languages-applications)

7. [Repository URL](#repository-url)

8. [Website](#website)

9. [Credits](#credits)

## Description
${data.desc}

## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}

## Image
![screenshot](${data.imageGif})

## Languages/Applications
${data.language}

## Repository URL
${data.repo} 

## Test

## Website
${data.appUrl}   
    
## Credits
${data.creditRef}

### If you have any additional questions regarding this project, please contact: ${data.emailAddress}


    `;
}
module.exports = generateMarkdown;






