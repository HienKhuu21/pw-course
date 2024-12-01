const myHeight = 170;
const googWeight = (myHeight % 100) * 9 / 10;
const maxWeight = myHeight % 100;
const minWeight = (myHeight % 100) * 8 / 10;

console.log("cân nặng lý tưởng: " + googWeight + "kg, cân nặng tối đa: " + maxWeight + "kg, cân nặng tối thiểu: " + minWeight + "kg");