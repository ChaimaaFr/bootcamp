function group(arr) {
    let number = {};
    let result = [];

    for (let num of arr) {
        if (number[num]) {
            number[num].push(num);
        } else {
            number[num] = [num];
            result.push(number[num]);
        }
    }

    return result;
}


let result = group([3, 2, 6, 3, 1, 3]);
console.log(result);
