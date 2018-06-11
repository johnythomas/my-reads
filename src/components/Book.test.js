import React from "react";
import { shallow } from "enzyme";
import Book from "./Book";
import BookThumbnail from "../icons/BookThumbnail.png";

describe("Book", () => {
  let book = {};

  beforeEach(() => {
    book = {
      id: "azcv34we134pxcviobx",
      title: "Harry Potter",
      authors: ["J.K Rowling"],
      shelf: "read",
      imageLinks: {
        thumbnail: "thumbnail.jpg",
        smallThumbnail: "smallThumbnail.jpg"
      },
      previewLink: "mock.com"
    };
  });

  it("should render without crashing", () => {
    const wrapper = shallow(<Book book={book} onUpdateShelf={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should display the default thumbnail if the book thumbnail is not present", () => {
    book.imageLinks = null;
    const wrapper = shallow(<Book book={book} onUpdateShelf={jest.fn()} />);
    expect(
      wrapper
        .find("div.book-cover")
        .first()
        .props().style.backgroundImage
    ).toEqual(`url("${BookThumbnail}")`);
  });

  it("should display the image thumbnail passed as props", () => {
    const wrapper = shallow(<Book book={book} onUpdateShelf={jest.fn()} />);
    expect(
      wrapper
        .find("div.book-cover")
        .first()
        .props().style.backgroundImage
    ).toEqual(`url("${book.imageLinks.smallThumbnail}")`);
  });
});
