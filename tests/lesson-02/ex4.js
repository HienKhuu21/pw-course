const myHeight = 170;
const height = myHeight % 100;
const goodWeight = height * 9 / 10;
const maxWeight = myHeight % 100;
const minWeight = height * 8 / 10;

console.log("cân nặng lý tưởng: " + goodWeight + "kg, cân nặng tối đa: " + maxWeight + "kg, cân nặng tối thiểu: " + minWeight + "kg");