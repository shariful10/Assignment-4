/******************************************
4. Find Out Bad Data
******************************************/ 
function findingBadData(num) {
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] < 0) {
            count++;
        }
    }
    return count;
}

const inputArray = [ -4, -9, -5, -33, -55 ];
const data = findingBadData(inputArray);
console.log(data);
  