// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const licenseBadge = require("./licenseBadges");
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.Title}
  ${licenseBadge(data)}

  ### Project Authored By: ${data.Author}
  ### Description: ${data.Description}
  **

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license) 
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  **

  ## Installation 
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License 
  ${licenseBadge(data)}

  ## Contributing
  If you would like to add to this project, you can [follow me on GitHub](https://github.com/${data.GitHub}).  

  ## Tests
  ${data.Tests}

  ## Questions:
  If you have any questions about this project, you can reach me [on GitHub](https://github.com/${data.GitHub}) or via email at ${data.Email}.


`;
}

module.exports = generateMarkdown;
