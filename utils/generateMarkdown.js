// function to generate markdown for README
function generateMarkdown(data) {
  
  const licenseBadgeURLs = {
    "MIT": "https://img.shields.io/badge/License-MIT-yellow.svg",
    "APACHE2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    "Boost1.0": "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg",
    "GLP3.0": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "BSD2": "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg",
    "BSD3": "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
    "None": ""
  };

  // Generate license badge markdown based on selected license
  const licenseBadge = data.license ? `[![License]( ${licenseBadgeURLs[data.license]} )]( https://opensource.org/licenses/${data.license} )` : '';

  return `
# ${data.title}

${licenseBadge}


## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Screenshot](#screenshot)

## Installation
${data.installation}

## Usage
${data.usage}

## Features
${data.features}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributors}

## Tests
To run tests, use the following command:
\`\`\`
${data.test}
\`\`\`

## Questions
If you have any questions about the project, you can contact me via GitHub (${data.github}) or email (${data.email}).

## Screenshot
![Screenshot](/${data.screenshot})
`;
}

module.exports = generateMarkdown;
