import React from "react";
import { fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import SearchList from "../../../src/Search/SearchList/SearchList";

const componentToRender = (
  <div>
    <SearchList />
  </div>
);

describe("SearchList", () => {
  beforeEach(() => {
    renderWithProviders(componentToRender);
  });

  it("Has a descriptive heading", () => {
    expect(document.querySelector("h1")).toHaveTextContent(
      "Found 0 search results"
    );

    const input = document.querySelector("#searchInput");

    fireEvent.change(input, {
      target: { value: "a" },
    });

    expect(document.querySelector("h1")).toHaveTextContent(
      `search results for "a"`
    );
  });

  it("Clear input button clears input correctly", () => {
    const input = document.querySelector("#searchInput") as HTMLInputElement;

    fireEvent.change(input, {
      target: { value: "abc" },
    });

    expect(input.value).toBe("abc");

    const clearButton = document.querySelector('[type="reset"]');
    fireEvent(clearButton, new MouseEvent("click", { bubbles: true }));

    expect(input.value).toBe("");
  });

  it("Input has a label", () => {
    const label = document.querySelector('[for="searchInput"]');
    expect(label).toBeTruthy();
  });
});
