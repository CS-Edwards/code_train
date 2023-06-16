console.log('go go neural net');




class Percepton{

    constructor(n,lr){
        this.weights = new Array(n);
        this.#initializeWeights();
        this.learningRate = lr;


    }

    //init weights with  random number  -1,1
    #initializeWeights(size){

        for(let i =0; i< this.weights.length; i++){
            this.weights[i] = Math.random()*2-1;
        }

    }
    //Sign() activiation function value>= 0 = +1, otherwise -1
     sign(sum){
        if (sum>= 0){
            return 1;
        } else{
            return -1;
        }
    }

  

    //Guess() computes the weighted sum of inputs[] 
    //returns value of the sign() function
    guess(inputs){
       let sum = 0;
        for(let i=0; i < inputs.length; i++){
            sum += inputs[i]*this.weights[i];
            
        } 

        return this.sign(sum);
    }

    train(inputs,target){
        let guess = this.guess(inputs);
        let error = target - guess;

        //adjust weights by error percentage and learning rate
        for(let i=0; i<this.weights.length;i++){
            this.weights[i] += error * inputs[i] * this.learningRate;
        }

    }



}