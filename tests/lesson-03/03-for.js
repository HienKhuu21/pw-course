// --------------------------------- Exercise 1
console.log("\n --- Exercise 1 result --- \n");

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log("Sum of 1 to 100 is: " + sum);

// --------------------------------- Exercise 2
console.log("\n --- Exercise 2 result --- \n");

for (let i = 2; i <= 9; i++) {
    console.log("\nBang cuu chuong " + i);
    for (let j = 1; j <= 10; j++) {
        let mul = i * j;
        console.log(i + " * " + j + " = " + mul);
    }
}

// --------------------------------- Exercise 3
console.log("\n --- Exercise 3 result --- \n");

let oddArray = [];

for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        oddArray.push(i);
    }
}
console.log("Mang cac so le: " + oddArray);

// --------------------------------- Exercise 4
console.log("\n --- Exercise 4 result --- \n");

let prefixName = "user";
let emailDomain = "@hotmail.com";
let totalUser = 10;

console.log("Danh sach email:");

for (let i = 1; i <= totalUser; i++) {
    console.log(prefixName + i + emailDomain);
}

// --------------------------------- Exercise 5
console.log("\n --- Exercise 5 result --- \n");

let incomeArray = [
    { month: 1, total: 100 },
    { month: 2, total: 500 },
    { month: 3, total: 100 },
    { month: 4, total: 100 },
    { month: 5, total: 100 },
    { month: 6, total: 100 },
    { month: 7, total: 100 },
    { month: 8, total: 100 },
    { month: 9, total: 100 },
    { month: 10, total: 100 },
    { month: 11, total: 100 },
    { month: 12, total: 10000 }
]
// console.log(incomeArray);
let totalIncome = 0;

for (let i in incomeArray) {
    totalIncome = totalIncome + incomeArray[i].total;
}

console.log("Tong doanh thu cua 12 thang: " + totalIncome);