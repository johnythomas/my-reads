import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { DebounceInput } from "react-debounce-input";
import * as BookAPI from "../BooksAPI";
import Book from "./Book";

const SearchBooks = ({ books, onUpdateShelf }) => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchedBooks, setSearchedBooks] = useState([]);

  const mergeSearchResultWithBooks = searchResults =>
    searchResults.map(res => {
      const book = books.find(bk => res.id === bk.id);
      if (book) res.shelf = book.shelf;
      return res;
    });

  const updateQuery = queryString => {
    setQuery(queryString);
    setIsLoading(true);

    if (!queryString) {
      setSearchedBooks([]);
      setIsLoading(false);
      return;
    }
    BookAPI.search(query).then(booksRes => {
      setSearchedBooks(
        !query || !booksRes || booksRes.error === "empty query"
          ? []
          : mergeSearchResultWithBooks(booksRes)
      );
      setIsLoading(false);
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <DebounceInput
            debounceTimeout={300}
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={e => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {isLoading && <li className="loader" />}
          {!isLoading &&
            (searchedBooks.length === 0 ? (
              <li className="message">No Books found</li>
            ) : (
              searchedBooks.map(book => (
                <li key={book.id}>
                  <Book book={book} onUpdateShelf={onUpdateShelf} />
                </li>
              ))
            ))}
        </ol>
      </div>
    </div>
  );
};

SearchBooks.propTypes = {
  onUpdateShelf: PropTypes.func.isRequired,
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
  ).isRequired
};

export default SearchBooks;
