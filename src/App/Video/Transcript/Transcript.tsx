import React, { FunctionComponent, useRef, useContext } from "react";
import styled from "styled-components";
import cuesWithPathList from "../Media/cuesWithPathList";
import Cue from "./Cue";
import TitleRow from "../TitleRow/TitleRow";
import { useMediaQuery } from "@material-ui/core";
import { ThemeContext } from "styled-components";
import SkipLink from "./SkipLink";
import { isTranscriptShowingState } from "../VideoElement/useVideoPlayer";
import { useRecoilValue } from "recoil";

const StyledList = styled.ol`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  right: 0;
  height: 100%;

  width: 300px;
  overflow-y: scroll;

  list-style: none;
  margin: 0;
  margin-left: 0.5rem;
  padding: 0;

  @media screen and (display-mode: fullscreen) {
    width: 1422px;
    height: 216px;
  }
`;

const Item = styled.li`
  width: 100%;
`;

const Transcript: FunctionComponent = () => {
  const listRef = useRef<HTMLOListElement>(null);

  const theme = useContext(ThemeContext);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isTranscriptShowing = useRecoilValue(isTranscriptShowingState);

  return (
    <>
      {isLargeScreen === true && isTranscriptShowing === true && (
        <>
          <SkipLink />
          <StyledList ref={listRef}>
            {cuesWithPathList.map((cue, index, arr) => {
              return (
                <Item key={cue.startTime}>
                  <Cue cue={cue} isLast={index + 1 === arr.length} />
                </Item>
              );
            })}
          </StyledList>
        </>
      )}
    </>
  );
};

export default Transcript;
