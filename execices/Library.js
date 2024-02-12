
const book = {
    "Pride and Prejudice": 9.99,
    "To Kill a Mockingbird": 12.50,
    "One Hundred Years of Solitude": 14.95,
};

function bookPrice(bookName) {
    const lowercaseBookName = bookName.toLowerCase();
    
    if (lowercaseBookName in book) {
        return book[lowercaseBookName];
    } else {
        return "Book not found";
    }
}

console.log(bookPrice("To Kill a Mockingbird")); 
console.log(bookPrice("Book4")); 

//