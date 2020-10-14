var inquirer = require("inquirer");
var fs = require('fs');
var gmd = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter the Project title:",
        name: "title"
    },
    // {
    //     type: "input",
    //     message: "Enter the Project description:",
    //     name: "description"
    // },
    // {
    //     type: "input",
    //     message: "Enter installation instructions:",
    //     name: "install"
    // },
    // {
    //     type: "input",
    //     message: "Enter project usage information:",
    //     name: "usage"
    // },
    // {
    //     type: "input",
    //     message: "Enter contribution guidelines:",
    //     name: "contribute"
    // },
    // {
    //     type: "input",
    //     message: "Enter test instructions:",
    //     name: "testing"
    // },
    // {
    //     type: "list",
    //     message: "Select a license for the project:",
    //     name: "license",
    //     choices: [
    //         "None",
    //         "Apache License 2.0",
    //         "GNU General Public License v3.0",
    //         "MIT License",
    //         "BSD 2-Caluse 'Simplified' License",
    //         "BSD 3-Caluse 'New' or 'Revised' License",
    //         "Boost Software License 1.0",
    //         "Creative Commons Zero v1.0 Universal",
    //         "Eclipse Public License 2.0",
    //         "GNU Affero General Public License v3.0",
    //         "GNU General Public License v2.0",
    //         "GNU Lesser General Public License v2.1",
    //         "Mozilla Public License 2.0",
    //         "The Unilicense"
    //     ]
    // },
    // {
    //     type: "input",
    //     message: "Enter your GitHub username:",
    //     name: "gituser"
    // },
    // {
    //     type: "input",
    //     message: "Enter your email address:",
    //     name: "email"
    // }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });

}

// function to initialize program
function init() {
    // prompt for the questions
    inquirer.prompt(questions).then(function (data) {

        // on return, for now save to file to test data
        const filename = "README.md";
        const contents = gmd.generateMarkdown(data);
        writeToFile(filename, contents);
    });
}

// function call to initialize program
init();
