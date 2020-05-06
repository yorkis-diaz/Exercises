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