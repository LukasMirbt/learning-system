import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import VideoElement from "./VideoElement/VideoElement";
import Transcript from "./Transcript/Transcript";
import TitleRow from "./TitleRow/TitleRow";

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
`;

const Row = styled.div`
  display: flex;

  position: relative;
  margin-bottom: 4rem;
`;

const Video: FunctionComponent = () => {
  return (
    <Container id="videoContainer">
      <Switch>
        {videoPaths.map((path) => (
          <Route key={path} path={path}>
            <Row>
              <VideoElement path={path} />

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
