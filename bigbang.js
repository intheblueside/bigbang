const results = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    results.push("BIG BANG");
  } else if (i % 3 === 0) {
    results.push("BIG");
  } else if (i % 5 === 0) {
    results.push("BANG");
  } else {
    results.push(i.toString());
  }
}

const output = JSON.stringify(results);

console.log(output);

const fs = require("fs");

fs.writeFile("output.json", output, (error) => {
  if (error) {
    // logging the error
    console.error(error);

    throw error;
  } else {
    console.log("output.json written");
  }
});
