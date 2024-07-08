/**
 * This function takes an array of numbers and returns a new array with each number squared.
 * @param {number[]} nums - An array of numbers.
 * @returns {number[]} A new array with each number squared.
 */
function squareNumbers(nums) {
    return nums.map(num => num * num);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Start Generation Here
function newAlgorithm(arr) {
    // This algorithm will find the maximum product of two integers in an array
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }

    let max1 = -Infinity, max2 = -Infinity;
    let min1 = Infinity, min2 = Infinity;

    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }

        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    return Math.max(max1 * max2, min1 * min2);
}

// Example usage:
const array = [1, 10, -5, 1, -100];
const maxProduct = newAlgorithm(array);
console.log(maxProduct); // Output: 5000
