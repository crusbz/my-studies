// brute force
// this resolution use two loops

function useBruteForce(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

// Ex: useBruteForce([1, 2, 3], 4) -> return [0, 2]

/** use hash tables
 This resolution use one loop, 
 I create a map by transforming the value into an index, 
 When trying to access this map with complement value and it is not undefined, return a response
*/
function useHashTable(numbers, target) {
  let map = {};
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[[numbers[i]]] = i;
  }
}

// Ex: useHashTable([1, 2, 3], 4) -> return [0, 2]

/** use hash table with method Map
 This resolution use one loop, 
 I create a map by transforming the value into an index, 
 When trying to access this map with complement value and it is not undefined, return a response
*/

function useHashTableWithMethodMap(numbers, target) {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(numbers[i], i);
  }
}

// Ex: useHashTableWithMethodMap([1, 2, 3], 4) -> return [0, 2]
