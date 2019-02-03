import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListShelves from "./components/ListShelves";
import SearchBooks from "./components/SearchBooks";
import NotFound from "./components/NotFound";
import BooksContext from "./context";
import "./App.css";

const BooksApp = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllBooks = async () => {
    const booksResponse = await BooksAPI.getAll();
    setBooks(booksResponse);
    setIsLoading(false);
  };

  const updateShelf = async (book, shelf) => {
    if (!shelf) return;
    await BooksAPI.update(book, shelf);
    setBooks(currentBooks => [
      ...currentBooks.filter(bk => bk.id !== book.id),
      {
        ...book,
        shelf
      }
    ]);
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className="app">
      <BooksContext.Provider
        value={{ books, isLoading, onUpdateShelf: updateShelf }}
      >
        <Switch>
          <Route exact path="/" component={ListShelves} />
          <Route exact path="/search" component={SearchBooks} />
          <Route component={NotFound} />
        </Switch>
      </BooksContext.Provider>
    </div>
  );
};

export default BooksApp;
