var inquirer = require("inquirer");
var fs = require('fs');
var gmd = require("./utils/generateMarkdown.js");
const { licenseArray } = require("./utils/generateMarkdown.js");

// get the license names from the licenseobject array for use in the license prompt
const licenseNames = Array.from(licenseArray, ele => ele.name);

// array of questions for user
const questions = [
    // {
    //     type: "input",
    //     message: "Enter the Project title:",
    //     name: "title"
    // },
    // {
    //     type: "input",
    //     message: "Enter the Project description:",
    //     name: "description"
    // },
    // {
    //     type: "input",
    //     message: "Enter the Project installation instructions:",
    //     name: "install"
    // },
    // {
    //     type: "input",
    //     message: "Enter the Project usage information:",
    //     name: "usage"
    // },
    // {
    //     type: "input",
    //     message: "Enter the Project contribution guidelines:",
    //     name: "contribute"
    // },
    // {
    //     type: "input",
    //     message: "Enter the Project test instructions:",
    //     name: "testing"
    // },
    {
        type: "list",
        message: "Select a license for the Project:",
        name: "license",
        choices: licenseNames
    },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "gituser"
    },
    {
        type: "input",
        message: "Enter your email address:",
        name: "email"
    }
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

        // get the badge icon url
        data.badge = gmd.getLicenseBadge(data.license);

        // on return, for now save to file to test data
        const filename = "README-generated.md";
        const contents = gmd.generateMarkdown(data);
        writeToFile(filename, contents);
    });
}

// function call to initialize program
init();
