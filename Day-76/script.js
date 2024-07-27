function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3400);
  });
}
async function main() {
  console.log("Zubair");
  console.log("Loading modules");
  console.log("Do something else");
  let data = await getData();
  console.log("data");
  console.log("Process data");
  console.log("task 2 ");
  console.log(data);
  console.log("Zubair");
}
main();
