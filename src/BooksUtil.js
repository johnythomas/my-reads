export const filterBook = (books, shelf) =>
  books.filter(book => book.shelf === shelf);
