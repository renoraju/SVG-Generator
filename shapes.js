class Shape{
    constructor() {
        this.color = '';
    }
    setColor(color){
        this.color = color
    }
}


class Circle extends Shape{

    render(){
        return `<circle cx="150" cy="100" r="80" width="100" height="100" fill="${this.color}" />`

    }


}

class Triangle extends Shape{

    render(){
        return `<polygon height="100" width="100"  fill="${this.color}" />`

    }


}

class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200"  fill="${this.color}" />`

    }


    
}

module.exports={ Square,Circle,Triangle }