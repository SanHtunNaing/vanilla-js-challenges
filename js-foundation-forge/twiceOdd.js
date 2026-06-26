const array = [1, 2, 3, 4, 5];

/**
 * Method 1: Using Traditional For-Loop
 * Iterates through the array manually, filters odd numbers, doubles them, and pushes to a new array.
 */
function twiceOdd(arr) {
    const odd = []; // Initialize an empty array to store the modified odd numbers

    // Loop through each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current number is odd (not divisible by 2)
        if (arr[i] % 2 !== 0) {
            odd.push(arr[i] * 2); // Double the odd number and add it to the 'odd' array
        }
    }
    return odd; // Return the final array containing the doubled odd numbers
}

console.log(twiceOdd(array)); // Output: [2, 6, 10]


/**
 * Method 2: Using Modern ES6 Array Methods (Filter + Map)
 * A cleaner, functional programming approach that chains array methods together.
 */
function twiceOddModern(arr) {
    return arr
        .filter(num => num % 2 !== 0) // Step 1: Filter out even numbers, keeping only the odd ones
        .map(num => num * 2);         // Step 2: Create a new array where each remaining odd number is multiplied by 2
}

console.log(twiceOddModern(array)); // Output: [2, 6, 10]
