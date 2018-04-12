import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import BookShelf from "./BookShelf";
import filterBook from "../BooksUtil";

const bookShelves = [
  {
    name: "currentlyReading",
    displayName: "Currently Reading"
  },
  {
    name: "wantToRead",
    displayName: "Want to Read"
  },
  {
    name: "read",
    displayName: "Read"
  }
];

const ListShelves = ({ books, onUpdateShelf }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        {bookShelves.map(shelf => (
          <BookShelf
            key={shelf.name}
            name={shelf.displayName}
            books={filterBook(books, shelf.name)}
            onUpdateShelf={onUpdateShelf}
          />
        ))}
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

ListShelves.propTypes = {
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
  onUpdateShelf: PropTypes.func.isRequired
};

export default ListShelves;
