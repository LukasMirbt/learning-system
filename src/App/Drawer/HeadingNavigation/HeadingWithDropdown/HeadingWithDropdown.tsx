import React, { FunctionComponent, useState } from "react";
import { Concept } from "../HeadingNavigation";
import Dropdown from "./Dropdown/Dropdown";
import HeadingRow from "./Heading/HeadingRow";

const HeadingWithDropdown: FunctionComponent<{
  concept: Concept;
  conceptIndex: number;
}> = ({ concept, conceptIndex }) => {
  const [isShowing, setIsShowing] = useState(() => conceptIndex === 0);

  return (
    <>
      <HeadingRow
        concept={concept}
        conceptIndex={conceptIndex}
        isShowing={isShowing}
        setIsShowing={setIsShowing}
      />

      {isShowing === true && (
        <Dropdown concept={concept} conceptIndex={conceptIndex} />
      )}
    </>
  );
};

export default HeadingWithDropdown;
