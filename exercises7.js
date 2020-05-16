//Js customs

//myapply

Function.prototype.myApply = function (context, args = []) {
    return this.bind(context, ...args)();
};