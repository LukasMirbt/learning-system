import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Concept } from "../Sections";
import RowItems from "./RowItems";
import { ClickableHeading } from "../../../common";

const StyledRow = styled(ClickableHeading)`
  width: 240px;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const HeadingRow: FunctionComponent<{
  concept: Concept;
  conceptIndex: number;
  isShowing: boolean;
  setIsShowing: Dispatch<SetStateAction<boolean>>;
}> = ({ concept, conceptIndex, isShowing, setIsShowing }) => {
  return (
    <StyledRow
      disableTouchRipple
      button
      onClick={() => {
        setIsShowing((prevIsShowing) => !prevIsShowing);
      }}
    >
      <RowItems
        concept={concept}
        conceptIndex={conceptIndex}
        isShowing={isShowing}
      />
    </StyledRow>
  );
};

export default HeadingRow;
