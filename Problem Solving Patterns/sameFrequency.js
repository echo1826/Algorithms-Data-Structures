// Write a function called sameFrequency. Given two positive integers, findout if the two numbers have the same frequency of digits.
// Solution must have the following complexities: Time: O(n)

// function that takes in two values
// check each digit to make sure they have the same frequency of digits, don't care about the order
// return true if same frequency, false if not
// we only care about two positive integers, so no floats and negatives
// need to cast the ints into strings in order to count the number of digits
function sameFrequency(val1, val2) {
    val1 = val1.toString();
    val2 = val2.toString();
    if(val1.length !== val2.length) {
        return false;
    }
    const lookup = {};
    for(let i = 0; i < val1.length; i++) {
        let digit = val1[i];
        lookup[digit] ? lookup[digit] += 1 : lookup[digit] = 1;
    }
    for(let i = 0; i < val2.length; i++) {
        let digit = val2[i];
        if(!lookup[digit]) {
            return false;
        }else {
            lookup[digit] -= 1;
        }
    }
    return true;
}

// SOLUTION sameFrequency COUNTER FREQUENCY
function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}

console.log(sameFrequency(181, 281));