function isNarcissistic(number) {
    
    const digits = number.toString().split('').map(Number);// Convert number to array of digits
    const numDigits = digits.length;

    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, numDigits), 0);
    return sum === number
     
    // if (sum === number)
    // {
    //     return true ;
    // }
    // else {
    //     return false ;
    // }
}
console.log(isNarcissistic(1455));
console.log(isNarcissistic(7));
console.log(isNarcissistic(153));

