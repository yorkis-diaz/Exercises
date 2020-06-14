//boats to save people 881

var numRescueBoats = function (people, limit) {
    if (people.length === 0) return 0;
    people.sort((a, b) => a - b)

    let numOfBoats = 0
    let heavier = people.length - 1
    let lighter = 0

    while (lighter <= heavier) {
        if (people[heavier] + people[lighter] <= limit) {
            lighter++
            heavier--
        } else {
            heavier--
        }
        numOfBoats++
    }

    return numOfBoats
};