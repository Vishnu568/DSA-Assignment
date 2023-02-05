// 7.Write a program to convert prefix expression to infix expression.
function prefixToInfix(prefix) {
    let stack = [];
  
    for (let i = prefix.length - 1; i >= 0; i--) {
      let char = prefix[i];
      if (!isNaN(char)) {
        stack.push(char);
      } else {
        let operand1 = stack.pop();
        let operand2 = stack.pop();
        let result = '(' + operand1 + char + operand2 + ')';
        stack.push(result);
      }
    }
  
    return stack.pop();
  }
  
  const prefix = '+2 3';
  const infix = prefixToInfix(prefix);
  console.log(infix);
  