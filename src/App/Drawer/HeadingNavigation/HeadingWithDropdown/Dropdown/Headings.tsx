import React, { FunctionComponent, useMemo } from "react";
import styled from "styled-components";
import { Concept, SubheadingsType } from "../../HeadingNavigation";
import Typography from "@material-ui/core/Typography";
import { ClickableHeadingStyle } from "../../../../common";

import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  ${ClickableHeadingStyle};
  padding-left: 2rem;
  width: unset;

  &.active {
    color: #1c721c;
    background-color: rgba(0, 0, 0, 0.08);
    font-weight: 500;

    &:hover {
      background-color: rgba(0, 0, 0, 0.12);
    }
  }
`;

const Heading = styled(Typography)`
  font-weight: inherit;
  font-size: 0.875rem;
`;

const Headings: FunctionComponent<{
  heading: string;
  subheadings: SubheadingsType;
  concept: Concept;
  conceptIndex: number;
  headingIndex: number;
}> = ({ heading, subheadings, concept, conceptIndex, headingIndex }) => {
  /*   const [selectedHeading, setSelectedHeading] = useRecoilState(
    selectedHeadingState
  ); */

  const path = useMemo(
    () => `/${concept.conceptName}/${heading}`.replace(/\s+/g, "-"),
    [concept.conceptName, heading]
  );

  return (
    <StyledNavLink to={path}>
      <Heading variant="h4"> {heading}</Heading>
    </StyledNavLink>
  );
};

export default Headings;
