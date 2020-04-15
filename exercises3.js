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