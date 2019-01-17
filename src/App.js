import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListShelves from "./components/ListShelves";
import SearchBooks from "./components/SearchBooks";
import NotFound from "./components/NotFound";
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
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <ListShelves
              onUpdateShelf={updateShelf}
              books={books}
              isLoading={isLoading}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBooks onUpdateShelf={updateShelf} books={books} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default BooksApp;
