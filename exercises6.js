//inherits 
Function.prototype.inherits = function (Parent) {
    function Surrogate() { }
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};


// jumbleSort

function jumbleSort(str, alphabet = null) {
    alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split('');
    str = str.split('');

    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < str.length; i++) {
            if (i === str.length - 1) break;
            let current = str[i];
            let next = str[i + 1];
            if (alphabet.indexOf(current) > alphabet.indexOf(next)) {
                str[i] = next;
                str[i + 1] = current;
                sorted = false;
            }
        }
    }

    return str.join('');
}