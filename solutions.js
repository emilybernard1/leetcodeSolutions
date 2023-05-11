// Here is where I will copy and paste my solutions from leetcode or other like sites.

// Palindrome
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    let reversed = 0;
    let current = x;
    while( current !== 0) {
        reversed = reversed * 10 + current % 10;
        current = Math.floor(current/10);
    }
    return x === reversed;
};

// 1. condition if "x" is negative
        // a. return false
// 2. Create reversed variable
// 3. Create current variable equal to x
// 4. While loop for current doesn't equal to 0
        // a. Set reversed equal to reversed * 10 + current mod 10
        // b. divide current by 10
// 5. return if "x" is equal to reversed

// Time Complexity: O(n)
// Space Complexity: O(1)


// Two Sum 
// i = 0
// j = 1

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            if(nums[i] +nums[j] === target) {
                return [i, j];
            }
        }
    }
};

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

var twoSum = function(nums, target){
    for(let i = 0; i < nums.length; i++) {
        for(let j= 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

//  Write a basic function called sayHello that returns the string "Hello!"

// Examples:

// sayHello()  //=> Hello!

// instantiate the function by stating the word function, then the name of the function and parens (), then curlies, then the easy logic!

function sayHello() {
    return "Hello!"
}

// #1 Write a function called addOne that takes a single number as an argument and returns that number plus 1.

// Examples:

// addOne(1)  //=> 2
// addOne(-5)  //=> -4

// instantiate the function by stating the word "function", then naming it, then parens, then curlies, then logic

function addOne(num) {
    return num + 1;
}


// #2 Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers. If either argument is not a number, return the value NaN.

// Examples: 

// addTwoNumbers(5, 10)  //=> 15
// addTwoNumbers(10, -2)  //=> 8
// addTwoNumbers(0, 0)  //=> 0
// addTwoNumbers('Hello', 5)  //=> NaN

// instantiate the function by stating the word function, then naming the func with parens, then open curlies, then the logic.

function addTwoNumbers(a, b) {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return NaN
    }
}

// #3 Write a function called sumNumbers that acccepts a single array of numbers and returns the sum of the numbers in the array.
// -If the array is empty, return 0 (zero)

// Examples: 
// sumNumbers([10])  //=> 10
// sumNumbers([5, 10])  //=> 15
// sumNumbers([2, 10, -5])  //=> 7
// sumNumbers([])  //=> 0

// instantiate the function by stating the word "function", then naming it with parents and arguments, then open curlies, then logic.

function sumNumbers(nums) {
    // start out by globally declaring that the sum is by default, 0
    let sum = 0;
    // start a for loop
    // for every time i is less than the length of the array of nums, do the thing, then increment
    for (let i=0; i < nums.length; i++) {
        // here's the thing: sum the nums in the array
        sum += nums[i];
    }
    // then return the sum
    return sum;
}

function sumNumbers(nums) {
    let sum = 0
    for (let i=0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

// better solution for #3: (unless you have to exit the loop early)

function sumNumbers(nums) {
    let sum = 0;
    nums.forEach(function(num) {
        sum += num;
    });
    return sum;
}

// the above solution has better BigO notation than the first solution because we took out the for loop and just said for each num in the nums array, sum it up

// best solution for #3:

function sumNumbers(nums) {
    return nums.reduce((sum, num) => sum += num, 0);
}

