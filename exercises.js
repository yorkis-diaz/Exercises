const toLowerCase = function (str) {
    return str.toLowerCase()
};

// console.log(toLowerCase("HELLO"))

const isValid = function (s) {
    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    const stack = []

    for (char of s) {
        if (char in pairs) {
            stack.push(char)
        } else {
            const lastEntry = stack.pop()
            if (char !== pairs[lastEntry]) return false
        }
    }

    return (stack.length === 0) ? true : false
};
// console.log(isValid("()"))
// console.log(isValid("()[]{}"))
// console.log(isValid("(]"))
// console.log(isValid("([)]"))
// console.log(isValid("{[]}"))