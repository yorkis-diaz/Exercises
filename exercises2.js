const containsNearbyAlmostDuplicate = function (nums, k, t) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
                return true
            }
        }
    }
    return false
};

const nums = [1, 2, 3, 1]
const k = 3 
const t = 0 // true

console.log(containsNearbyAlmostDuplicate(nums, k, t))

var deleteDuplicates = function (head) {
    let node = head

    while (node != null && node.next != null)
        if (node.val == node.next.val)
            node.next = node.next.next
        else
            node = node.next

    return head
};

//numberofsteps

var numberOfSteps = function (num) {
    for (let i = 0; num >= 0; i++) {
        if (num === 0) {
            return i
        } else if (num % 2 === 0) {
            num = num / 2
        } else if (num % 2 !== 0) {
            num = num - 1
        }
    }
};

//balancedString

var balancedStringSplit = function (s) {
    let balanced = 0
    let r = 0
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "R") {
            r++
        } else {
            r--
        }
        if (r === 0) {
            balanced++
        }
    }
    return balanced
};

// DistributedCandies
var distributeCandies = function (candies, num_people) {
    const arr = new Array(num_people).fill(0)
    let start = 0
    let first_candy = 1
    while (candies > 0) {
        if (candies - first_candy < 0) {
            arr[start % num_people] += candies
            candies -= candies
        } else {
            arr[start % num_people] += first_candy
            candies -= first_candy
            start += 1
            first_candy += 1
        }
    }
    return arr
};