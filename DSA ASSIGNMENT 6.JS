
//  6.Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
function postfixToPrefix(expression) {
    let stack = [];
  
    for (let i = 0; i < expression.length; i++) {
      let char = expression[i];
  
      if (isOperand(char)) {
        stack.push(char);
      } else {
        let op1 = stack.pop();
        let op2 = stack.pop();
        let result = char + op2 + op1;
        stack.push(result);
      }
    }
  
    return stack.pop();
  }
  
  function isOperand(char) {
    return !isOperator(char);
  }
  
  function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
  }
  
  const expression = '23+';
  const prefixExpression = postfixToPrefix(expression);
  console.log(prefixExpression);
  