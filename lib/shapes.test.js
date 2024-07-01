//create tests to generate the svg for example via jest
//pull in information from the shapes.js file and utilize jest
const { Triangle, Circle, Square } = require('./shapes')

test('properly create a circle', () => {
    expect(new Circle('red', 'ABC')).toBeInstanceOf(Circle);
})
test('properly create a triangle', () => {
    expect(new Triangle('green', 'DEF')).toBeInstanceOf(Triangle);
})
test('properly create a square', () => {
    expect(new Square('blue', 'GHI')).toBeInstanceOf(Square);
})