import React, { FunctionComponent } from "react";
import styled from "styled-components";
import VideoElement from "./VideoElement/VideoElement";
import Transcript from "./Transcript/Transcript";
import TitleRow from "./TitleRow/TitleRow";
import { Switch, Route } from "react-router-dom";

export const videoPaths = [
  "/View-from-a-blue-moon",
  "/Elephants-dream",
] as const;

export const titleRowCSSHeight = "4rem";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  margin: 1.5rem;
  flex-grow: 1;

  width: calc(100% - 3rem);
  height: calc(100% - 3rem);

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.values["xl"]}px) {
    width: calc(100% - 3rem - 241px);
  }

  .plyr {
    --plyr-color-main: ${({ theme }) => theme.primary};
  }

  .transcriptButton {
    display: none;

    @media screen and (min-width: ${({ theme }) =>
        theme.breakpoints.values.lg}px) {
      display: block;
    }
  }
`;

const Row = styled.div`
  display: flex;

  position: relative;
  margin-bottom: 4rem;
`;

const Container2 = styled.div`
  display: flex;
  height: min-content;
`;

const Video: FunctionComponent = () => {
  return (
    <Container id="videoContainer">
      <Switch>
        {videoPaths.map((path) => (
          <Route key={path} path={path}>
            <Row>
              <Container2>
                <VideoElement path={path} />
              </Container2>

              <Transcript path={path} />

              <TitleRow path={path} />
            </Row>
          </Route>
        ))}
      </Switch>
    </Container>
  );
};

export default Video;
