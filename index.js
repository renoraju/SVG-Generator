const filesystem = require("./node_modules")
const inquirer= require("inquirer")
const { Circle, Triangle, Square}= require("./shapes")

class Svg{
  constructor(){
        this.textElement = ''
        this.shapeElement = ''

  }

  render(){
        return `svg version="1.1" xmins="https://www.w3.org/2000/svg" width="300"`

  }
  setTextElement(text,color){
       this.textElement = `<text x="150" y="125" font-size="60 text-anchor= "middle"`
  }
 
  setShapeElement(shape){
        this.shapeElement = render()

  }


}

const questions = [
    {

        type:"input",
        name:"text",
        message: "Enter up to three characters"

    },
    {
        type:"input",
        name:"text-color",
        message: "Enter a color keyword or hexadecimal number"



    },
    {
        type:"input",
        name:"shape-color",
        message: "Enter up a color keyboard or hexadecimal number for the shape"


    },
    {
        type:"list",
        name:"shape-type",
        message: "Which shape would you like",
        choices: ["Circle", "Square", "Triangle"]


    },

]