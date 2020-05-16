//inherits 
Function.prototype.inherits = function (Parent) {
    function Surrogate() { }
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};


// jumbleSort

function jumbleSort(str, alphabet = null) {
    alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split('');
    str = str.split('');

    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < str.length; i++) {
            if (i === str.length - 1) break;
            let current = str[i];
            let next = str[i + 1];
            if (alphabet.indexOf(current) > alphabet.indexOf(next)) {
                str[i] = next;
                str[i + 1] = current;
                sorted = false;
            }
        }
    }

    return str.join('');
}

//Median JS

Array.prototype.median = function () {
    if (!this.length) return null;
    const sorted = this.sort();
    const mid = Math.floor(this.length / 2);

    if (this.length % 2 !== 0) {
        return sorted[mid];
    } else {
        return (sorted[mid] + sorted[mid - 1]) / 2;
    }
};

//MergeSort

Array.prototype.mergeSort = function (func) {
    if (this.length <= 1) return this;

    if (!func) func = (left, right) => {
        return left < right ? -1 : left > right ? 1 : 0;
    };

    const midpoint = Math.floor(this.length / 2);
    const sortedLeft = this.slice(0, midpoint).mergeSort(func);
    const sortedRight = this.slice(midpoint).mergeSort(func);
    return merge(sortedLeft, sortedRight, func);
};

function merge(left, right, comparator) {
    let merged = [];

    while (left.length && right.length) {
        switch (comparator(left[0], right[0])) {
            case -1:
                merged.push(left.shift());
                break;
            case 0:
                merged.push(left.shift());
                break;
            case 1:
                merged.push(right.shift());
                break;
        }
    }

    merged = merged.concat(left, right);
    return merged;
}