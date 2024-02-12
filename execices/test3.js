//task1 
//sum(numbers)

function sum(numbers){
   
    return numbers.reduce((value1, value2) => value1 + value2, 0);
}
 let numbers = [1,3,4,5];
let result = sum(numbers);
console.log("sum", "is:", result);


//countEven(number)
function countEven(numbers) {
    var count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

let array = [0, 2, 4]; 
let results = countEven(array); 
console.log("Count of even numbers:", results);

//double(numbers)
function double(numbers) {
    return numbers.push(num => num * 2);
}

const Array = [4, 2, 7];
const doubledArray = double(Array);
console.log("doubled array:", doubledArray);

//The pair of socks
function Socks(array){
    var countColor=[];
    var pairSocks=0;
    for(let i=0;i<array.length;i++){
        var color=array[i];
        if(color in countColor){
            countColor[color]= countColor[color]+1

        }
        else{
            countColor[color]=1;
        }

        if(countColor[color] % 2===0){
            pairSocks=pairSocks+1; 
        }
    }
    return pairSocks;
 }
 console.log(Socks([1, 1, 2, 2,3,3,3,3]));
  

  //bubbleSort
  function bubbleSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const a = [75, 60, 12, 20, 22, 3];
bubbleSort(a);
console.log(a);
  
//selection sort
function selectionSort(array) {
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
        let min = i;

        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        if (min !== i) {
            const temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    return array;
}

const b = [75, 60, 12, 20, 22, 3];
selectionSort(b);
console.log(b);

//insertionSort
function insertionSort(array) {
    const length = array.length;

    for (let i = 1; i < length; i++) {
        const currentElement = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = currentElement;
    }

    return array;
}

const c = [64, 34, 25, 12, 22, 11, 90];
insertionSort(c);
console.log(c);



  //linearSearch
  function linearSearch(array, target) {
    const n = array.length;
  
    for (let i = 0; i < n; i++) {
      if (array[i] === target) {
        return i;
      }
    }
  
    return -1;
  }
  
  const array = [64, 34, 25, 12, 22, 11, 90];   
  const targetElement = 22;
  
  const resultIndex = linearSearch(array, targetElement);
  
  
    console.log(`element ${targetElement}  found in the array.`);
  
  //binarySearch
 