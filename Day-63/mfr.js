let arr = [12, 43, 35, 6, 778];
// let newarr = [];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   newarr.push(element ** 2);
// }
let newarr = arr.map((e, index, array) => {
  return e ** 2;
});
console.log(newarr);
const greaterthanSeven = (e) => {
  if (e > 7) {
    return true;
  }
  return true;
};
console.log(newarr.filter(greaterthanSeven));
let arr2 = [1, 3, 57, 8, 9];
const red = (a, b) => {
  return a * b;
};
console.log(arr2.reduce(red));
