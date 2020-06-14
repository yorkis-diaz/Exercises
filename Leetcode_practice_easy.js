// Intersection of two arrays II 350
var intersect = function (nums1, nums2) {
    const intersections = [];
    const setHolder = {};

    for (let i = 0; i < nums1.length; i++) {
        if (!setHolder[nums1[i]]) setHolder[nums1[i]] = 0
        setHolder[nums1[i]]++
    }

    for (let i = 0; i < nums2.length; i++) {
        if (setHolder[nums2[i]] && setHolder[nums2[i]] > 0) {
            intersections.push(nums2[i])
            setHolder[nums2[i]]--
        }
    }

    return intersections
};