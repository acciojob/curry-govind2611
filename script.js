function curry(callback) {
 
  const args = [];
  function curried(...newArgs) {
    args.push(...newArgs);
	  if (newArgs.length === 0) {
      return callback(...args);
    }

      return curried;
  }

  return curried;
}

module.exports = curry;
