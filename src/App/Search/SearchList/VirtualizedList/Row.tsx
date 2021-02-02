import React, { FunctionComponent, CSSProperties } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Searchable } from "../../../Media/Media";

const Container = styled(Link)`
  display: flex;
  justify-content: space-between;
  /*   align-items: center;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column; */
  font-size: 1.5rem;
  max-width: 1200px;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};

  &:nth-child(2) {
    border-top: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  }

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
  item: Searchable;
}> = ({
  index,
  style,
  item: { text, startTime, endTime, videoTitle, isCue },
}) => {
  const path = `/${videoTitle.replace(/\s+/g, "-")}`;
  return (
    <Container
      to={{
        pathname: path,
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
      <Value>{text}</Value>
      <Description>{isCue === true ? "Subtitle" : "Section"}</Description>
      <Description>
        {startTime} - {endTime}
      </Description>
    </Container>
  );
};

export default Row;
