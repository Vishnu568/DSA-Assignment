// 3.Write a program to check if two strings are a rotation of each other?
function areRotations(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let concatenatedString = str1 + str1;
  return concatenatedString.includes(str2);
}

const str1 = 'hello';
const str2 = 'lohel';

const result = areRotations(str1, str2);
console.log(result);