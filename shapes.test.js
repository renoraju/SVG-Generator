const { describe } = require("node:test")
const {Circle, Square, Triangle} = require("./shapes")

describe('Circle', () => {
    test('renders properly', () => {
        const shape = new Circle();
        var color= ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" width="100" height="100" fill="${this.color}"` )


    });

});



describe('Square', () => {
    test('renders properly', () => {
        const shape = new Square();
        var color= ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" width="100" height="100" fill="${this.color}"` )

    });

});

describe('Triangle', () => {
    test('renders properly', () => {
        const shape = new Triangle();
        var color= ('yellow')
        shape.setColor(color);
        expect(shape.render()).toEqual(`height="100%" wdith="100%" points="0,200 300,200 150,0" fill="${this.color}"` )

    });

});