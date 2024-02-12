
//loops
//task 1
function calculateFactorial(num) {
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}

let num = 5;
let result = calculateFactorial(num);
console.log("The factorial of", num, "is:", result);

//task2
let number = 123542;
let numberAsString = number.toString();
let Digitscount = 0;

for (let i = 0 ; i <numberAsString.length;i++)
{
    if (!isNaN(parseInt(numberAsString[i])))
    {
        Digitscount ++;

    }
}
console.log("the number",number,"has",Digitscount,"digits");
//task2 
function countDigits(num) {
    let count = 0;
    while (num !== 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

let num = 123542;
let numberDigits = countDigits(num);
console.log("Number of digits:", numberDigits);

//task 3
let rows = 4;
let tree = '';

for (let i = 1; i <= rows; i++) {
    let space = '';
    let star = '';

    for (let j = 1; j <= rows - i; j++) {
        space += ' ';
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        star += '*';
    }

    tree += space + star + space + '\n';
}

console.log(tree);

//Functions & Reusability
// task 1
 //function to calculate factorial
 function calculateFactorial(num)
 {
    if (num === 0 || num === 1)
    {
        return 1;
    }
    else {
        let factorial = 1;
        for (let i = 2; i <= num; i ++)
        {
            factorial *= i;
        }
        return factorial;
    }
 }
 //function to calculate combinatio using factorial function

 function combinator(n,p){
    if (p>n)
    {
        return;
    }
    let numerator = calculateFactorial(n);
    let denominator = calculateFactorial(p) * calculateFactorial(n-p);

    return numerator / denominator;
 }

 let resultat = combinator(5,2);
 console.log("the combination is ;",resultat);

 //task 2
 function calculator(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        case "%":
            return num1 % num2;
        case "c":
           
            function calculateFactorial(num) {
                if (num === 0 || num === 1) {
                    return 1;
                } else {
                    let factorial = 1;
                    for (let i = 2; i <= num; i++) {
                        factorial *= i;
                    }
                    return factorial;
                }
            }
            return calculateFactorial(num1) / (calculateFactorial(num2) * calculateFactorial(num1 - num2));
        default:
            return "Invalid operator";
    }
}


console.log(calculator(5, "+", 1));   
console.log(calculator(3, "*", -4));  
console.log(calculator(5, 'c', 2)); 
