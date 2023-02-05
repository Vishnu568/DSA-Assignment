// 8.Write a program to check if all the brackets are closed in a given code snippet.
function checkBrackets(code) {
    let stack = [];
    
    let brackets = {
      '{': '}',
      '[': ']',
      '(': ')'
    };
    
    for (let i = 0; i < code.length; i++) {
      let char = code[i];
      if (brackets[char]) {
        stack.push(brackets[char]);
      } else if (char === '}' || char === ']' || char === ')') {
        if (stack.pop() !== char) {
          return false;
        }
      }
    }
    
    return stack.length === 0;
  }
  
  const code = '{ [ ( ) ] }';
  const result = checkBrackets(code);
  console.log(result); 
  