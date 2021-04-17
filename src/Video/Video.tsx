import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import VideoElement from "./VideoElement/VideoElement";
import Transcript from "./Transcript/Transcript";
import VideoTitle, { videoLabelID } from "./VideoTitle/VideoTitle";

export const videoPaths = [
  "/Elephants-dream",
  "/View-from-a-blue-moon",
] as const;

const Container = styled.main`
  display: none;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  margin: 1.5rem;

  width: calc(100% - 3rem);
  height: calc(100% - 3rem);

  ${({ theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["xl"]}px`}) {
      width: ${`calc(100% - 3rem - ${theme.drawerWidth}px)`};
    }
  `}
`;

const Row = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 4rem;
`;

const Video: FunctionComponent<{ path: string }> = ({ path }) => {
  return (
    <Container aria-labelledby={videoLabelID} id="videoContainer">
      <Row>
        <VideoElement path={path} />
        <Transcript path={path} />
        <VideoTitle path={path} />
      </Row>
    </Container>
  );
};

export default Video;
