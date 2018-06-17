import React from "react";
import { shallow } from "enzyme";
import SearchBooks from "./SearchBooks";

describe("SearchBooks", () => {
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
      ]
    };

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => ({
          data: {
            books: []
          }
        })
      })
    );
  });

  it("should render without crashing", () => {
    const wrapper = shallow(
      <SearchBooks {...props} onUpdateShelf={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should show the message 'No Books found' when no books are found", () => {
    const wrapper = shallow(
      <SearchBooks {...props} onUpdateShelf={jest.fn()} />
    );
    expect(wrapper.find(".books-grid>li").text()).toBe("No Books found");
  });
});
