/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let num = 1;
    for(num = 1; n > 1; num = num * (n--));
    return num;
}; 
alert(factorial(n));
