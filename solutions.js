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

function sumNumbers(nums) {
    // feed the reduce method the sum and the num, then sum all the nums, letting the sum start out at 0 as a default
    return nums.reduce((sum, num) => sum += num, 0);
}

function sumNumbers(nums) {
    return nums.reduce((sum, num) => sum += num, 0)
}
// this final solution has the best BigO Notation because it has the fewest lines of code, taking up the least amount of space/memory/time in the program




// #4 addList - Write a function called addList that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum. 
// - assume all parameters will be numbers.
// -if called with no arguments, return 0 

// Examples: 

// addList(1)  //=> 1
// addList(1, 50, 1.23) //=> 52.23
// addList(7, -12) //=> -5

// option one
function addList() {
    let sum = 0;
    for (let i=0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function addList() {
    // start the sum out at zero
    let sum = 0;
    // start the for loop
    for(let i=0; i < arguments.length; i++) {
        //  sum up the arguments, gotta have that i
        sum += arguments[i];
    }
    // return the sum
    return sum;
}

function addList() {
    let sum = 0;
    for(let i=0; i < arguments.length; i++) {
        sum += arguments[i];
    } 
    return sum;
}

// option 2 (where we make the arguments a true Array then do a forEach to optimize the BigO notation some more)

function addList() {
    let nums = Array.from(arguments);
    let sum = 0;
    nums.forEach(function(num) {
        sum += num;
    });
    return sum;
}

function addList() {
    // this next line will make the nums a true array from the arguments given
    let nums = Array.from(arguments);
    // start the sum at 0
    let sum = 0;
    // do a forEach to optimize BigO Notation and say the word function on the same line and feed it a num
    nums.forEach(function(num) {
        // take the sum and add the next num
        sum += num;
    });
    // return the whole sum
    return sum;
}

function addList() {
    let nums = Array.from(arguments);
    let sum = 0;
    nums.forEach(function(num) {
        sum += num;
    });
    return sum;
}


// option 3 (where we use rest parameter syntax then reduce)

// name of function, and tell it to spread the nums
function addList(...nums) {
    // on one line we tell the program to make an array of all the arguments, then we're going to give it the sum and a num, then that we want it to add that sum to the next num, starting at 0
    return nums.reduce((sum, num) => sum += num, 0);
}
// nums will be an array containing all arguments
// I find this clunky looking, even though BigO Notation is best with it. 
// I might not choose it, because it's more difficult to read straight off. 

function addList(...nums) {
    return nums.reduce((sum, num) => sum += num, 0);
}