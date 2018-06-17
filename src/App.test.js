import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  const books = [
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
      title: "Learning React: Functional Web Development with React and Redux",
      authors: ["Alex Banks", "Eve Porcello"],
      shelf: "wantToRead",
      imageLinks: {
        thumbnail: "thumbnail.jpg",
        smallThumbnail: "smallThumbnail.jpg"
      },
      previewLink: "react.com"
    }
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => ({
          data: {
            books
          }
        })
      })
    );
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
