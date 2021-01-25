import React, { FunctionComponent, useState } from "react";
import { Concept } from "./Sections";
import SectionRow from "./SectionRow/SectionRow";
import Subsections from "./Subsections/Subsections";

const SectionDropdown: FunctionComponent<{
  concept: Concept;
  conceptIndex: number;
}> = ({ concept, conceptIndex }) => {
  const [isShowing, setIsShowing] = useState(conceptIndex === 0);

  return (
    <>
      <SectionRow
        concept={concept}
        conceptIndex={conceptIndex}
        isShowing={isShowing}
        setIsShowing={setIsShowing}
      />

      {isShowing === true && (
        <Subsections concept={concept} conceptIndex={conceptIndex} />
      )}
    </>
  );
};

export default SectionDropdown;
