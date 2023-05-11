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

