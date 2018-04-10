import React from "react";
import { PropType } from "prop-types";
import Book from "./Book";

const BookShelf = ({ name }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          <Book />
        </li>
        <li>
          <Book />
        </li>
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  name: PropType.string.isRequired
};

export default BookShelf;
