const departurePlanet = "Trái Đất";
const mission = "Khám phá Vũ trụ K11";
const crew = ["Tien", "Duc", "Dung", "Khoa", "Duong", "Thao"];

function launchShip(crewArray) {
    console.log("Chuẩn bị khởi động! Phi hành đoàn gồm: '" + crewArray + "' sẽ đồng hành cùng bạn trong chuyến phiêu lưu " + mission + "!.");
}

function launchShip02(crewArray) {
    console.log("Chuẩn bị khởi động! Phi hành đoàn gồm:");

    for (let member of crewArray) {
        console.log(" - " + member);
    }

    console.log("sẽ đồng hành cùng bạn trong chuyến phiêu lưu " + mission + "!.");
}

// Input format
//// speed: apeed number ' ' unit (ex: 1000 km/h)
//// time: time numner ' ' time unit (ex: 24 h)
function calculateDistance(speed, time) {
    let spaceSpeed = speed.split(" ");
    let estimateTime = time.split(" ");
    let estimateDistance = spaceSpeed[0] * estimateTime[0];
    let distanceUnit = spaceSpeed[1].split("/");
    let returnDistance = estimateDistance + " " + distanceUnit[0];
    return returnDistance;
}

// Input format - time: time numner ' ' time unit h/m/s (ex: "24 h" or "60 m" or "120 s")
function convertTimeToHex(time) {
    let splitTime = time.split(" ");
    let convertToSec;
    if (splitTime[1] === "h") {
        convertToSec = splitTime[0] * 3600;
    } else if (splitTime[1] === "m") {
        convertToSec = splitTime[0] * 60;
    } else {
        convertToSec = splitTime[0];
    }
    return Number(convertToSec).toString(16);
}

function decryptCode(code) {
    let decryptArray = [];
    let decryptText = "";

    for (let letter of code) {
        if (letter === letter.toLowerCase()) {
            //decryptArray.push(letter.toUpperCase());
            decryptText += letter.toUpperCase();
        } else {
            //decryptArray.push(letter.toLowerCase());
            decryptText += letter.toLowerCase();
        }
    }

    // for (let char in decryptArray) {
    //     decryptText += decryptArray[char];
    // }

    return decryptText;
}

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}


launchShip(crew);
//launchShip02(crew);

console.log("Estimate Distance: " + calculateDistance("1000 km/h", "24 h"));

console.log("Converted time from Decimal to Hecxadecimal: " + convertTimeToHex("120 s"));

console.log("Code decrypted as: " + decryptCode("K11 Challenge"));

returnToEarth();