const functions = {

    add: (num1,num2) => num1 + num2,
    isNull: () => null,
    checkValues: x=> x,

    reverseString :(str) => {
        return str.toLowerCase().split('').reverse('').join('');
      },


    isAnagram(str1, str2) {
        return functions.formaStr(str1) === functions.formaStr(str2);
      },
      
    formaStr(str) {
        return str
            .replace(/[^\w]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
      },
    
chunkArray: (arr, len) => {
  const chunkedArr = [];

  arr.forEach(val => {
      const last = chunkedArr[chunkedArr.length - 1];

      if(!last || last.length === len) {
          chunkedArr.push([val]);
      } else {
          last.push(val);
      }
  })

  return chunkedArr;}
}

console.log(functions.chunkArray([1,2,3,4,5,6,7,8,9],3))

module.exports = functions;
