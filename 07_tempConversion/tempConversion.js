const ftoc = function(fahrenheit) {
  const divider = 5/9
    const result = (fahrenheit -32) * divider
      if (result === 0) {
        return parseInt(result)
      }
      else return parseFloat(result.toFixed(1))
};

const ctof = function(celsius) {
  const multiplier = 1.8
    const result = (celsius * multiplier) + 32
    if (result === 32) {
      return parseInt(result);
    }
    else return parseFloat(result.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
