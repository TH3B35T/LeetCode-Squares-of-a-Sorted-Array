/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squares = nums.map(num => num**2);
    return squares.sort((a,b) => a - b);
};
