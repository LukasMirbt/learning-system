import React from "react";
import { fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../test-utils";
import Drawer from "../../src/Drawer/Drawer";
import { isDrawerOpenState } from "../../src/Drawer/TemporaryDrawer";

const componentToRender = (
  <div>
    <Drawer />
  </div>
);

describe("Drawer", () => {
  beforeEach(() => {
    renderWithProviders(componentToRender, ({ set }) => {
      set(isDrawerOpenState, true);
    });
  });

  it("Accordions can be expanded and collapsed correctly", () => {
    const drawer = document.querySelector("nav");

    const outerAccordion = drawer.querySelector('[aria-expanded="true"]');
    const expandedContent = drawer.querySelector('[role="region"]'); //first accordion is expanded initially
    expect(expandedContent).toBeTruthy();

    fireEvent(outerAccordion, new MouseEvent("click", { bubbles: true }));

    expect(outerAccordion.getAttribute("aria-expanded")).toBe("false");
    expect(document.querySelector('[role="region"]')).toBeNull();

    const innerAccordion = drawer.querySelector('[aria-expanded="false"]');

    fireEvent(innerAccordion, new MouseEvent("click", { bubbles: true }));

    const innerExpandedContent = drawer.querySelector('[role="region"]');
    expect(innerExpandedContent).toBeTruthy();
    expect(innerAccordion.getAttribute("aria-expanded")).toBe("true");

    fireEvent(innerAccordion, new MouseEvent("click", { bubbles: true }));

    expect(innerAccordion.getAttribute("aria-expanded")).toBe("false");
    expect(drawer.querySelector('[role="region"]')).toBeNull();
  });

  it("Displays a heading", () => {
    const heading = document.querySelector("h2");
    expect(heading).toHaveTextContent("Video sections");
  });
});
