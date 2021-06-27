// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.projectName}

    ## Description:
      ${data.desc}

    ## Installation: 
      ${data.install}

    ## Usage: 
      ${data.usage}

    ## License: 
      ${data.license}

    ## Image: 
      ${data.imageGif}
    
    ## Credits: 
      ${data.creditRef}









`;
}

module.exports = generateMarkdown;
