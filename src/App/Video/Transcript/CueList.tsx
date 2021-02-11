import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Cue from "./Cue";
import { Searchable } from "../../Media/Media";
import useActiveCueStyle from "./useActiveCueStyle";
import TranscriptHeader from "./TranscriptHeader/TranscriptHeader";
import { useHistory } from "react-router-dom";
import { transcriptLabelID } from "./TranscriptHeader/TranscriptTitle";

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: calc(300px + 0.5rem);
  padding-left: 0.5rem;

  overflow-y: scroll;
`;

const TranscriptContainer = styled.div`
  &.hidden {
    display: none;
  }
`;

const CueList: FunctionComponent<{ cues: Searchable[] }> = ({ cues }) => {
  useActiveCueStyle();

  return (
    <Container aria-labelledby={transcriptLabelID} id="transcriptContainer">
      <TranscriptHeader lastCueID={`cue${cues.length - 1}`} />

      <TranscriptContainer>
        {cues.map((cue, index) => (
          <Cue key={cue.startTime} cue={cue} cueIndex={index}></Cue>
        ))}
      </TranscriptContainer>
    </Container>
  );
};

export default CueList;
