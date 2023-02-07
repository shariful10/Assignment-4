/******************************************
First the power of gems of three friends is multiplied by the input number then 
if the total number obtained is more than 1000 then 2000 is subtracted from 
that number and output is given and if the number is less than 1000 then it is shown as direct output.
******************************************/

function gemsToDiamond(g1, g2, g3) {
    let total = g1 * 21 + g2 * 32 + g3 * 43;
    if (total > 1000 * 2) {
        total -= 2000;
    }
    return total;
}

let friend1Gems = 20;
let friend2Gems = 200;
let friend3Gems = 50;
let result = gemsToDiamond(friend1Gems, friend2Gems, friend3Gems);
console.log(result); 