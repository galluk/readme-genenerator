const licenseObjects = [
  {
    name: "None",
    badgeURL: "",
    url: ""
  },
  {
    name: "Apache License 2.0",
    badgeURL: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    url: "https://opensource.org/licenses/Apache-2.0"
  },
  {
    name: "GNU General Public License v3.0",
    badgeURL: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    url: "https://www.gnu.org/licenses/gpl-3.0"
  },
  {
    name: "MIT License",
    badgeURL: "https://img.shields.io/badge/License-MIT-yellow.svg",
    url: "https://opensource.org/licenses/MIT"
  },
  {
    name: "BSD 2-Clause 'Simplified' License",
    badgeURL: "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg",
    url: "https://opensource.org/licenses/BSD-2-Clause"
  },
  {
    name: "BSD 3-Clause 'New' or 'Revised' License",
    badgeURL: "https://img.shields.io/badge/License-BSD%203--Clause-orange.svg",
    url: "https://opensource.org/licenses/BSD-3-Clause"
  },
  {
    name: "Boost Software License 1.0",
    badgeURL: "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg",
    url: "https://www.boost.org/LICENSE_1_0.txt"
  },
  {
    name: "Creative Commons Zero v1.0 Universal",
    badgeURL: "https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg",
    url: "http://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    name: "Eclipse Public License 2.0",
    badgeURL: "https://img.shields.io/badge/License-EPL%202.0-red.svg",
    url: "https://opensource.org/licenses/EPL-2.0"
  },
  {
    name: "GNU Affero General Public License v3.0",
    badgeURL: "https://img.shields.io/badge/License-AGPL%20v3-blue.svg",
    url: "(https://www.gnu.org/licenses/agpl-3.0"
  },
  {
    name: "GNU General Public License v2.0",
    badgeURL: "https://img.shields.io/badge/License-GPL%20v2-blue.svg",
    url: "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
  },
  {
    name: "GNU Lesser General Public License v2.1",
    badgeURL: "https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg",
    url: "https://www.gnu.org/licenses/old-licenses/lgpl-2.1"
  },
  {
    name: "Mozilla Public License 2.0",
    badgeURL: "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
    url: "https://opensource.org/licenses/MPL-2.0"
  },
  {
    name: "The Unlicense",
    badgeURL: "https://img.shields.io/badge/license-Unlicense-blue.svg",
    url: "http://unlicense.org"
  }
];

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.badge}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#-installation)  
  - [Usage](#-usage)  
  - [License](#-license)  
  - [Contributing](#-contributing)  
  - [Tests](#-tests)  
  - [Questions](#-questions)  
  
  ### Installation
  To install this project please follow the instrustions below:\n
  ${data.install}
  
  ### Usage
  This project is best used in the following way:\n
  ${data.usage}
  
  ### License
  Copyright [${data.currentYear}] ${data.gituser}

  Licensed under the ${data.license} (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at [${data.licenseURL}](${data.licenseURL}).
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  ### Contributing
  When making contributions to this project please follow these guidelines:\n
  ${data.contribute}
  
  ### Tests
  ${data.testing}

  ### Questions
  To find out more view this project on github at https://github.com/${data.github}/${data.gitrepo}.
  
  For questions or to find out more about this project please email ${data.email}.
  `;
}

// get the line of text that shows the license badge for the given licenseName
function getLicenseInfo(licenseName) {
  return licenseObjects.find(license => license.name === licenseName);
}

module.exports = {
  licenseArray: licenseObjects,
  generateMarkdown: generateMarkdown,
  getLicenseInfo: getLicenseInfo
};
