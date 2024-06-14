//create tests to generate the svg for example via jest
const {Triangle, Circle, Square} = require('./shapes.js');
describe('Triangle', () => {
    test('should render a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });
});
describe('Circle', () => {
    test('should render a green circle', () => {
        const shape = new Circle();
        shape.setColor('green');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    });
});
describe('Square', () => {
    test('should render a red square', () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toEqual('<rect width="200" height="200" fill="red" />');
    });
});
