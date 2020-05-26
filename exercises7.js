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