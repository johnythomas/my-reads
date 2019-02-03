import React from "react";
import { PropTypes } from "prop-types";
import ShelfChanger from "./ShelfChanger";
import BookThumbnail from "../icons/BookThumbnail.png";

const Book = ({ book, onUpdateShelf }) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url("${
            book.imageLinks ? book.imageLinks.smallThumbnail : BookThumbnail
          }")`
        }}
      />
      <ShelfChanger book={book} onUpdateShelf={onUpdateShelf} />
    </div>
    <a className="book-title" target="_blank" rel="noopener noreferrer" href={book.previewLink}>
      {book.title}
    </a>
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
    }),
    previewLink: PropTypes.string.isRequired
  }).isRequired,
  onUpdateShelf: PropTypes.func.isRequired
};

export default Book;
