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

// 58. Length of Last Word

var lengthOfLastWord = function (s) {
    let stringArray = s.split(" ")
    let lastWord = 0;

    for (let i = stringArray.length - 1; i >= 0; i--) {
        if (stringArray[i].length > 0) {
            lastWord = stringArray[i].length;
            break;
        }
    }
    return lastWord
};

var lengthOfLastWord = function (s) {
    let stringArray = s.split(" ").filter((word) => word.length > 0)

    return stringArray[stringArray.length - 1] ? stringArray[stringArray.length - 1].length : 0
};

// 633. Sum of square Numbers

var judgeSquareSum = function (c) {
    for (let i = Math.floor(Math.sqrt(c)); i >= 0; i--) {
        if (Number.isInteger(Math.sqrt(c - i * i)))
            return true
    }
    return false
};

// 367. Valid Perfect Square

var isPerfectSquare = function (num) {
    if (num === 1) return true;
    let current = Math.floor(num / 2)

    for (let i = 1; i <= current; i++) {
        if (i * i === num) return true;

        if (Math.floor(current / 2) * Math.floor(current / 2) > num) {
            current = Math.floor(current / 2)
        }
    }
    return false;
};

// 69. Sqrt(x)

var mySqrt = function (x) {
    return Math.trunc(Math.sqrt(x))
};

// 204. Count Primes

var countPrimes = function (n) {
    // /Sieve of Eratosthenes

    const primes = new Array(n).fill(true)

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primes[i]) {
            for (let j = i * i; j < primes.length; j += i) {
                if (primes[j]) {
                    primes[j] = false;
                }
            }
        }
    }

    let count = 0

    for (let i = 2; i < primes.length; i++) {
        if (primes[i]) count++
    }
    return count
};