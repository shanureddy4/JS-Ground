// oop is done this way traditionally

let book1 = {
    title: "Fountain Head",
    author: "Ayan Rand",
    getSummary : ()=>{
        console.log(`Book titile is ${book1.title} author is ${book1.author}`)
    }

}

book1.getSummary()

// what if we want to have multiple books
// be aware that somehow you are unable to use let Book = ()=> 
function Book (title, author){
    this.title = title;
    this.author = author;
    this.getSummary = ()=>{
        console.log(`Book titile is ${book1.title} author is ${book1.author}`)
    }
}

const book2 = new Book("Subtle Art", "Mark Manson");
book2.getSummary();

// there are prototype and prototipical inheritance to be discussed. 