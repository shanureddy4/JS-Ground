var person = new Object();
person['firstname'] = 'shanu';
person['lastname'] = 'reddy';

console.log(person.firstname);
console.log(person['lastname']);

person.address = new Object();
person.address.street = "JR layout"
person.address.city = "Bengaluru";

console.log(person['address'].street);
console.log(person.address.city);