const generatePage = (title, github) => {
    return `
# ${title}
## Description
## Installation
## Usage
## License
## Contributing
## Tests
## Questions
## "https://github.com/${github}"
    `;
};
module.exports = generatePage;
