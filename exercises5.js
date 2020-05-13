Array.prototype.quickSort = function (cb) {
    let dupe = this.slice(0)
    if (dupe.length <= 1) {
        return dupe;
    }
    cb = ((cb === undefined) ? (a, b) => a < b : cb)
    // if (cb === undefined){
    //     cb = (a, b) => a < b;
    // }
    let pivot = dupe.shift();
    let leftSide = [];
    let rightSide = [];

    dupe.forEach((el) => (cb(el, pivot)) ? leftSide.push(el) : rightSide.push(el));
    return leftSide.quickSort(cb).concat([pivot], rightSide.quickSort(cb))
}

//base converter

function baseConverter(n, b) {
    if ([0, 1].includes(n)) return n.toString()

    const digits = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f'
    ];

    return baseConverter(Math.floor(n / b), b) + digits[n % b];
}

//bubblesort

const defaultCallback = (num1, num2) => {
    if (num1 < num2) {
        return -1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return 1;
    }
};

Array.prototype.bubbleSort = function (callback) {
    if (typeof callback !== "function") {
        callback = defaultCallback;
    }

    let resultArr = this.slice();
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 1, n = resultArr.length; i < n; i++) {
            if (callback(resultArr[i - 1], resultArr[i]) === 1) {
                sorted = false;
                let swap = resultArr[i - 1];
                resultArr[i - 1] = resultArr[i];
                resultArr[i] = swap;
            }
        }
    }
    return resultArr;
};

//ceasar cypher

function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let encoded = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            encoded += ' ';
            continue;
        }

        const offset = (alphabet.indexOf(str[i]) + shift) % 26;
        encoded += alphabet[offset];
    }

    return encoded;
}

//deepdup

function deepDup(arr) {
    return arr.map(el => el instanceof Array ? deepDup(el) : el);
}

//doubler

function doubler(array) {
    return array.map(el => el * 2);
}

//recursive factorial

function factorialsRec(num) {
    if (num === 1) return [1];

    const facts = factorialsRec(num - 1);
    facts.push(facts[facts.length - 1] * (num - 1));
    return facts;
}

// Factors

function factors(num) {
    const facts = Array.from(Array(num)).map((el, idx) => idx + 1);
    return facts.filter(el => num % el === 0);
}

//firstEvenNumbersSum
function firstEvenNumbersSum(n) {
    if (n === 1) return 2;
    return 2 * n + firstEvenNumbersSum(n - 1);
}