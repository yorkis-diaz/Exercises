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
