// this is pretty much same as java, lot of sugar coated.

class Book {
    constructor(title,author){
        this.title = title;
        this.author = author;
    }
    getSummary(){
        console.log(`Book titile is ${this.title} author is ${this.author}`)
    
    }

    static bookTitle = ()=>{
        console.log("Book title is of string type");
    }
}
class Magazine extends Book{
    constructor(title,author,month){
        super(title,author);
        this.month = month;
    }
    getMonth(){
        console.log("Month is "+ this.month);
    }

}

let mag = new Magazine("Atlas Shrugged", "Ayan Rand", "Feb");
mag.getSummary();
mag.getMonth();
console.log(Book.bookTitle());