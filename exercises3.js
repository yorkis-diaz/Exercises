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