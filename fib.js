// fib.js

function fibRec(num) {
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
