const fs = require('fs');

// a function that returns a license badge and url based on which license is passed in
function renderLicenseBadge(data) {
    let badgeURL = data.license
    let url = ''
    switch (badgeURL) {
      case 'MIT' : url = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
      case 'GNU AGPLv3' : url = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
      break;
      case 'GNU GPLv3'  : url = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
      case 'GNU LGPLv3'  : url = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
      break;
      case 'Unlicense'  : url = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
      break;
    }
    return url
}

// generate markdown for README
function generateMarkdown(data) {
  // console.log(data)

  return `
# ${data.title} ${renderLicenseBadge(data)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributing)
* [Github](#github)
* [Tests](#tests)
* [Questions](#questions)

<a name='description'></a>
## Description
${data.description}

<a name='installation'></a>
## Installation
${data.installation}

<a name='usage'></a>
## Usage
The deployed app can be found at ${data.usage2}.
To initiate the app from your terminal, type ${data.usage}.

<a name='license'></a>
## License
This application is covered by ${data.license}.

<a name='contributing'></a>
## Contributions
${data.contributing}

<a name='github'></a>
## Github
This app can be found on GitHub at ${data.github}.

<a name='tests'></a>
## Tests
${data.tests}

<a name='questions'></a>
## Questions
Have a question about this app? [Send an e-mail](${data.questions}).

##### This README was generated using [Bri's README generator](https://github.com/bcassellius/readme-generator).
  `
};

module.exports = generateMarkdown;