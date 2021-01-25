import React, { FunctionComponent, CSSProperties } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SearchableCue } from "../../AppBar/Search/getSearchableItems";

const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 1.5rem;
  max-width: 1200px;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  padding: 0 1rem;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Value = styled.div``;

const Description = styled.div`
  font-size: 1rem;
`;

const Row: FunctionComponent<{
  index: number;
  style: CSSProperties;
  item: SearchableCue;
}> = ({ index, style, item }) => {
  return (
    <Container
      to={{
        pathname: item.path,
        state: {
          time: item.startTime,
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
      <Value>{item.value}</Value>
      <Description>{`Path: ${item.path}`}</Description>
    </Container>
  );
};

export default Row;
