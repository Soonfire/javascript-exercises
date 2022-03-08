const fibonacci = function(nthValue) {
    if (nthValue < 0) return "OOPS";
    if (nthValue === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < nthValue; i++) {
      const temp = b;
      b = a + b;
      a = temp;
    }
    return b;
};

// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
// Do not edit below this line
module.exports = fibonacci;
