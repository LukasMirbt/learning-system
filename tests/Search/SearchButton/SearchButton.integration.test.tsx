import React from "react";
import { fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import SearchButton, {
  isSearchOpenState,
} from "../../../src/Search/SearchButton/SearchButton";

const componentToRender = (
  <div>
    <SearchButton />
  </div>
);

describe("SearchButton", () => {
  beforeEach(() => {
    renderWithProviders(componentToRender);
  });

  it("Search dialog is opened when the search button is clicked", () => {
    expect(document.querySelector('[role="dialog"]')).toBeNull();

    const searchButton = document.querySelector('[data-cy="searchButton"]');

    fireEvent(searchButton, new MouseEvent("click", { bubbles: true }));

    const dialog = document.querySelector('[role="dialog"]');

    expect(dialog).toBeTruthy();
    expect(dialog).toHaveTextContent("Search");
  });

  it("Autocomplete shows at most five options when a search term is entered", () => {
    renderWithProviders(componentToRender, ({ set }) => {
      set(isSearchOpenState, true);
    });

    const autocomplete = document.querySelector("#search-autocomplete");

    (autocomplete as HTMLElement).focus();

    fireEvent.change(document.activeElement, {
      target: { value: "a" },
    });

    const options = document.querySelectorAll('[role="option"]');

    expect(options.length).toBe(5);
  });

  it("Dialog displays a link to all search results if there are more than 5 results", () => {
    renderWithProviders(componentToRender, ({ set }) => {
      set(isSearchOpenState, true);
    });

    const autocomplete = document.querySelector("#search-autocomplete");

    (autocomplete as HTMLElement).focus();

    fireEvent.change(document.activeElement, {
      target: { value: "a" },
    });

    const viewAllResultsLink = document.querySelector(
      '[data-cy="viewAllResultsLink"]'
    );

    expect(viewAllResultsLink).toBeTruthy();
  });
});
