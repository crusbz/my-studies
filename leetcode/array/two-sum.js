// brute force
// this resolution use two loops

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

/** use hash table
 This resolution use one loop, 
 I create a map by transforming the value into an index, 
 When trying to access this map with complement value and it is not undefined, return a response
*/
function useHashTable(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[[nums[i]]] = i;
  }
}

/** use hash table with method Map
 This resolution use one loop, 
 I create a map by transforming the value into an index, 
 When trying to access this map with complement value and it is not undefined, return a response
*/

function useMethodMap(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}
