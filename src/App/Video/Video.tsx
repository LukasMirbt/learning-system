import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import VideoElement from "./VideoElement/VideoElement";
import Transcript from "./Transcript/Transcript";
import VideoTitle, { videoLabelID } from "./VideoTitle/VideoTitle";

export const videoPaths = [
  "/View-from-a-blue-moon",
  "/Elephants-dream",
] as const;

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  margin: 1.5rem;

  width: calc(100% - 3rem);
  height: calc(100% - 3rem);

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.values["xl"]}px) {
    width: calc(100% - 3rem - 241px);
  }
`;

const Row = styled.div`
  display: flex;

  position: relative;
  margin-bottom: 4rem;
`;

const Video: FunctionComponent = () => {
  return (
    <Container aria-labelledby={videoLabelID} id="videoContainer">
      <Switch>
        {videoPaths.map((path) => (
          <Route key={path} path={path}>
            <Row>
              <VideoElement path={path} />

              <Transcript path={path} />

              <VideoTitle path={path} />
            </Row>
          </Route>
        ))}
      </Switch>
    </Container>
  );
};

export default Video;
