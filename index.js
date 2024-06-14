const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const fs = require('fs');
async function promptUserInput() {
  const questions = [
    { type: 'input', name: 'text', message: 'Enter up to 3 characters for the logo text', validate: (input) => input.length <= 3 },
    { type: 'input', name: 'textColor', message: 'Enter a color keyword or hexadecimal value for the text' },
    { type: 'list', name: 'shape', message: 'Select a shape for the logo', choices: ['circle', 'triangle', 'square'] },
    { type: 'input', name: 'shapeColor', message: 'Enter a color keyword or hexadecimal value for the shape' },
  ];
  return inquirer.prompt(questions);
}
function generateSVG(logoDetails) {
  const { text, textColor, shape, shapeColor } = logoDetails;
  let shapeObject;
  switch (shape) {
    case 'circle': shapeObject = new Circle(shapeColor); break;
    case 'triangle': shapeObject = new Triangle(shapeColor); break;
    case 'square': shapeObject = new Square(shapeColor); break;
  }
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeObject.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
}
async function writeToFile(fileName, data) {
  try {
    await fs.promises.writeFile(fileName, data);
    console.log('SVG logo generated successfully!');
  } catch (err) {
    console.error('Error writing SVG logo to file:', err);
  }
}
async function run() {
  const logoDetails = await promptUserInput();
  const svgContent = generateSVG(logoDetails);
  await writeToFile('logo.svg', svgContent);
};
run();
