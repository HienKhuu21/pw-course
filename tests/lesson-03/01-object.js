function printTitle(title) {
    console.log("---" + title);
}

function printNewline() {
    console.log("\n");
}

function print(input) {
    console.log(input);
}

// -------------------------------- exercise 1
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

printTitle("exercise 1 result:");
print(car.year);
printNewline();

// -------------------------------- exercise 2
let person = {
    name: "Tien",
    address: {
        street: "Nguyen Hue",
        city: "Ho Chi Minh",
        country: "Viet Nam"
    }
};

printTitle("exercise 2 result:");
print(person.address.street);
printNewline();

// -------------------------------- exercise 3
let student = {
    name: "Tien",
    grades: {
        math: 9,
        english: 4
    }
};

printTitle("exercise 3 result:");
print(student["grades"]["math"]);
printNewline();

// -------------------------------- exercise 4

let product = {
    iPhone: 2000,
    Samsung: 200,
    xiaomi: 180
};

printTitle("exercise 4 result:");

for (let i in product) {
    print(`Sản phẩm \"${i}\" có giá trị \"product[i]\"`);
}

printNewline();

// -------------------------------- exercise 5
const settings = {
    volume: 70,
    brightness: 65
};

settings.volume = 85;

printTitle("exercise 5 result:");
print(settings);
printNewline();

// -------------------------------- exercise 6
const bike = {};

printTitle("exercise 6 result:");

console.log("Original object: ", bike);

bike.color = "red";

console.log("Updated object: ", bike);
printNewline();

// -------------------------------- exercise 7
const employee = {
    name: "ABC",
    age: 34,
};

printTitle("exercise 7 result:");

console.log("Original object: ", employee);

delete employee.age;

console.log("Updated object: ", employee);
printNewline();

// -------------------------------- exercise 8

let school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Expensive", "OK", "Bad"]
};

printTitle("exercise 8 result:");

for (let i in school) {
    print(school[i]);
}

printNewline();