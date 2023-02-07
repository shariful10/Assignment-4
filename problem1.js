/******************************************
1. Multiply The Input Number By 3, Then add 10, Then divide by 2, Then Subtract 5, and Returned The Output.
******************************************/ 
function mindGame(num){
    let multiplicationOfNum = num * 3;
    let sumOfNum = multiplicationOfNum + 10;
    let divisionOfNumber = sumOfNum / 2;
    let substructionOfNum = divisionOfNumber - 5;
    return substructionOfNum;
}

let positiveNumber = 33;
let number = mindGame(positiveNumber);
console.log(number);