import React from "react";
import { fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../test-utils";
import AppBar from "../../src/AppBar/AppBar";
import Drawer from "../../src/Drawer/Drawer";

const componentToRender = (
  <div>
    <AppBar />
  </div>
);

describe("AppBar", () => {
  beforeEach(() => {
    renderWithProviders(componentToRender);
  });

  it("Displays a menu button for smaller screens that opens the navigation drawer when clicked", () => {
    renderWithProviders(
      <div>
        <AppBar />
        <Drawer />
      </div>
    );

    expect(document.querySelector("nav")).toBeNull();

    const drawerButton = document.querySelector('[data-cy="drawerButton"]');

    fireEvent(drawerButton, new MouseEvent("click", { bubbles: true }));

    expect(document.querySelector("nav")).toBeTruthy();
  });

  it("Has a link that leads to the root page", () => {
    const homeLink = document.querySelector('[data-cy="homeLink"]');

    expect(typeof homeLink.getAttribute("href")).toBe("string");
  });

  it("Displays a search button", () => {
    const searchButton = document.querySelector('[data-cy="searchButton"]');
    expect(searchButton).toBeTruthy();
  });
});
