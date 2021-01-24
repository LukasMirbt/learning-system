import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Concept } from "../../HeadingNavigation";
import Typography from "@material-ui/core/Typography";
import Chevron from "./Chevron";

const ConceptName = styled(Typography)`
  display: flex;
  font-weight: inherit;
  font-size: 1rem;
`;

const HeadingRowItems: FunctionComponent<{
  concept: Concept;
  conceptIndex: number;
  isShowing: boolean;
}> = ({ concept, conceptIndex, isShowing }) => {
  return (
    <>
      <ConceptName variant="h3">{concept.conceptName}</ConceptName>

      <Chevron conceptName={concept.conceptName} isShowing={isShowing} />
    </>
  );
};

export default HeadingRowItems;
