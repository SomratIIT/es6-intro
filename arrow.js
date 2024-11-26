function add(a,b){
    // const result = a+b;
    return a+b;
}

const final = add(5,90);

console.log(final);
// arrow function

const add3 = (a,b) => a + b;
const sum = add3(49,49);
console.log(sum);


// Another example

const getThird = (numbers) => numbers[2];

const third = getThird([10,20,30,40]);
console.log(third);