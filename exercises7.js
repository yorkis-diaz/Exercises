//Js customs

//myapply

Function.prototype.myApply = function (context, args = []) {
    return this.bind(context, ...args)();
};

//mybind

Function.prototype.myBind = function (context, ...bindArgs) {
    const that = this;
    return function (...callArgs) {
        return that.apply(context, bindArgs.concat(callArgs));
    };
};

// mycall

Function.prototype.myCall = function (context, ...args) {
    return this.bind(context, ...args)();
};

//mycurry
Function.prototype.myCurry = function (numArgs) {
    let nums = [];
    let fcn = this;
    return function _myCurry(el) {
        nums.push(el);
        if (nums.length < numArgs) {
            return _myCurry;
        } else {
            return fcn(...nums);
        }
    };
};

//myeach

Array.prototype.myEach = function (func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
};

//myevery

Array.prototype.myEvery = function (callback) {
    let every = true

    this.myEach(el => {
        if (!callback(el)) every = false;
    });

    return every;
};

// myfilter


Array.prototype.myFilter = function (callback) {
    const result = [];

    this.myEach((el) => {
        if (callback(el)) result.push(el)
    });

    return result;
};

//myfind
function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        }
    }
}

//myflatten

Array.prototype.myFlatten = function () {
    let flattened = [];

    this.forEach((el) => {
        if (el instanceof Array) {
            flattened = flattened.concat(el.myFlatten());
        } else {
            flattened.push(el);
        }
    });

    return flattened;
};

//myjoin

Array.prototype.myJoin = function (separator = '') {
    let newString = '';

    this.forEach((el, idx) => {
        newString += `${el}`;
        if (idx < this.length - 1) newString += separator;
    });

    return newString;
};

//myreduce

Array.prototype.myReduce = function (callback, acc) {
    const array = this.slice();
    if (typeof acc === 'undefined') {
        acc = array.shift();
    }

    array.myEach(el => {
        acc = callback(acc, el);
    });

    return acc;
};

//myreject
Array.prototype.myReject = function (callback) {
    const selection = [];

    this.myEach(el => {
        if (!callback(el)) {
            selection.push(el);
        }
    });

    return selection;
};

//myReverse

function myReverse(array) {
    const result = [];
    for (let i = 1; i < array.length + 1; i++) {
        result[i - 1] = array[array.length - i];
    }

    return result;
}

//myrotate

Array.prototype.myRotate = function (times = 1) {
    let rotations;
    const rotated = this.slice(0);

    if (times < 0) {
        rotations = this.length + (times % this.length);
    } else {
        rotations = times % this.length;
    }

    for (let i = 0; i < rotations; i++) {
        rotated.push(rotated.shift());
    }

    return rotated;
};


//myslice

String.prototype.mySlice = function (start, end) {
    let slice = "";

    if (typeof end === 'undefined') {
        end = this.length;
    }

    for (let i = start; i < end && i < this.length; i++) {
        slice += this[i];
    }
    return slice;
};

//mySome

Array.prototype.mySome = function (callback) {
    let some = false;

    this.myEach(el => {
        if (callback(el)) some = true;
    });

    return some;
};

//permutation
function permutations(array) {
    if (array.length <= 1) {
        return [array];
    }
    const result = [];
    const first = array.pop();
    const prevPerms = permutations(array);

    prevPerms.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            let nextPerm = perm.slice(0, i).concat([first]).concat(perm.slice(i));
            result.push(nextPerm);
        }
    });

    return result;
}
//piglatinify

function pigLatinify(sentence) {
    const words = sentence.split(' ');
    const translateWord = (word) => {
        vowels = 'aeiou'.split('');
        if (vowels.indexOf(word[0]) != -1) {
            return `${word}ay`;
        } else {
            let phonemeEnd = 0;
            while (!(vowels.indexOf(word[phonemeEnd]) != -1)) {
                phonemeEnd += 1;
            }

            if (word[phonemeEnd - 1] === 'q') phonemeEnd += 1;
            return `${word.slice(phonemeEnd)}${word.slice(0, phonemeEnd)}ay`;
        }
    };

    return words.map(word => translateWord(word)).join(' ');
}

//prime factorization

function primeFactorization(num) {
    if (num === 1) return [];

    let i = 2;

    while (!(isPrime(i) && num % i === 0)) {
        i++;
    }

    return [i].concat(primeFactorization(num / i));
}

// function isPrime(num) {
//     if (num < 2) return false;
//     let i = 2;

//     while (i < num) {
//         if (num % i === 0) return false;
//         i++;
//     }

//     return true;
// }

// primes

function primes(count) {
    const primeNums = [];
    let i = 2;

    while (primeNums.length < count) {
        if (isPrime(i)) primeNums.push(i);
        i += 1;
    }

    return primeNums;
}

function isPrime(num) {
    for (let j = 2; j < num; j++) {
        if (num % j === 0) return false;
    }

    return true;
};

// quicksort

Array.prototype.quickSort = function (func) {
    if (this.length < 2) return this;

    if (!func) {
        func = (x, y) => {
            if (x < y) return - 1;
            return 1;
        };
    }

    const pivot = this[0];
    let left = this.slice(1).filter((el) => func(el, pivot) === -1);
    let right = this.slice(1).filter((el) => func(el, pivot) !== -1);
    left = left.quickSort(func);
    right = right.quickSort(func);

    return left.concat([pivot]).concat(right);
};