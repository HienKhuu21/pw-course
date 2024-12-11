// --------------------------------- Exercise 1
console.log("\n --- Exercise 1 result --- \n");

let students = {
    name: "Alex",
    age: 18,
    salary: 20
};

for (let i in students) {
    console.log(`${i} = ${students[i]}`);
}

// --------------------------------- Exercise 2
console.log("\n --- Exercise 2 result --- \n");

let workers = {
    name: "Alex",
    age: 18,
    salary: 20
};

let sum=0;

for (let i in workers) {
    // if (Number.isInteger(workers[i]) == true) {
    //     sum += workers[i];
    // }
    if (Number.isFinite(workers[i]) == true) {
        sum += workers[i];
    }
}

console.log("Sum of number in array is: " + sum);
console.log("\n --- Exercise 2 result Method 2--- \n");

for (const key in workers) {
    if (typeof key === 'number') {
      sum += workers[key];
    }
  }
  console.log("Sum of number in array is: " + sum);

// --------------------------------- Exercise 3
console.log("\n --- Exercise 3 result --- \n");

// xài array EX2

let arrayProperties = [];

for (let i in workers) {
    arrayProperties.push(i);
}

console.log(arrayProperties);