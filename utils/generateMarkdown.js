// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

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
