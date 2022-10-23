// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 

function subArr (){
    console.log(ages[ages.length-1] - ages[0]);
}
subArr();

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(103)
subArr();


// 1c.	Use a loop to iterate through the array and calculate the average age. 

let cumulativeAge = 0;
let averageAge = 0;
for(i = 0; i < ages.length; i++) {
    cumulativeAge += ages[i]; 
}
averageAge = cumulativeAge / ages.length;
console.log(averageAge);



// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let totalLetters = 0;

for(i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
console.log(totalLetters / names.length);



// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let completeList = '';
for(i = 0; i < names.length; i++) {
    completeList += names[i] + ' '
}
console.log(completeList);



// 3.	How do you access the last element of any array?

console.log('Array.splice(-1)' + ' or Array[Array.length-1]');

// 4.	How do you access the first element of any array?

console.log('Array[0]')

/* 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array */

let nameLengths = []

for(i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log(nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let arrSum = 0;
for(i = 0; i < nameLengths.length; i++) {
    arrSum += nameLengths[i]
}
console.log(arrSum);

/* 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). */

function repeatWord(word, n) {
    let finalWord = '';
    for(let i = 0; i < n; i++){
        finalWord = finalWord + word;
    }
    console.log(finalWord);
}

repeatWord('Hello' , 3);

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
// •	The full name should be the first and the last name separated by a space.
function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}
createFullName('Ally', 'Prisock');

/* 9.	Write a function that takes an array of numbers and returns true if the sum of all 
the numbers in the array is greater than 100.*/
let isGreaterSum = 0;
let numberArray = [1, 2, 300];
function isGreater(array) {
    for(i = 0; i < array.length; i++) {
        isGreaterSum += array[i]
    }
    if (isGreaterSum > 100) {
        return true;
    } 
}
console.log(isGreater(numberArray));

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array. 
let totalOfElements = 0;
function arrayAverage(array) {
    for(i = 0; i < array.length; i++) {
        totalOfElements += array[i]
    }
    console.log(totalOfElements / array.length);
}
arrayAverage(numberArray);

/* 11.	Write a function that takes two arrays of numbers and returns true if the average 
of the elements in the first array is greater than the average of the elements in the second array.*/

let numberArrayOne = [1, 2, 300];
let numberArrayTwo = [1, 2, 200];

function arrGreater(arr1, arr2) {
    let arr1Total = 0;
    let arr2Total = 0;
    let arr1Avg = 0;
    let arr2Avg = 0;

    for(i = 0; i < arr1.length; i++) {
        arr1Total += arr1[i]
    }
    arr1Avg = arr1Total / arr1.length;
    for(i = 0; i < arr2.length; i++) {
        arr2Total += arr2[i]
    }
    arr2Avg = arr2Total / arr2.length;

    if (arr1Avg > arr2Avg) {
        return true;
    }
}

console.log(arrGreater(numberArrayOne, numberArrayTwo));

/*12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */

function willBuyDrink(isHotOutside, moneyInPocket) {
    return (isHotOutside && moneyInPocket > 10.50);
}

console.log(willBuyDrink(true, 10.51));

// 13.	Create a function of your own that solves a problem. 
//•	In comments, write what the function does and why you created it.

// This function will take the average of the numbers in both arrays.
let testArr1 = [2, 4, 6]; 
let testArr2 = [1, 2, 3];

function averageOfArrays(arr1, arr2) {
    let arrayTotals = 0;  
    let arrayLengths = 0;
    arrayLengths = arr1.length + arr2.length;

    for(i = 0; i < arr1.length; i++) {
        arrayTotals += arr1[i]
    }
    for(i = 0; i < arr2.length; i++) {
        arrayTotals += arr2[i]
    }
    console.log(arrayTotals / arrayLengths);
}
averageOfArrays(testArr1, testArr2);

