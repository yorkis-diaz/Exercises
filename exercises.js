const toLowerCase = function (str) {
    return str.toLowerCase()
};

// console.log(toLowerCase("HELLO"))

const isValid = function (s) {
    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    const stack = []

    for (char of s) {
        if (char in pairs) {
            stack.push(char)
        } else {
            const lastEntry = stack.pop()
            if (char !== pairs[lastEntry]) return false
        }
    }

    return (stack.length === 0) ? true : false
};
// console.log(isValid("()"))
// console.log(isValid("()[]{}"))
// console.log(isValid("(]"))
// console.log(isValid("([)]"))
// console.log(isValid("{[]}"))

//--------------------------------------------

//Given a binary matrix A, we want to flip the image horizontally, 
//then invert it, and return the resulting image.

//To flip an image horizontally means that each row of the image is reversed.
//For example, flipping[1, 1, 0] horizontally results in [0, 1, 1].

//To invert an image means that each 0 is replaced by 1, and each 1 is replaced 
//by 0. For example, inverting[0, 1, 1] results in [1, 0, 0].
const flip = (arr) => {
    const pairs = {
        1: 0,
        0: 1
    }
    const output = []
    for (ele of arr) {
        output.push(pairs[ele])
    }
    return output
}

const flipAndInvertImage = function (A) {
    const newArr = []
    for (arr of A) {

        newArr.push(flip(arr).reverse())
    }
    return newArr
};


// console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))
// [[1, 0, 0], [0, 1, 0], [1, 1, 1]]
// console.log(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]))
// [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]


//-----------------------------------------------
//A self - dividing number is a number that is divisible by every digit it contains.
//For example, 128 is a self - dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
//Also, a self - dividing number is not allowed to contain the digit zero.
//Given a lower and upper number bound, output a list of every possible self dividing 
//number, including the bounds if possible.

//V1
const selfDividingNumbers = function (left, right) {
    const nums = [];
    let selfDiving = false
    for(let i = left; i <= right; i++) {
        const arr = String(i).split("");
        for(num of arr) {
            const int = parseInt(num);
            if (int === 0) {
                selfDiving = false; 
                break;
            } else if (i % int !== 0) {
                selfDiving = false;
                break;
            } else if (i % int === 0) {
                selfDiving = true
            }
        }
        if (selfDiving === true) {
            nums.push(i)
            selfDiving = false
        }

    }
    return nums
};

//V2
const selfDividingNumbersV2 = function (left, right) {
    const nums = [];
    for (let i = left; i <= right; i++) {
        const arr = String(i).split("");
        const found = arr.every(num => {
            return (parseInt(num) > 0 && (i % parseInt(num) === 0))
        })

        if (found) {
            nums.push(i)
        }

    }
    return nums
};

const selfDividingNumbersRecursive = function (left, right, arr = []) {
    if (right < left) return arr
    const nums = String(right).split("").every(num => {
        return (parseInt(num) > 0 && (right % parseInt(num) === 0))
    })
    if (nums) {
        arr.unshift(right)
        return selfDividingNumbersRecursive(left, (right - 1), arr)
    } else {
        return selfDividingNumbersRecursive(left, (right-1), arr)
    }
};

// console.log(selfDividingNumbers(left = 1, right = 22))
// console.log(selfDividingNumbersV2(left = 1, right = 22))
// console.log(selfDividingNumbersRecursive(left = 1, right = 22))

//We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

//Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

const checkPerfectNumber = function (num) {
    let sum = 0
    for(let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i
        }
    }
    return (sum === num)
};

// console.log(checkPerfectNumber(28))
//True


// /////////// NYC Talent problems


// for (x of operations) {
//     let op = x.split(" ")
//     switch (op[0]) {
//         case "push":
//             stack.push(parseInt(op[1]));
//             break;
//         case "pop":
//             stack.pop();
//             break;
//         case "inc":
//             let v = parseInt(op[2])
//             let i = parseInt(op[1])
//             for (let idx = 0; idx < i; idx++) {
//                 stack[idx] += v
//             }
//             break;
//         default:
//             break;
//     }
//     let last = stack.length - 1
//     console.log((stack.length === 0) ? "EMPTY" : stack[last]);
// }

// operations.forEach(operation => {
//     if (operation.startsWith("push")) {
//         stack.push(parseInt(operation.split(" ")[1]))
//     } else if (operation.startsWith("pop")) {
//         stack.pop()
//     } else if (operation.startsWith("inc")) {
//         let v = parseInt(operation.split(" ")[2])
//         let i = parseInt(operation.split(" ")[1])
//         for (let idx = 0; idx < i; idx++) {
//             stack[idx] += v
//         }
//     }
//     let last = stack.length - 1
//     // console.log((last < 0) ? "EMPTY" : stack[last]);
// })  


// for (let x of operations) {
//     if (!x.startsWith("push") && !x.startsWith("pop") && !x.startsWith("inc")) return;
//     let op = x.split(" ")
//     if (op[0] === "push") {
//         stack.push(parseInt(op[1]))
//     } else if (op[0] === "pop") {
//         stack.pop()
//     } else if (op[0] === "inc") {
//         let v = parseInt(op[2])
//         let i = parseInt(op[1])
//         for (let idx = 0; idx < i; idx++) {
//             stack[idx] += v
//         }
//     }
//     let last = stack.length - 1
//     console.log((last < 0) ? "EMPTY" : stack[last]);
// }


// ////////////////////////////////////////////
// function getMin(s) {
//     // Write your code here
//     const pairs = {
//         "(": ")",
//         ")": "("
//     }
//     const stack = []
//     let count = 0
//     let arr = s.split("")

//     for (let i = 0; i < arr.length; i++) {
//         const ele = arr[i]
//         if (ele === "(" && i === arr.length - 1) {
//             count++
//         } else if (ele === "(") {
//             stack.push(arr[i])
//         } else if (ele === ")") {
//             const last = stack.pop()
//             if (pairs[last] !== ele) {
//                 count++
//                 stack.push(last)
//             }
//         }
//     }
//     return count

// }


function countPairs(numbers, k) {
    // Write your code here
    let count = 0
    const pairs = {}

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const pair = [numbers[i], numbers[j]]
            // // console.log(pair)
            // if (!pairs[pair]) pairs[pair] = 0
            if (pair[0] + k === pair[1] && !pairs[pair]) {
                pairs[pair] = 0
                count += 1
            }
        }
    }
    return pairs
}

// console.log(countPairs([1,2,3,4,5,6], 2))


/////////


var replaceElements = function (arr) {
    const newArr = []
    let greatest = 0
    for (let i = 0; i < arr.length; ++i) {
        if (i === arr.length - 1) {
            newArr.push(-1)
            break;
        }

        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[j] > greatest) {
                greatest = arr[j]
            }
        }
        newArr.push(greatest)
        greatest = 0
    };
    return newArr;
};

replaceElements([17, 18, 5, 4, 6, 1])