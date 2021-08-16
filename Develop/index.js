// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer'); 

// TODO: Create an array of questions for user input
const questions = [
    {                                                     
        type: 'input',
        name: 'title',                          
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Insert your description:'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Please type in your table of contents:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instruction examples'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Did anyone else contribute?'
    },
    {
        type: 'list',
        name: 'licences',
        message: 'What licence are you using?',
        choices: ["MIT", "Creative Commons Attribution 4.0","Mozilla Public License 2.0"]
    },
    {
        type: 'input',
        name: 'features',
        message: 'What features are included?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How would you like others to contribute?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test this project?'
    },
];

function generateTemplate(answers) {
    const template = `#Title: ${answers.title}\n\n
    ##Descritption: ${answers.description}\n
    ##Installation: ${answers.installation}\n
    ##Table of Contents: ${answers.contents}\n
    ##Usage: ${answers.usage}\n
    ##Credits: ${answers.credits}\n
    ##License: ${answers.licences}\n
    ##Features: ${answers.features}\n
    ##Contributing: ${answers.contributing}\n
    ##Tests: ${answers.test}
    `
    return template
}

// TODO: Create a function to write README file
function writeToFile(data) {
 fs.writeFile("README.md", data, err => {if (err) throw err})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(object => {
        writeToFile(generateTemplate(object))
        console.log("README Generated!")
    })
    .catch(err => console.log(err,"Something went wrong")) //consle.log if an error
}

// Function call to initialize app
init();

