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
