const functions = require('./function');

test('Adds 2+2 to equals 4', () => {

expect(functions.add(2, 2)).toBe(4);
})

test('Adds 2 +2 to NOT equals 4', () => {

    expect(functions.add(1,2)).not.toBe(4);

})

test('Should be null', () => {

    expect(functions.isNull()).toBeNull();

})

test('Should return a reversed string', () => {

    expect(functions.reverseString("abcdef")).toBe("fedcba");



})

test('Should return the sorted anagram of a string', () => {


    expect(functions.formaStr("oskar")).toBe("akors");


})

test('Should return true for two words that are anagrams of each other', () => {

    expect(functions.isAnagram("labo","bola")).toBe(true);
    
})


test('Should return a chunked array in N part', () => {


    expect(functions.chunkArray([1,2,3,4,5,6,7,8,9],3)).toEqual([[1,2,3],[4,5,6],[7,8,9]]);


})








