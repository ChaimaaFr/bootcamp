const book = {
    "Book1": 20,
    "Book2": 25,
    "Book3": 15,
};

function priceOfBook(bookName) {
    const lowercaseBookName = bookName.toLowerCase();
    
    if (lowercaseBookName in book) {
        return book[lowercaseBookName];
    } else {
        return "Book not found";
    }
}

console.log(priceOfBook("Book2")); 
console.log(priceOfBook("Book5")); 
//
const book = {
    "Book1": 20,
    "Book2": 25,
    "Book3": 15,
};

function priceOfBook(bookName) {
    const lowercaseBookName = bookName.toLowerCase();
    
    if (lowercaseBookName in book) {
        return book[lowercaseBookName];
    } else {
        return "Book not found";
    }
}

console.log(priceOfBook("Book2")); 
console.log(priceOfBook("Book5")); 
//
const books = {
    "Book1": 85,
    "Book2": 80,
    "Book3": 100,
    
};
function affordableBooks(budget) {
    const affordableBooksList = [];

    for (const [bookName, price] of Object.entries(books)) {
        if (price <= budget) {
            affordableBooksList.push(bookName);
        }
    }

    return affordableBooksList;
}

const budget = 90;
const affordableBooksList = affordableBooks(budget);

console.log(`Books within the budget of ${budget}:`);
console.log(affordableBooksList);

//

const book = {
    "Book1": { genre: "Drama", price: 100 },
    "Book2": { genre: "Science Fiction", price: 100 },
    "Book3": { genre: "Fantasy", price: 95 },
    "Book4": { genre: "Science Fiction", price: 100 },

};
function findBookByGenre(genre) {
    const matchingBooks = [];

    for (const [bookName, bookInfo] of Object.entries(book)) {
        if (bookInfo.genre === genre) {
            matchingBooks.push(bookName);
        }
    }

    return matchingBooks;
}
const genreToSearch = "Science Fiction";
const booksInGenre = findBookByGenre(genreToSearch);

console.log(`Books in the genre "${genreToSearch}":`);
console.log(booksInGenre);

//
const book = {
    "Book1": { genre: "Drama", price: 100 },
    "Book2": { genre: "Science Fiction", price: 120 },
    "Book3": { genre: "Fantasy", price: 100 },
    "Book4": { genre: "Drama", price: 90 },
  
};

// to group books by genre
function groupByGenre() {
    const groupedBooks = {};

    for (const [bookName, bookInfo] of Object.entries(book)) {
        const genre = bookInfo.genre;
        if (!groupedBooks[genre]) {
            groupedBooks[genre] = [];
        }
        
        groupedBooks[genre].push(bookName);
    }

    return groupedBooks;
}
const booksGroupedByGenre = groupByGenre();

console.log("Books grouped by genre:");
console.log(booksGroupedByGenre);
//
const book = {
    "Book1": { genre: "Drama", price: 100 },
    "Book2": { genre: "Science Fiction", price: 150 },
    "Book3": { genre: "Fantasy", price: 200 },
    "Book4": { genre: "Drama", price: 90 },
};

//sort books by price in ascending order 
function sortBooksByPrice() {
    const booksArray = Object.entries(book);

    for (let i = 0; i < booksArray.length - 1; i++) {
        for (let j = 0; j < booksArray.length - 1 - i; j++) {
            const [, bookInfo1] = booksArray[j];
            const [, bookInfo2] = booksArray[j + 1];

            if (bookInfo1.price > bookInfo2.price) {
                [booksArray[j], booksArray[j + 1]] = [booksArray[j + 1], booksArray[j]];
            }
        }
    }

    const sortedBooks = Object.fromEntries(booksArray);
    return sortedBooks;
}

const booksSortedByPrice = sortBooksByPrice();

console.log("Books sorted by price in ascending order :");
console.log(booksSortedByPrice);



