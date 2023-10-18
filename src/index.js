module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketMap = new Map(bracketsConfig.map(pair => pair.reverse()));

  for (let char of str) {
    if (bracketMap.has(char)) {
      const matchingBracket = bracketMap.get(char);

      // If the opening and closing brackets are the same, pop the stack if the last bracket is the same.
      if (matchingBracket[0] === matchingBracket[1] && stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();
      } else if (stack.length > 0 && stack[stack.length - 1] === matchingBracket[0]) {
        stack.pop(); // Pop the matching opening bracket from the stack.
      } else {
        stack.push(char); // Push the opening bracket onto the stack.
      }
    } else {
      stack.push(char); // Push non-bracket characters onto the stack.
    }
  }

  return stack.length === 0;
}


