
function train(size, func){

    let trainArray = new Array(size);

    //populate array with data
    for(let i = 0; i<trainArray.length;i++){
        let x = random(xmin, xmax);
        let y = random(ymin, ymax);
        let answer = 1;
        if (y < func(x)) answer = -1;
        trainArray[i] = {
          input: [x, y, 1],
          output: answer
        };


    }
    console.log("Training function complete!")
    return trainArray;

}