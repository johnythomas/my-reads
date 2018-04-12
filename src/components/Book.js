import React from "react";
import { PropTypes } from "prop-types";

const Book = ({ book, onUpdateShelf }) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url("${
            book.imageLinks ? book.imageLinks.smallThumbnail : ""
          }")`
        }}
      />
      <div className="book-shelf-changer">
        <select
          defaultValue={book.shelf || "none"}
          onChange={e => onUpdateShelf(book, e.target.value)}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors && book.authors.join()}</div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    shelf: PropTypes.string,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
      smallThumbnail: PropTypes.string
    })
  }).isRequired,
  onUpdateShelf: PropTypes.func.isRequired
};

export default Book;
