// merge-sort.js
// [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13],
// and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

function mergeSort(arr) {
  let n = arr.length;
  if (n === 1 || n === 0) {
    return arr;
  }

  const midPoint = Math.floor(n / 2);
  const leftSide = mergeSort(arr.slice(0, midPoint));
  //   console.log("Left side: " + leftSide);

  const rightSide = mergeSort(arr.slice(midPoint, n));
  //   console.log("Right side: " + rightSide);
  let sortedArr = [];
  let i = 0;
  let j = 0;

  while (sortedArr.length !== arr.length) {
    if (leftSide[i] < rightSide[j] || rightSide[j] === undefined) {
      sortedArr.push(leftSide[i]);
      i++;
    } else {
      sortedArr.push(rightSide[j]);
      j++;
    }
  }

  return sortedArr;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
