import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "../App";

describe("NotFound", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => ({ data: { books: {} } })
      })
    );
  });

  it("should render the NotFound page if no routes match", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/invalid"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find("NotFound")).toHaveLength(1);
  });
});
