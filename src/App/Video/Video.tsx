import React, {
  FunctionComponent,
  useRef,
  MutableRefObject,
  useState,
} from "react";
import styled, { css } from "styled-components";
import Plyr from "plyr";
import QuestionDialog from "./QuestionDialog/QuestionDialog";
import { useRecoilValue } from "recoil";
import { randomQuestionIndexState } from "./QuestionDialog/QuestionDialog";
import VideoElement from "./VideoElement/VideoElement";
import Transcript from "./Transcript/Transcript";
import TitleRow from "./TitleRow/TitleRow";
import useCSSTranscriptToggle from "./useCSSTranscriptToggle";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  flex-grow: 1;

  .plyr {
    --plyr-color-main: ${({ theme }) => theme.primary};

    flex-grow: 1;
  }

  padding: 1.5rem;
`;

const Row = styled.div`
  display: flex;

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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100%;
`;

/* interface BlockerProps {
  sc: {
    randomQuestionIndex: number | null;
  };
}

const Blocker = styled.div<BlockerProps>`
  height: 100%;
  position: absolute;
  transition: background-color 250ms;
  z-index: 1;

  ${({ sc: { randomQuestionIndex } }) =>
    randomQuestionIndex === null
      ? css`
          pointer-events: none;
          background-color: transparent;
        `
      : css`
          background-color: black;
          transition: background-color 750ms;
        `};
`; */

const Video: FunctionComponent = () => {
  const randomQuestionIndex = useRecoilValue(randomQuestionIndexState);

  useCSSTranscriptToggle();

  return (
    <Container>
      {randomQuestionIndex !== null && <QuestionDialog />}

      <Content>
        <Row id="videoRow">
          <VideoElement />

          <Transcript />
        </Row>
        <TitleRow />
      </Content>

      {/*   {randomQuestionIndex !== null && <QuestionDialog />} */}
    </Container>
  );
};

export default Video;
