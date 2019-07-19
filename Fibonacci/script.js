const fibonachi = num => {
    if (num < 2) {
        return num;
    } else {
        return fibonachi(num-1) + fibonachi(num - 2);
    }
    
};

console.log(fibonachi(7));

const fibonachi = num => {
    const result = [0, 1];

    for (let i = 2;i <= num;i++) {
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1 + prevNum2);
    }

    return result[num];
};

console.log(fibonachi(7));

function fib(n) {
  let a = 1,
      b = 0,
      c = 0;
  for(let i = 0;i < n;i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}
console.log(fib(3));