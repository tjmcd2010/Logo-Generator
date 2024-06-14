//This is a function set up to generate the logo once all of the input is complete
//in the index.js file.
//This is the class that will be used to generate the logo.
const LogoGenerator = require('./lib/LogoGenerator');

async function run() {
  const { characters, textColor, shape, shapeColor } = await promptUserInput();
  const logoGenerator = new LogoGenerator();
  const svg = logoGenerator.generateLogo(characters, textColor, shape, shapeColor);
  writeToFile('logo.svg', svg);
}

run();