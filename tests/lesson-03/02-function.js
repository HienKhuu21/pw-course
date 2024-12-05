// -------------------------------- Exercise 1

function bmiCalculate(heightByMetter, weightByKilo) {
    let bmi = weightByKilo / (heightByMetter * heightByMetter);
    if (bmi < 18.5) {
        return "Thiếu cân";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Bình thường";
    } else if (bmi >= 25 && bmi < 30) {
        return "Thừa cân";
    } else if (bmi >= 30) {
        return "Béo phì";
    }
}

let student = {
    student1: { h: 1.60, w: 75 },
    student2: { h: 2, w: 70 },
    student3: { h: 1.5, w: 55 },
    student4: { h: 1.5, w: 100 }
}

console.log("Exercise 1 result:")
for (let i in student) {
    let bmiResult = bmiCalculate(student[i].h, student[i].w);
    console.log(bmiResult);
}

// -------------------------------- Exercise 2

function convertTemperature(temperature, type) {
    if (type === "C") {
        return (temperature * 9 / 5 + 32);
    } else if (type === "F") {
        return (temperature - 32) * 5 / 9;
    } else {
        return "Not support";
    }
}

console.log("Exercise 2 result:")
console.log(convertTemperature(28, "C"));
console.log(convertTemperature(82.4, "F"));


// -------------------------------- Exercise 3