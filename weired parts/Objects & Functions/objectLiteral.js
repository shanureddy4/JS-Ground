var Shanu = {
    firstname: "shanu",
    lastname: "reddy",
    address:{
        street:"JR layout",
        city: "Bengaluru"
    }
}

function greet(person){
    console.log("Hi "+person.firstname);
}

greet(Shanu);
greet({
    firstname:"Shanmukh"
})

Shanu.address = {
    street : "Kalyan Nagar"
}
console.log(Shanu) // above we are assignning to the new object, so you can't see city.