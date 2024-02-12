// function Matrix (a, b) {
//     const l = a.length;
//     let resultat = [];

//     for (let i = 0; i < l; i++) {
//         resultat[i] = [];
//         for (let j = 0; j < l; j++) {
//             resultat[i][j] = a[i][j] + b[i][j];
//         }
//     }

//     return resultat;
// }

function matrix(a, b) {
    let arr = [];
    a.forEach((element, index) => {
        arr.push([]);
        element.forEach((n, indexN) => {
            let res = Math.abs(n + b[index][indexN]);
            arr[index].push(res);
        });
    });
    return arr; 
}

const a = [[1, 2, 3],
           [3, 2, 1],
           [1, 1, 1]];

const b = [[3, 2, 1],
           [1, 2, 3],
           [1, 1, 1]];

const result = matrix(a, b);
console.log(result);

