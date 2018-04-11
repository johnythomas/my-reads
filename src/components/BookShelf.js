import React from "react";
import { PropTypes } from "prop-types";
import Book from "./Book";

const BookShelf = ({ name, books, onUpdateShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.length !== 0 ? (
          books.map(book => (
            <li key={book.id}>
              <Book book={book} onUpdateShelf={onUpdateShelf} />
            </li>
          ))
        ) : (
          <li className="message">There are no books in this shelf</li>
        )}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        smallThumbnail: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  ).isRequired,
  onUpdateShelf: PropTypes.func.isRequired
};

export default BookShelf;
