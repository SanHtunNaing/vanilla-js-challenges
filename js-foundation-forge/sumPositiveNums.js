const array = [1, -4, 7, 12, -2];

/**
 * Method 1: Using Modern ES6 Array Methods (Filter + Reduce)
 * This approach is declarative, clean, and highly readable.
 */
function SumPositive(arr) {
    return arr
        .filter(num => num > 0)          // Step 1: Filter out negative numbers, keeping only numbers greater than 0
        .reduce((total, num) => total + num, 0); // Step 2: Sum up all the filtered positive numbers, starting from an initial value of 0
}

/**
 * Method 2: Using Traditional For-Loop (Commented Out)
 * This approach is imperative, explicit, and highly performant for massive datasets.
 */
// function SumPositive(arr){
//     let temp = 0; // Initialize a accumulator variable to hold the sum
//
//     // Loop through each element in the array
//     for(let i = 0; i < arr.length; i++ ){
//         // Check if the current number is positive
//         if(arr[i] > 0){
//             temp += arr[i]; // Add the positive number to the total sum
//         }
//     }
//     return temp; // Return the final calculated sum
// }

// Test the function and log the result to the console (Expected Output: 20)
console.log(SumPositive(array));
