let printNumber = 1;
let nextPrint = printNumber;

for (printNumber; printNumber <= 100; printNumber++) {
    if (nextPrint === printNumber) {
        console.log(printNumber);
        nextPrint += 4;
    }
}