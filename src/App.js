import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListShelves from "./components/ListShelves";
import SearchBooks from "./components/SearchBooks";
import NotFound from "./components/NotFound";
import "./App.css";

class BooksApp extends Component {
  state = {
    books: [],
    isLoading: true
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books,
        isLoading: false
      }));
    });
  }

  updateShelf = (book, shelf) => {
    if (!shelf) return;
    BooksAPI.update(book, shelf).then(() => {
      this.setState(currentState => ({
        books: [
          ...currentState.books.filter(bk => bk.id !== book.id),
          {
            ...book,
            shelf
          }
        ]
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ListShelves
                onUpdateShelf={this.updateShelf}
                books={this.state.books}
                isLoading={this.state.isLoading}
              />
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <SearchBooks
                onUpdateShelf={this.updateShelf}
                books={this.state.books}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
