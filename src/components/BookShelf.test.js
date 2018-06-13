import React from "react";
import { shallow } from "enzyme";
import BookShelf from "./BookShelf";

describe("BookShelf", () => {
  let props;

  beforeEach(() => {
    props = {
      name: "Currently Reading",
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
          previewLink: "mock.com"
        }
      ],
      isLoading: false
    };
  });

  it("should render without crashing", () => {
    const wrapper = shallow(<BookShelf {...props} onUpdateShelf={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should display the loader if loading is true", () => {
    props.isLoading = true;
    const wrapper = shallow(<BookShelf {...props} onUpdateShelf={jest.fn()} />);
    expect(wrapper.find(".loader")).toHaveLength(1);
  });

  it("should display 'There are no books in this shelf' if no books are present in the shelf", () => {
    props.books = [];
    const wrapper = shallow(<BookShelf {...props} onUpdateShelf={jest.fn()} />);
    expect(
      wrapper
        .find(".message")
        .first()
        .text()
    ).toBe("There are no books in this shelf");
  });

  it("should display all the books passed", () => {
    const wrapper = shallow(<BookShelf {...props} onUpdateShelf={jest.fn()} />);
    expect(
      wrapper
        .find("Book")
        .first()
        .props().book
    ).toBe(props.books[0]);
  });
});
