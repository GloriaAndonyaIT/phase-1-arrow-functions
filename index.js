
const divide = (a, b) => {
    console.log(`Dividing ${a} and ${b}`);
    return a / b;
};
console.log(divide(2000, 100)); 

const square = (x) => {
    console.log(`Squaring ${x}`);
    return x ** 2;
};
console.log(square(4));

const add = (a, b) => {
    console.log(`Adding ${a} and ${b}`);
    return a + b;
};
console.log(add(3, 4));

module.exports = { divide, square, add };
