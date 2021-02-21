import React, { CSSProperties, FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Searchable } from "../../../../Media/Media";
import Fuse from "fuse.js";
import StartColumn from "./StartColumn";
import EndColumn from "./EndColumn";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  videoState,
  shouldFocusPlayButtonRefState,
} from "../../../../Video/VideoElement/useVideoState/useVideoState";

interface ContainerProps {
  sc: {
    isFirst: boolean;
  };
}

const Container = styled(Link)<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.5rem;
  max-width: 1200px;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};

  border-top: ${({ theme, sc: { isFirst } }) =>
    isFirst === true ? `1px solid ${theme.palette.divider}` : null};

  padding: 0 1rem;

  outline: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:focus-visible {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const ItemRenderer: FunctionComponent<{
  index: number;
  style: CSSProperties;
  data: Fuse.FuseResult<Searchable>[];
}> = ({ index, style, data }) => {
  const { text, startTime, endTime, videoTitle, isCue } = data[index].item;

  const setVideoState = useSetRecoilState(videoState);

  const shouldFocusPlayButtonRef = useRecoilValue(
    shouldFocusPlayButtonRefState
  );

  const path = `/${videoTitle.replace(/\s+/g, "-")}`;
  return (
    <Container
      sc={{ isFirst: index === 0 }}
      to={path}
      onClick={() => {
        shouldFocusPlayButtonRef.current = true;

        setVideoState({
          time: startTime,
          videoPathname: path,
        });
      }}
      style={{
        ...style,
        margin: "auto",
        left: 0,
        right: 0,
      }}
      key={index}
    >
      <StartColumn text={text} isCue={isCue} />

      <EndColumn
        startTime={startTime}
        endTime={endTime}
        videoTitle={videoTitle}
      />
    </Container>
  );
};

export default ItemRenderer;
