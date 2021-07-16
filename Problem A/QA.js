// A.
// 1.

function allLongestStrings(inputArray) {
    let lengthArr = [];
    for (let i of inputArray) {
        lengthArr.push(i.length);
    }

    let maxLen = lengthArr[0];
    for (let i of lengthArr) {
        if (i > maxLen) {
            maxLen = i;
        }
    }

    let returnArr = [];

    for (let i of inputArray) {
        if (i.length === maxLen) {
            returnArr.push(i);
        }
    }

    return returnArr;
}

console.log(allLongestStrings(["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]));


// 2.
function weightFrom2Teams(arr) {
    let firstTeam = 0;
    let secondTeam = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2) {
            secondTeam += arr[i];
        } else {
            firstTeam += arr[i];
        }
    }
    return [firstTeam, secondTeam];
}
console.log(weightFrom2Teams([60, 40, 55, 75, 64]));