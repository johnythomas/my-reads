import React from "react";
import { shallow, mount } from "enzyme";
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

  it("should display the book title passed as props", () => {
    const wrapper = shallow(<Book book={book} onUpdateShelf={jest.fn()} />);
    expect(
      wrapper
        .find(".book-title")
        .first()
        .text()
    ).toEqual(book.title);
  });

  it("should provide link to the previewLink passed as props", () => {
    const wrapper = shallow(<Book book={book} onUpdateShelf={jest.fn()} />);
    expect(
      wrapper
        .find(".book-title")
        .first()
        .props().href
    ).toEqual(book.previewLink);
  });

  it("should join and show the authors passed as props", () => {
    book.authors = ["J.K Rowling", "Stephen King"];
    const wrapper = shallow(<Book book={book} onUpdateShelf={jest.fn()} />);
    expect(
      wrapper
        .find(".book-authors")
        .first()
        .text()
    ).toEqual(book.authors.join());
  });

  it("should not display anything if author is not present", () => {
    book.authors = null;
    const wrapper = shallow(<Book book={book} onUpdateShelf={jest.fn()} />);
    expect(
      wrapper
        .find(".book-authors")
        .first()
        .text()
    ).toBe("");
  });

  it("should call the onUpdateShelf when shelf is changed", () => {
    const onUpdateShelf = jest.fn();
    const shelf = "currentlyReading";
    const wrapper = mount(<Book book={book} onUpdateShelf={onUpdateShelf} />);
    wrapper.find("select").simulate("change", { target: { value: shelf } });
    expect(onUpdateShelf).toHaveBeenCalledWith(book, shelf);
  });
});
