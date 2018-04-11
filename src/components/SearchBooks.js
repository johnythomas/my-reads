import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import * as BookAPI from "../BooksAPI";
import Book from "./Book";

class SearchBooks extends Component {
  state = {
    query: "",
    searchedBooks: []
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
    if (!query || !query.trim()) {
      this.setState(() => ({
        searchedBooks: []
      }));
      return;
    }
    BookAPI.search(query.trim()).then(books => {
      this.setState(() => ({
        searchedBooks: !books || books.error === "empty query" ? [] : books
      }));
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map(book => (
              <li key={book.id}>
                <Book book={book} onUpdateShelf={this.props.onUpdateShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  onUpdateShelf: PropTypes.func.isRequired
};

export default SearchBooks;
