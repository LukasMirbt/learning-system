import React, { FunctionComponent } from "react";
import styled from "styled-components";
import AutoScrollSwitch from "./AutoScrollSwitch";
import TranscriptTitle from "./TranscriptTitle";
import SkipLink from "./SkipLink";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};
`;

const TranscriptHeader: FunctionComponent<{
  lastCueID: string;
  path: string;
}> = ({ lastCueID, path }) => {
  return (
    <Container>
      <TranscriptTitle path={path} />
      <AutoScrollSwitch />
      <SkipLink lastCueID={lastCueID} />
    </Container>
  );
};

export default TranscriptHeader;
