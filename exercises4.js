//JavaScript iterations

//The splice() method adds/removes items to/from an array, and returns the removed item(s).

let num1 = [0, 1, 2, 3];
num1.splice(1, 0, 4);

//The slice() method returns the selected elements in an array, as a new array object.

let num2 = [0, 1, 2, 3];
num2.slice(0, 2);


//FibSum

function fibsSum(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibsSum(n - 1) + fibsSum(n - 2) + 1;
}