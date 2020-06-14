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


// 1002. Find Common Characters

var commonChars = function (A) {
    let commonLetters = {}
    let results = []

    for (let i = 0; i < A.length; i++) {
        let tempObj = {}
        for (let j = 0; j < A[i].length; j++) {
            if (i === 0) {
                if (!commonLetters[A[i][j]]) commonLetters[A[i][j]] = 0
                commonLetters[A[i][j]]++
            } else if (i > 0 && commonLetters[A[i][j]]) {
                if (!tempObj[A[i][j]]) tempObj[A[i][j]] = 0
                tempObj[A[i][j]]++
            }
        }
        for (let letter in tempObj) {
            if (commonLetters[letter] < tempObj[letter]) {
                tempObj[letter] = commonLetters[letter]
            }
        }
        if (i > 0) commonLetters = tempObj
    }

    for (let common in commonLetters) {
        const letterArray = new Array(commonLetters[common]).fill(common)
        results = results.concat(letterArray)
    }
    return results
};