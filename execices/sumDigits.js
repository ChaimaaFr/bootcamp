function Digit(n) {
    const num = n.toString();

    if (num.length === 1) {
        return parseInt(num);
    }

    const sumOfDigit = num
        .split('')  // Convert string to array of digits
        .map(Number) // Convert each digit from string to number
        .reduce((acc, acc1) => acc + acc1, 0);

    return Digit(sumOfDigit);
}

const result = Digit(123);
console.log(result);
