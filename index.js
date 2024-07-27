// Set

const booksLibrary = new Set();



const addBook = (set, title) => {
  if(set.has(title)){
    console.log(`Книгу "${title}", є у бібліотеці`)
  }else{
    set.add(title)
    console.log(`Книга "${title}", додано до бібліотеки`)
  }
  
}

addBook(booksLibrary, "Я - Безодня");
addBook(booksLibrary, "Я - Безодня");

addBook(booksLibrary, "Лазарус")
addBook(booksLibrary, "Я бачу вас цікавить пітьма")
addBook(booksLibrary, "Усі в моїй родині вбивці")
addBook(booksLibrary, "Хімія смерті: перше розслідування")
addBook(booksLibrary, "1794")
addBook(booksLibrary, "1793")
addBook(booksLibrary, "1795")

console.log(booksLibrary)

const booksLibraryArray = Array.from(booksLibrary)

booksLibraryArray.sort()

const sortBooksLibrary = new Set(booksLibraryArray)

console.log(sortBooksLibrary)