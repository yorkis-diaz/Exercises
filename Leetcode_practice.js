const multiply = (num1, num2) => {
    if (num1 === 0 || num2 === 0) {
        return "0"
    }
    let int = num1 * num2;

    const str = [];

    for (let i = num1.length - 1; i >= 0; --i) {
        for (let j = num2.length - 1; j >= 0; --j) {
            if (str[i + j] === undefined) {
                str[i + j] = num1[i] * num2[j]
            } else {
                str[i + j] += num1[i] * num2[j]
            }
        }
    }
    return str.reverse().join("");
}

// console.log(multiply("123456789", "987654321"))

//twoCitySchedCost
var twoCitySchedCost = function (costs) {
    console.log(costs)
    costs.sort((x, y) => (x[0] - x[1]) - (y[0] - y[1]));
    const mid = costs.length / 2;
    console.log(costs)

    return costs.reduce((acc, cur, i) => {
        if (i < mid) return acc + cur[0];
        else return acc + cur[1];
    }, 0)
};

// isAnagram

var isAnagram = function (s, t) {
    const count = {}
    s.split("").forEach((letter) => {
        if (!count[letter]) count[letter] = 0;
        count[letter]++
    })
    t.split("").forEach((letter) => {
        if (!count[letter]) count[letter] = 0;
        count[letter]--
    })
    return Object.values(count).every(letter => letter === 0)
};

// maxProfit

var maxProfit = function (prices) {
    let buyPrice;
    let previousDay;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (i === 0) {
            buyPrice = prices[i]
            previousDay = prices[i]
        } else {
            if (prices[i] > buyPrice && prices[i] > previousDay) {
                if (i === prices.length - 1) {
                    maxProfit += prices[i] - buyPrice
                }
                previousDay = prices[i]
            } else {
                maxProfit += previousDay - buyPrice
                buyPrice = prices[i]
                previousDay = prices[i]
            }
        }
    }
    return maxProfit
};

var maxProfit2 = function (prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        j = i + 1;
        if (prices[i] < prices[j]) {
            maxProfit += prices[j] - prices[i];
        }
    }
    return maxProfit;
};


// addDigits digitalroot

var addDigits = function (num) {
    let remaining = 0

    while (num > 0) {
        remaining += num % 10
        num = Math.floor(num / 10)

        if (num === 0 && remaining > 9) {
            num = remaining
            remaining = 0
        }
    }
    return remaining
};

//happy number 
var isHappy = function (n) {

    const found = new Set();

    while (n !== 1) {
        n = `${n}`.split("").reduce((acc, num) => {
            return acc += Math.pow(num, 2)
        }, 0);
        if (found.has(n)) break;
        found.add(n);
    }
    return n === 1
};

//isHappy version 2

var isHappy = function (n) {

    const found = new Set();

    while (n !== 1) {
        if (found.has(n)) return false
        found.add(n)
        let remainder = 0
        while (n > 0) {
            remainder += Math.pow((n % 10), 2)
            n = Math.floor(n /= 10)
        }
        n = remainder
        remainder = 0
    }
    return true
};

//tribonacci

var tribonacci = function (n) {
    const sequence = [0, 1, 1]
    if (n <= 2) return sequence[n]

    while (sequence.length <= n) {
        const seqLength = sequence.length
        let first = sequence[seqLength - 1]
        let second = sequence[seqLength - 2]
        let third = sequence[seqLength - 3]
        sequence.push(first + second + third)
    }
    return sequence[sequence.length - 1]
};

//tribonacci memoized

var tribonacci = function (n, memo = {}) {
    if (memo[n]) return memo[n]
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1

    return memo[n] = tribonacci((n - 1), memo) + tribonacci((n - 2), memo) + tribonacci((n - 3), memo)
};

//shuffled

var shuffle = function (nums, n) {
    const shuffled = []

    for (let i = 0; i < n; i++) {
        shuffled.push(nums[i])
        shuffled.push(nums[i + n])
    }

    return shuffled
};