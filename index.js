// Is number odd/even/NaN?
function isItOdd(num) {
        if (num % 2 === 0) {
                return "Number is even"
        } if (num % 2 === 1) {
                return "Number is odd"
        } else {
                return NaN
        }
};
console.log(isItOdd("98157"));

// Separate by -
function kebabizer(str) {
        let intoArr = str.split("");

        for (i = 0; i<intoArr.length; i++) {
                intoArr[i] = intoArr[i].repeat(i)
        }

         return intoArr = intoArr.join("-");
};
console.log(kebabizer("adorable"));

// Strings and nums filter
function filtererEr(array, stringOrNumber) {
        return array.filter((el) => typeof(el) === stringOrNumber);
}
console.log(filtererEr(["boo", 5, "ze", 6, 6, "me", 8, "nao"], "string"));

// String "5" into num 5
function stringToNumber(arrStringNumber) {
        return arrStringNumber.map(el => Number(el));
}
console.log(stringToNumber(["2", "8", "14"]));

// Plucker (return array from object key values)
function pluck(arrObj, keyName) {
        return arrObj.map(object => object[keyName]);
}
console.log(pluck([{name: "Bob", job: "drummer"}, {name: "Paul", job: "librarian"}, {name: "Tom", job: "world class nobody"}], "job"));

// Geese remover
const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
function geeseAway(array) {
        return array.filter(item => !geese.includes(item));
}
console.log(geeseAway(["Rum", "Drum", "Roman Tufted", "Broom", "Steinbacher", "Room"]));