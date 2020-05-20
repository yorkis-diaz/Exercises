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