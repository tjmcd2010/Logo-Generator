//Defining the necessary modules for handling user input. Inquirer is an NPM program, fs is a module for 
//file system operations. Custom shape classes are defined in the shapes.js file in the lib folder
const inquirer = require('inquirer');
const { Shape, Circle, Square, Triangle } = require('./lib/shapes');
const fs = require('fs');
//Prompts the user via the command line interface to input data that will be used to create the logo.svg file
async function promptUserInput() {
  const questions = [
    { type: 'input', name: 'text', message: 'Enter up to 3 characters for the logo text', validate: (input) => input.length === 3 },
    { type: 'input', name: 'textColor', message: 'Enter a color keyword or hexadecimal value for the text' },
    { type: 'list', name: 'shape', message: 'Select a shape for the logo', choices: ['circle', 'triangle', 'square'] },
    { type: 'input', name: 'shapeColor', message: 'Enter a color keyword or hexadecimal value for the shape' },
  ];
  return inquirer.prompt(questions);
}
//A function to generate an SVG string based on the input that the user provided in the prompts above
function generateSVG(logoDetails) {
  const { text, textColor, shape, shapeColor } = logoDetails;
  let shapeObject;
  // Uses a switch statement to create the specific shape object based on the shape property
  switch (shape) {
    case 'circle': shapeObject = new Circle(shapeColor); break;
    case 'triangle': shapeObject = new Triangle(shapeColor); break;
    case 'square': shapeObject = new Square(shapeColor); break;
  }
  //Renders the shape and adds text to the SVG string and returns the final SVG string
  return `${shapeObject.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
}
//attempts to write the file and provides either a success or error message.
async function writeToFile(fileName, data) {
  try {
    await fs.promises.writeFile(fileName, data);
    console.log('SVG logo generated successfully!');
  } catch (err) {
    console.error('Error writing SVG logo to file:', err);
  }
}
//Function to orechestrate the generation ot the svg logo, and ensures the operations run asynchronously
async function run() {
  const logoDetails = await promptUserInput();
  const svgContent = generateSVG(logoDetails);
  await writeToFile('logo.svg', svgContent);
};
run();
