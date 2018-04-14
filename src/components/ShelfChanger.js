import React from "react";
import { PropTypes } from "prop-types";
import BOOK_SHELVES from "../BookshelfConstants";

const ShelfChanger = ({ book, onUpdateShelf }) => (
  <div className="book-shelf-changer">
    <select
      defaultValue={book.shelf || "none"}
      onChange={e => onUpdateShelf(book, e.target.value)}
    >
      <option value="moveTo" disabled>
        Move to...
      </option>
      {BOOK_SHELVES.map(shelf => (
        <option key={shelf.name} value={shelf.name}>
          {shelf.displayName}
        </option>
      ))}
      <option value="none">None</option>
    </select>
  </div>
);

ShelfChanger.propTypes = {
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

export default ShelfChanger;
