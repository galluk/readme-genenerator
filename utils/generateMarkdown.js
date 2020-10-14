// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}

  ## Description 
   
  ## Table of Contents
  [*Installation](#-installation)
  [*Usage](#-usage)
  [*License](#-license)
  [*Contributing](#-contributing)
  [*Tests](#-tests)
  [*Questions](#-questions)

  ### Installation
  ${data.install}

  ### Usage
  ${data.usage}

  ### License
  ${data.license}

  ### Contributing
  ${data.contribute}
  
  ### Tests
  ${data.testing}

  ### Questions
  To find out more see my github at https://github.com/${data.github}.

  For questions or to find out more about this project please email ${data.email}.
`;
}

module.exports = {
  generateMarkdown: generateMarkdown
};
