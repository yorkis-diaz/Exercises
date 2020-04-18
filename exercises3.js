//initialize hash map

var MyHashMap = function () {
    this.map = {}
};

MyHashMap.prototype.put = function (key, value) {
    this.map[key] = value
};

MyHashMap.prototype.get = function (key) {
    return this.map[key] != null ? this.map[key] : -1
};

MyHashMap.prototype.remove = function (key) {
    this.map[key] = null
};


//Intersection of Two Arrays

var intersection = function (nums1, nums2) {
    let set = new Set(nums1);
    for (let item of set) {
        if (!nums2.includes(item)) {
            set.delete(item);
        }
    }
    return [...set];
}

// someOfLeftLeaves

var sumOfLeftLeaves = function (node, isLeft = false) {
    if (node === null) { return 0 }
    if (isLeft && node.left === null && node.right === null) { return node.val }
    return sumOfLeftLeaves(node.left, true) + sumOfLeftLeaves(node.right, false)
};

//missingNumber

var missingNumber = function (nums) {
    let n = nums.length + 1;
    let sum = nums.reduce((a, b) => a + b);
    return (n * (n - 1) / 2) - sum;
};

// romantoInt

var romanToInt = function (s) {
    var sym = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if ((s[i] && s[i + 1]) &&
            (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) ||
            (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) ||
            (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M'))) {
            res = res - sym[s[i]];
        }
        else {
            res = res + sym[s[i]];
        }
    }
    return res;
};