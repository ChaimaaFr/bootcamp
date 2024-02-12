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