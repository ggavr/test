Hello? world
let array = [1,1,2,2,3,4,]
const hasDuplicate = (arr, el) => arr.includes(el) //error
const duplicate = (arr) => arr.filter(el => hasDuplicate(arr, el))
const arrTrim = (arr) => [...new Set(arr)]
const duplicates =(arr) => arrTrim(duplicate(arr))
console.log(duplicate(array))
// let array = ["a", "b", "c"]
// const number = (array) => {
//     return array.map((arr, i)=>((i+1) +':'+ arr))
// }
//
// console.log(number(array))
findLongestWordLength("The quick brown fox jumped over the lazy dog");
//2
function largestOfFour(arr) {
  let a = arr.map(el => Math.max(...el))
  return a;
}
