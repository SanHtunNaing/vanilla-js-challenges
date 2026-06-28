const text = "Web development is awesome";

/**
 * Method 1: Number Tracking Approach
 * This approach finds the MAX length (number) instead of returning the word itself.
 */
function longestWordLength(txt) {
    const wdArr = txt.split(" "); // Split the string into an array of words
    let itemlengths = [];         // Initialize an array to store the length of each word

    // Loop through the words array and push each word's length
    for (let i = 0; i < wdArr.length; i++) {
        itemlengths.push(wdArr[i].length);
    }
    return Math.max(...itemlengths); // Use spread operator (...) to find and return the maximum number
}


/**
 * Method 2: Traditional Loop (String Tracking)
 * This approach iterates through the words and stores the actual longest word found so far.
 */
function longestWordLoop(txt) {
    const wdArr = txt.split(" "); // Split the string into an array of words
    let longest = "";             // Initialize an empty string to hold the longest word

    // Loop through each word in the array
    for (let i = 0; i < wdArr.length; i++) {
        // If the current word is longer than the 'longest' word found so far
        if (wdArr[i].length > longest.length) {
            longest = wdArr[i];   // Update the 'longest' variable with the current word
        }
    }
    return longest; // Return the actual longest word
}


/**
 * Method 3: Modern ES6 Approach (Reduce)
 * A clean, declarative functional programming approach using the .reduce() method.
 */
function longestWordReduce(txt) {
    return txt.split(" ").reduce((longest, current) => {
        // Compare current word length with the accumulated longest word using a ternary operator
        return current.length > longest.length ? current : longest;
    }, ""); // Start with an empty string as the initial value
}


// --- Execution and Testing ---
console.log("Method 1 (Length):", longestWordLength(text)); // Output: 11
console.log("Method 2 (Word):", longestWordLoop(text));     // Output: "development"
console.log("Method 3 (Word):", longestWordReduce(text));   // Output: "development"
