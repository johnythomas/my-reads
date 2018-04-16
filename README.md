# MyReads

MyReads is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The app also has a search that allows you to find books to add to your library. Each book in the app has a control that lets you select the shelf for that book. You can also move books between shelves.

This project was bootstrapped using [create-react-app](https://github.com/facebook/create-react-app).

## Project Setup

To setup the project locally you need [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/en/).

* npm

```bash
  npm install # install the dependencies
  npm start # run the server
```

* Yarn

```bash
  yarn install # install the dependencies
  yarn start # run the server
```

## Folder Structure

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html
└── src
    ├── Components # This folder contains all the react components
    │   ├── Book.js # Book Component which displays individual books.
    │   ├── BookShelf.js # Used to display a bookshelf. It has a list of books which is displayed using Book component.
    │   ├── ListShelves.js # Used to display a list of bookshelves.
    │   ├── NotFound.js # 404 page.
    │   ├── SearchBooks.js # Used to search and add books from the Udacity backend API.
    │   └── ShelfChanger.js # Used to change the shelf of a book.
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of your app used to load the books from API and do routing.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering and for routing setup.
```

## Backend Server

This project uses the Udacity's backend API to fetch, update and search books. The API is called using the methods in `BooksAPI.js`. Following are the API methods:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
