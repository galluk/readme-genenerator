const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// pull in what we need from generateMarkdown.js
const gmd = require("./utils/generateMarkdown.js");
const { licenseArray } = require("./utils/generateMarkdown.js");

// get the license names from the licenseobject array for use in the license prompt
const licenseNames = Array.from(licenseArray, ele => ele.name);

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter the Project title:",
        name: "title"
    },
    {
        type: "input",
        message: "Enter the Project description:",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the Project installation instructions:",
        name: "install"
    },
    {
        type: "input",
        message: "Enter the Project usage information:",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter the Project contribution guidelines:",
        name: "contribute"
    },
    {
        type: "input",
        message: "Enter the Project test instructions:",
        name: "testing"
    },
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
        message: "Enter the GitHub repository name:",
        name: "gitrepo"
    },
    {
        type: "input",
        message: "Enter your email address:",
        name: "email"
    }
];

// process the user answers and write readme file
async function processAnswers(data) {
    try {
        // get the badge icon url
        license = gmd.getLicenseInfo(data.license);
        if (license) {
            data.badge = `[![License](${license.badgeURL})](${license.url})`;
            data.licenseURL = license.url;
        }

        // get the current year for copyright notice
        data.currentYear = new Date().getFullYear();

        // generate contents
        const filename = "./output/README.md";
        const contents = gmd.generateMarkdown(data);

        // and save the file
        await writeFileAsync(filename, contents);
        console.log("The README.md file has been successfully created in output folder!");

    } catch (err) {
        console.log('The README.md file was not generated. The following error was returned: \n' + err);
    }
}

// function to initialize program
function init() {

    // prompt for the questions
    inquirer
        .prompt(questions)

        .then(function (data) {
            processAnswers(data);
        });
}

// function call to initialize program
init();
