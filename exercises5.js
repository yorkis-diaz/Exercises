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