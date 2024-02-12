function onlyDuplicates(str) {
    let str_count = {};
    
    // Count occurrence pour chaque character
    for (let char of str) {
        if (char in str_count) {
            str_count[char]++;
        } else {
            str_count[char] = 1;
        }
    }
    
    let result = "";

   //Construit la chaîne de résultat avec des caractères dont le nombre est supérieur à 1

    for (let char of str) {
        if (str_count[char] > 1) {
            result += char;
        }
    }
    
    return result;
}

let str = "abccdefee";
let output_str = onlyDuplicates(str);
console.log("input:", str);
console.log("output:", output_str);

