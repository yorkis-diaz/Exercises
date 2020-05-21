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