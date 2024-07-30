// Memorize fc
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return `${cache.get(key)}, взято з кешу`;
    }

    const result = fn(...args);
    cache.set(key, result);
    return `${result}, додано но кешу`;
  };
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(6)); 
console.log(memoizedFactorial(5));