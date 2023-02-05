// 9.Write a program to reverse a stack.
function reverseStack(stack) {
    if (stack.length === 0) {
      return;
    }
    
    let last = getAndRemoveLast(stack);
    reverseStack(stack);
    stack.push(last);
  }
  
  function getAndRemoveLast(stack) {
    let last = stack.pop();
    if (stack.length === 0) {
      return last;
    }
    
    let secondToLast = getAndRemoveLast(stack);
    stack.push(last);
    return secondToLast;
  }
  
  let stack = [1, 2, 3, 4];
  reverseStack(stack);
  console.log(stack);