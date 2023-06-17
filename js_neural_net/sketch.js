//visualization

//list of n points we will use to "train" the perceptron
const n = 2000;
let training = new Array(n);

//A perceptron object
let ptron;

//trai perceptrion with one "point" object at a time
let count =0;

//Coordinate space
let xmin = -1;
let ymin = -1;
let xmax = 1;
let ymax = 1;

//line y=mx+ b
function f(x){
    let y = 0.3 * x + 0.4;
    return y;
}

//setup() , p5.js function that runs ONCE when program starts
function setup(){
    createCanvas(400,400);

    //Perecptrion has 3 inputs (x,x2, bias)
    // second values i the learning rate
    ptron = new Perceptron(3, 0.001)

    
}



//draw(), p5.js fcuntions runs continuosly from top to bottom until the program ends(-1)
