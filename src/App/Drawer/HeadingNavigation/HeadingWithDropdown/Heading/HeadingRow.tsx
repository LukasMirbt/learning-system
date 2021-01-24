import React, {
  FunctionComponent,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";
import styled, { css } from "styled-components";
import { Concept } from "../../HeadingNavigation";
import HeadingRowItems from "./HeadingRowItems";
import { ClickableHeading } from "../../../../common";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

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
      <HeadingRowItems
        concept={concept}
        conceptIndex={conceptIndex}
        isShowing={isShowing}
      />
    </StyledRow>
  );
};

export default HeadingRow;
