import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Cue from "./Cue";
import { Searchable } from "../../Media/Media";
import useActiveCueStyle from "./useActiveCueStyle";

const StyledList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /*   position: absolute;
  right: 0; */

  height: 0;
  width: calc(300px + 0.5rem);
  padding-left: 0.5rem;

  overflow-y: scroll;

  &.hidden {
    display: none;
  }

  /*   list-style: none;
    margin: 0;
    padding: 0; */
`;

const CueList: FunctionComponent<{ cues: Searchable[] }> = ({ cues }) => {
  useActiveCueStyle();

  return (
    <StyledList id="transcriptContainer">
      {cues.map((cue, index) => (
        <Cue key={cue.startTime} cue={cue} cueIndex={index}></Cue>
      ))}
    </StyledList>
  );
};

export default CueList;
