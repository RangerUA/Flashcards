// function sum(number) {
//     let square = 0;
//     let sums = 0;
//     for (let i = 1; i <= number; i++) {
//         square = square + i ** 2;
//         sums = sums + i;
//     }
//     sums = sums ** 2;
//     console.log(sums);   // 3025
//     console.log(square); // 385
//     console.log(sums - square);
//
// }
// sum(10)// 2640

function short(numberArray) {
    let res = String(numberArray[0]);
    let seq = false;

    for (let i = 0; i < numberArray.length - 1; i++) {
        let diff = (numberArray[i + 2] - numberArray[i + 1] === 1) && (numberArray[i + 1] - numberArray[i] === 1);
        if (!seq && diff) {
            res += "-";
            seq = true;
            continue;
        }

        if (seq && !diff) {
            res += numberArray[i + 1];
            seq = false;
        } else {
            res += ", " + numberArray[i + 1];
        }
    }

    console.log(res);
}

short([1, 2, 3, 5, 6, 8, 9, 10]);
