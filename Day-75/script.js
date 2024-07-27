console.log("Zubair is hacker");
console.log("Zubair is hecker");
setTimeout(() => {
  console.log("I am inside settime out");
}, 0);
setTimeout(() => {
  console.log("I am inside settime out 2");
}, 0);
console.log("The End");
const callback = (arg) => {
  console.log(arg);
};
const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Zubair");
  document.head.append(sc);
};
