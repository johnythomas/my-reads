import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import filterBook from "../BooksUtil";
import BOOK_SHELVES from "../BookshelfConstants";
import BooksContext from "../context";

const ListShelves = () => {
  const { books, isLoading, onUpdateShelf } = useContext(BooksContext);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {BOOK_SHELVES.map(shelf => (
            <BookShelf
              key={shelf.name}
              name={shelf.displayName}
              books={filterBook(books, shelf.name)}
              onUpdateShelf={onUpdateShelf}
              isLoading={isLoading}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListShelves;
