import React, { FunctionComponent } from "react";
import styled from "styled-components";
import VideoElement from "./VideoElement/VideoElement";
import Transcript from "./Transcript/Transcript";
import TitleRow from "./TitleRow/TitleRow";
import useCSSTranscriptToggle from "./useCSSTranscriptToggle";
import { Switch, Route } from "react-router-dom";

const videoPaths = ["/View-from-a-blue-moon", "/Elephants-dream"] as const;

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

const Container2 = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Video: FunctionComponent = () => {
  useCSSTranscriptToggle();


  return (
    <Container>
      <Row id="videoRow">
        <Switch>
          {videoPaths.map((path) => (
            <Route key={path} path={path}>
              <Container2>
                <VideoElement path={path} />
              </Container2>
            </Route>
          ))}
        </Switch>

        <Transcript />
      </Row>
      <TitleRow />
    </Container>
  );
};

export default Video;
