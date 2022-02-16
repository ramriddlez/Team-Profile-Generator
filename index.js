const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const teamArray = [];

function init() {
   inquirer.prompt([
    {
      // role selection
      type: 'list',
      message: 'What is the role for this Employee?',
      name: 'role',
      choices: ["Engineer", "Intern", "Manager"]
    }])
    .then(function (data) {
        //console.log(data)
        if (data.role === "Engineer") {
            inquirer.prompt([
            {
                name: "name",
                message: "What is your name?",
                type: "input"
            },
            {
                name: "ID",
                message: "What is your ID Number?",
                type: "input"
            },
            {
                name: "github",
                message: "What is your GITHUB Username?",
                type: "input"
            },
            {
                name: "email",
                message: "What is your Email?",
                type: "input",
                validate: function (name) {
                    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(name)
                    if (valid) {
                        return true
                    } else {
                        return 'Please enter a proper email.'
                        
                    }
                }
            }
            ]).then((data) => {
                

            }
        }});        
        
    }
init();

console.log(data)


//     {
//       // Description
//       type: 'input',
//       message: 'Add a description for your project:',
//       name: 'description',
//     },
//     {
//       // How to install
//       type: 'input',
//       message: 'Provide your installation instructions:',
//       name: 'install',
//     },


// //write function on writing to the generateMardown file
// function writeToFile(generateMarkdown, data) {
//     fs.writeFile(generateMarkdown, data, (err) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log("Success!")
//     });
//   }
  
//   //initialize the entire document -- ask questions, init writeToFile function then use generatemarkdown data to write a new file 
//   function init() {
//     inquirer.prompt(questions)
//       .then((data) => {
//         const response = generateMarkdown(data);
//         const filename = `${data.title}_README.md`;
//         writeToFile(filename, response)
//       })