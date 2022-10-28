class LibraryCollection {
    constructor(capacity){
        this.capacity = capacity
        this.books = []
    }
    addBook(bookName, bookAuthor){
        
        if (this.books.length >= this.capacity) {
            throw new Error ("Not enough space in the collection.")
        }else{
            
            this.books.push({bookName,bookAuthor, payed:false})
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }
    payBook(bookName){
        const findBook = this.books.find(b => b.bookName === bookName);

        if (!findBook) {
            throw new Error(`${bookName} is not in the collection.`);
        };

        if (findBook.payed) {
            throw new Error(`${bookName} has already been paid.`)
        } else {
            findBook.payed = true;
            return `${findBook.bookName} has been successfully paid.`
        }
    }
    removeBook(bookName){
        const findBook = this.books.find(b => b.bookName == bookName);

        if (!findBook) {
            throw new Error("The book, you're looking for, is not found.");
        };

        if (!findBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        } else {
            const index = this.books.indexOf(findBook);
            this.books.splice(index, 1);
            return `${bookName} remove from the collection.`
        }
    }
    getStatistics(bookAuthor){
        if (!bookAuthor) {
            
            let sorted = this.books.sort((a,b) => a.bookName.localeCompare(b.bookName))
            let res = []
            res.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`)
            sorted.map(book => {
                let isPaid = book.payed === true ? "Has Paid" : "Not Paid"
                res.push(`${book.bookName} == ${book.bookAuthor} - ${isPaid}.`)
            })
            return res.join('\n').trim()
            
        }else{
            let findAuthor = this.books.find(book => book.bookAuthor === bookAuthor)
            if (findAuthor) {
                let res = []
                let sorted = this.books.sort((a,b) => a.bookName.localeCompare(b.bookName))
                sorted.filter(book=> {
                    let isPaid = book.payed === true ? "Has Paid" : "Not Paid"
                    if(book.bookAuthor === bookAuthor){
                        res.push(`${book.bookName} == ${book.bookAuthor} - ${isPaid}.`)
                    }
                })
                return res.join('\n').trim()
                
            }else{
                return `${bookAuthor} is not in the collection.`
            }
            
        }
    }
}
const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));

