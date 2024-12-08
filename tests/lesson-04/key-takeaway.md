# Javascript

## Phạm vi của biến
            - var: phạm vi toàn cục (global)
            - let: phạm vi trong cặp ngoặc {}
            - +++ Note: nên xài let để dễ kiểm soát biến hơn
            - const: biến không thay đổi giá trị

## Condition: 

### if, if…else, if…else if, if…else if..else

    const myNumber = 70;
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

### switch…case
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

## Comparison

    - So sánh bằng: ==, ===,!=, !==, >=, <=
            === , !== : so sánh value + type
            == , != : so sánh value

## Loop

    - For ... in :
        + loop các thuộc tính trong obj
        + Truy cập các index trong array

[For...in image](https://drive.google.com/file/d/1_D6_qZTXCrys0ciXh4JsmASSrGhSusDK/view?usp=drive_link)

    - Foreach:
        - Syntax: array.forEach((value, index) => {
            //Code here
        })
        - Ex: 
            let phones = ["SamSung", "iPhone", "Oppo", "Nokia"];

            phones.forEach((value) => {
                console.log(value);
            })

            console.log("\n-------------------\n");

            phones.forEach((value, index) => {
                console.log(`Phone at ${index+1} position is ${value}`);
            })
[forEach image](https://drive.google.com/file/d/1gjhNjVEn7tL8HucJMVkJF2GMhBSJTJdf/view?usp=drive_link)

    - For of: 
        - Syntax: for (variable of array) {
                    // code here
                }
        - Ex:
            let phones = ["SamSung", "iPhone", "Oppo", "Nokia"];

            for (let phone of phones) {
                console.log(phone);
            }

## Continue & Break
    - Continue: bỏ qua vòng lâp hiện tại, đi tới vòng lặp tiếp theo
    - Break: thoát khỏi vòng lặp