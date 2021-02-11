import React, { FunctionComponent, CSSProperties } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Searchable } from "../../../../Media/Media";
import StartColumn from "./StartColumn";
import EndColumn from "./EndColumn";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";

type ContainerProps = ListItemProps<"a", { component: "a" }>;

const Container = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.5rem;
  max-width: 1200px;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};

  padding: 0 1rem;

  outline: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:focus-visible {
    background-color: rgba(0, 0, 0, 0.08);
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
  return (
    <Container
      to={{
        pathname: `/${videoTitle.replace(/\s+/g, "-")}`,
        state: {
          time: startTime,
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

export default Row;
