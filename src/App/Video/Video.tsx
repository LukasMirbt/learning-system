import React, { FunctionComponent } from "react";
import styled from "styled-components";
import VideoElement from "./VideoElement/VideoElement";
import Transcript from "./Transcript/Transcript";
import TitleRow from "./TitleRow/TitleRow";
import useCSSTranscriptToggle from "./useCSSTranscriptToggle";
import viewFromABlueMoonVideoSource from "../Media/View-from-a-blue-moon/video.mp4";
import viewFromABlueMoonCaptionsSource from "../Media/View-from-a-blue-moon/captions.vtt";
import elephantsDreamVideoSource from "../Media/Elephants-dream/video.mp4";
import elephantsDreamCaptionsSource from "../Media/Elephants-dream/captions.vtt";
import { Switch, Route } from "react-router-dom";
import { atom, useRecoilValue } from "recoil";

const sources = {
  "/View-from-a-blue-moon": {
    videoSource: viewFromABlueMoonVideoSource,
    captionsSource: viewFromABlueMoonCaptionsSource,
  },
  "/Elephants-dream": {
    videoSource: elephantsDreamVideoSource,
    captionsSource: elephantsDreamCaptionsSource,
  },
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: calc(100% - 241px);

  flex-grow: 1;

  .plyr {
    --plyr-color-main: ${({ theme }) => theme.primary};

    flex-grow: 1;
  }

  .transcriptButton {
    display: none;

    @media screen and (min-width: ${({ theme }) =>
        theme.breakpoints.values.lg}px) {
      display: block;
    }
  }

  padding: 1.5rem;
`;

const Row = styled.div`
  display: flex;

  width: 100%;
  max-height: 100%;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.values.lg}px) {
    padding-right: calc(300px + 0.5rem);
  }

  &.transcriptHidden {
    padding-right: 0;
  }

  position: relative;
  max-height: calc(100% - 4rem);
`;

const Video: FunctionComponent = () => {
  useCSSTranscriptToggle();

  return (
    <Container>
      <Row id="videoRow">
        <VideoElement />

        <Transcript />
      </Row>
      <TitleRow />
    </Container>
  );
};

export default Video;
