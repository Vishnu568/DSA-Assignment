// 10.Write a program to find the smallest number using a stack.
function findSmallest(stack) {
    let min = Number.MAX_SAFE_INTEGER;
    while (stack.length > 0) {
      let current = stack.pop();
      if (current < min) {
        min = current;
      }
    }
    return min;
  }
  
  let stack = [3, 4, 1, 2, 5];
  let smallest = findSmallest(stack);
  console.log(smallest); 
  