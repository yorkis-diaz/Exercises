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

