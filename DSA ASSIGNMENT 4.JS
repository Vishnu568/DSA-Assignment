// 4.Write a program to print the first non-repeated character from a string?
function firstNonRepeatedChar(str) {
    let charCounts = {};
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charCounts[char]) {
        charCounts[char]++;
      } else {
        charCounts[char] = 1;
      }
    }
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charCounts[char] === 1) {
        return char;
      }
    }
  
    return null;
  }
  
  const str = 'hello world';
  
  const firstNonRepeated = firstNonRepeatedChar(str);
  console.log(firstNonRepeated);
  
