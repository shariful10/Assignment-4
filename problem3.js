/******************************************
3. If The Number Is Less Than 7 Return It Or If The Number Is Getter Than 7 Return The Dubble Of The Input Number.
******************************************/ 
function isLGSeven(num) {
    let substruction = num - 7;
    if (substruction < 7) {
        substruction = num - 7;
        return substruction;
    } else {
        return num * 2;
    }
}
const inputNum = 15;
console.log(isLGSeven(inputNum));
