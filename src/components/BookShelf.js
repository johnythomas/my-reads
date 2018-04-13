import React from "react";
import { PropTypes } from "prop-types";
import Book from "./Book";

const BookShelf = ({ name, books, onUpdateShelf, isLoading }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {isLoading && <li className="loader" />}
        {!isLoading &&
          (books.length !== 0 ? (
            books.map(book => (
              <li key={book.id}>
                <Book book={book} onUpdateShelf={onUpdateShelf} />
              </li>
            ))
          ) : (
            <li className="message">There are no books in this shelf</li>
          ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      shelf: PropTypes.string,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
        smallThumbnail: PropTypes.string
      })
    }).isRequired
  ).isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default BookShelf;
