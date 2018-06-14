import React from "react";
import { shallow } from "enzyme";
import ListShelves from "./ListShelves";

describe("ListShelves", () => {
  let props;

  beforeEach(() => {
    props = {
      books: [
        {
          id: "azcv34we134pxcviobx",
          title: "Harry Potter",
          authors: ["J.K Rowling"],
          shelf: "read",
          imageLinks: {
            thumbnail: "thumbnail.jpg",
            smallThumbnail: "smallThumbnail.jpg"
          },
          previewLink: "harrypotter.com"
        },
        {
          id: "azcv34we134pgxbvciobx",
          title: "Algorithms",
          authors: ["Robert Sedgewick", "Kevin Wayne"],
          shelf: "currentlyReading",
          imageLinks: {
            thumbnail: "thumbnail.jpg",
            smallThumbnail: "smallThumbnail.jpg"
          },
          previewLink: "algorithms.com"
        },
        {
          id: "r2sdxcqe4we134pcvhsart",
          title:
            "Learning React: Functional Web Development with React and Redux",
          authors: ["Alex Banks", "Eve Porcello"],
          shelf: "wantToRead",
          imageLinks: {
            thumbnail: "thumbnail.jpg",
            smallThumbnail: "smallThumbnail.jpg"
          },
          previewLink: "react.com"
        }
      ],
      isLoading: false
    };
  });

  it("should render without crashing", () => {
    const wrapper = shallow(
      <ListShelves {...props} onUpdateShelf={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should pass the books to the correct shelf", () => {
    const getBooks = (wrapper, shelfName) =>
      wrapper
        .find("BookShelf")
        .filterWhere(shelf => shelf.props().name === shelfName)
        .props().books;

    const wrapper = shallow(
      <ListShelves {...props} onUpdateShelf={jest.fn()} />
    );
    expect(getBooks(wrapper, "Read")).toEqual([props.books[0]]);
    expect(getBooks(wrapper, "Currently Reading")).toEqual([props.books[1]]);
    expect(getBooks(wrapper, "Want to Read")).toEqual([props.books[2]]);
  });
});
