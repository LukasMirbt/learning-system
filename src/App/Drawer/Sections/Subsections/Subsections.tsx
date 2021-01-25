import React, { FunctionComponent } from "react";
import { Concept } from "../Sections";
import SubsectionLink from "./SubsectionLink";

const Subsections: FunctionComponent<{
  concept: Concept;
  conceptIndex: number;
}> = ({ concept, conceptIndex }) => {
  return (
    <>
      {concept.conceptHeadings.map(({ heading, subheadings }, headingIndex) => (
        <SubsectionLink
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

export default Subsections;
