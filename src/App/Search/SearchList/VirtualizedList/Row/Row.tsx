import React, { FunctionComponent, CSSProperties } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Searchable } from "../../../../Media/Media";
import StartColumn from "./StartColumn";
import EndColumn from "./EndColumn";
import ListItem from "@material-ui/core/ListItem";

const Container = styled(ListItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.5rem;
  max-width: 1200px;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};

  padding: 0 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const Row: FunctionComponent<{
  index: number;
  style: CSSProperties;
  item: Searchable;
}> = ({
  index,
  style,
  item: { text, startTime, endTime, videoTitle, isCue },
}) => {
  const history = useHistory();

  return (
    <Container
      button
      onClick={() => {
        history.push(`/${videoTitle.replace(/\s+/g, "-")}`, {
          time: startTime,
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

export default Row;
