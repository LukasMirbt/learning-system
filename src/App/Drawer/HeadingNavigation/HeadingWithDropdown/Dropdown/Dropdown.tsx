import React, { FunctionComponent } from "react";
import { Concept } from "../../HeadingNavigation";
import Headings from "./Headings";

const Dropdown: FunctionComponent<{
  concept: Concept;
  conceptIndex: number;
}> = ({ concept, conceptIndex }) => {
  return (
    <>
      {concept.conceptHeadings.map(({ heading, subheadings }, headingIndex) => (
        <Headings
          key={heading}
          heading={heading}
          concept={concept}
          subheadings={subheadings}
          conceptIndex={conceptIndex}
          headingIndex={headingIndex}
        />
      ))}
    </>
  );
};

export default Dropdown;
