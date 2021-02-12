import React, { CSSProperties, FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Searchable } from "../../../../Media/Media";
import Fuse from "fuse.js";
import StartColumn from "./StartColumn";
import EndColumn from "./EndColumn";

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
  return (
    <Container
      sc={{ isFirst: index === 0 }}
      to={{
        pathname: `/${videoTitle.replace(/\s+/g, "-")}`,
        state: {
          time: startTime,
          focusPlayButton: true,
        },
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
