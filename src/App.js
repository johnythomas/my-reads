import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListShelves from "./components/ListShelves";
import SearchBooks from "./components/SearchBooks";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
      console.log(books);
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListShelves} />
        <Route exact path="/search" component={SearchBooks} />
      </div>
    );
  }
}

export default BooksApp;
