const numbers = [1, 2, 3, 1, 2, 4, 5];
const map = {};
const result = [];
for (let element of numbers) {
    // console.log(map[element]);
    map[element] = (map[element] || 0) + 1;
}
for (let element in map) {
    if (map[element] === 1) {
        result.push(Number(element));
    }
}
console.log(result);
console.log(map);


let tempObj = { '1': 2, '2': 2 };
let findNum = 1;
let count;

//   map[element] = (map[element] || 0) + 1;
if (typeof tempObj[findNum] === 'undefined') {
    count = 0;
} else {
    count = tempObj[findNum];
    console.log(count);
}
count += 1;
console.log(count);
