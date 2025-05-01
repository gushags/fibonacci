// fib.js

function fibRec(num) {
  //   console.log("This is a recusive function");
  if (num < 2) {
    return [0];
  }
  if (num == 2) {
    return [0, 1];
  }

  const fibArr = fibRec(num - 1);
  fibArr.push(fibArr[num - 2] + fibArr[num - 3]);
  return fibArr;
}

console.log(fibRec(8));

/* Build a function mergeSort that takes in an array and returns a sorted array, using a
 recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should return
 [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].
 */

function mergeSort(unsorted) {
  //
}

// # split in half
// m = n / 2

// # recursive sorts
// sort a[1..m]
// sort a[m+1..n]

// # merge sorted sub-arrays using temp array
// b = copy of a[1..m]
// i = 1, j = m+1, k = 1
// while i <= m and j <= n,
//     a[k++] = (a[j] < b[i]) ? a[j++] : b[i++]
//     → invariant: a[1..k] in final position
// while i <= m,
//     a[k++] = b[i++]
//     → invariant: a[1..k] in final position
