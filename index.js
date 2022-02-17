const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { type } = require('os');
const teamArray = [];
const generateMarkdown = require('./assets/index.html')
const generateCards = require('')

function init() {
   inquirer.prompt([
        {
      // role selection
      type: 'list',
      message: 'What is the role for this Employee?',
      name: 'role',
      choices: ["Engineer", "Intern", "Manager"]
        }
    ]).then(function (data) {
        //console.log(data)
        if (data.role === "Engineer") {
            inquirer.prompt([
            {
                name: "name",
                message: "What is your name?",
                type: "input"
            },
            {
                name: "Id",
                message: "What is your ID Number?",
                type: "number"
                //add validate function to validate if number between 1-10
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
            ]).then(function (data) {
                //variablizing using the Engineer child class
                const newEngineer = new Engineer(data.name, data.Id, data.email, data.github);
                teamArray.push(newEngineer);
                addUser();
            })
            
        } else if (data.role === "Manager") {
            inquirer.prompt([
                {
                    name:"name",
                    questions: "What is your name?",
                    type: "input"
                },
                {
                    name: "Id",
                    message: "What is your ID Number?",
                    type: "number"
                },
                {
                    name: "officenumber",
                    message: "What is your office phone number?",
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
            ]).then(function (data) {
                //variablizing using the Manager child class
                const newManager = new Manager(data.name, data.Id, data.email, data.officenumber);
                teamArray.push(newManager);
                addUser();
            });
            
        } else if (data.role === "Intern") {
            inquirer.prompt([
                {
                    name:"name",
                    questions:"What is your name",
                    type: "input"
                },
                {
                    name: "Id",
                    message: "What is your ID?",
                    type: "number"
                },
                {
                    name: "school",
                    message: "What is your school?",
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
            ]).then(function (data) {
                //variablizing using the Engineer child class
                const newIntern = new Intern(data.name, data.Id, data.email, data.school);
                teamArray.push(newIntern );
                addUser();
            })
        }
    })
}    


function addUser(){
    inquirer.prompt([
        {   
            name: "continue",
            message: "Do you want to add another team member?",
            type: "confirm"
        }
    ]).then(function(confirmRes){
         confirmRes.continue ? init() : generateMarkdown();
    })

};

// .catch(function (err) {
//     console.log(err);
// });

function writeToFile(generateMarkdown, data) {
    fs.writeFile(generateMarkdown, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('success!')
})
};




init();

writeToFile();



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