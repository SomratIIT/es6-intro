
// object destructuring 
const actor = {
    name : 'somrat',
    age : 25,
    phone : '01709416860'
}

console.log(actor.phone);
// If right side is an object then left side of destructuring  will also be an object.
const {name}  =actor ;
console.log(name);

// array destructuring
