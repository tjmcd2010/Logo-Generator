//create inquirer variable to require inquirer
const inquirer = require('inquirer');
//create a function to run the program
inquirer
  .prompt([
// Input created so that a user can enter up to three characters. Then input a color and a shape.
    {
    type: 'input',
    name: 'characters',
    message: ('Enter up to three characters'),
    validate: (input) => {
        if (input.length !== 3) {
        return 'Please enter up to three characters';
        }
        return true;
        }
        },
    {
    type: 'input',
    name: 'color',
    message: ('Enter a color keyword or a hexadecimal number'),
    },
    {
    type: 'list',
    name: 'shape',
    message: 'Select a shape',
    choices: ['circle', 'triangle', 'square']
    },
  ])
  .then((answers) => {console.log(answers);});



