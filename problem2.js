/******************************************
2. Find Out Even Or Odd Number.
******************************************/ 
function evenOdd(word){
    let size = word.length;
    if(size % 2 === 0){
        return 'even';
    }
    else {
        return 'odd';
    }
}
let result = evenOdd('Batch7');
console.log(result);
