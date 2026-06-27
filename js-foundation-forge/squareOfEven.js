const array = [1, 2, 3, 4, 5, 6];

/**
 * Method 1: Using Modern ES6 Array Methods (Filter + Map)
 * A clean, declarative approach that chains array functions for high readability.
 */
function squareEven(arr) {
    return arr
        .filter(num => num % 2 === 0) // Step 1: Filter the array to keep only even numbers
        .map(num => num * num);       // Step 2: Map over the even numbers and square each one (num * num)
}

// Test and log the result of Method 1 (Expected Output: [4, 16, 36])
console.log(squareEven(array)); 


/**
 * Method 2: Using Traditional For-Loop (Commented Out)
 * An imperative approach that manually iterates through the array and stores results in a new array.
 */
// function squareEven(arr){
//     let newArray = []; // Initialize an empty array to store the squared even numbers
//
//     // Loop through each element in the input array
//     for(let i = 0; i < arr.length; i++){
//         // Check if the current element is even (divisible by 2)
//         if(arr[i] % 2 === 0){
//             newArray.push(arr[i] * arr[i]); // Square the even number and push it to newArray
//         }    
//     }    
//     return newArray; // Return the final populated array
// }
//
// console.log(squareEven(array));
