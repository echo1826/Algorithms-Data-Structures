function naiveStringSearch(longStr, shortStr) {
    let counter = 0;
    for (let i = 0; i < longStr.length; i++) {
        for(let j = 0; j < shortStr.length; j++) {
            console.log(i, j)
            if(shortStr[j] !== longStr[i + j]) {
                break;
            }
            if(j === shortStr.length - 1) {
                counter++;
            }
        }
    }
    return counter;
}

console.log(naiveStringSearch('lorie loled', 'lol'));
// solution
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}