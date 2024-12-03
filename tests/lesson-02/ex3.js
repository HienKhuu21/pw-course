const myNumber = "a";
let condition;

if (myNumber > 0) {
    console.log("Giá trị bạn nhập là số dương");
    condition = "positive";
} else if (myNumber < 0) {
    console.log("Giá trị bạn nhập là số âm");
    condition = "negative";
} else if (myNumber === 0) {
    console.log("Giá trị bạn nhập là số 0");
    condition = "zero";
} else {
    console.log("Unknow inputted");
}

switch (condition) {
    case "positive":
        console.log("Switch Case - Giá trị bạn nhập là số dương");
        break;
    case "negative":
        console.log("Switch Case - Giá trị bạn nhập là số âm");
        break;
    case "zero":
        console.log("Switch Case - Giá trị bạn nhập là số 0");
        break;
    default:
        console.log("Switch Case - Unknow inputted");
}
