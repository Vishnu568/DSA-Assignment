// 1.Write a program to find all pairs of an integer array whose sum is equal to a given number?
function findPairsWithGivenSum(arr, sum) {
    
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === sum) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
    return pairs;
  }

  const arr = [1, 2, 3, 4, 5];
  const sum = 5;

  const pairs = findPairsWithGivenSum(arr, sum);
  console.log(pairs); 
  