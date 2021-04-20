import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Citation from "./Citation";

export const videoLabelID = "videoLabel";

const Title = styled(Typography)`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: ${({ theme }) => `${theme.titleRowREM}rem`};

  font-size: 1.5rem;

  position: absolute;
  bottom: -4rem;
  left: 0;
  padding-top: 1rem;
`;

const TitleRow: FunctionComponent<{ path: string }> = ({ path }) => {
  const splitPath = path.split("/");
  const title = splitPath[1].replace(/-+/g, " ");

  return (
    <Title id="videoLabel" variant="h1">
      {title}

      <Citation title={title} />
    </Title>
  );
};

export default TitleRow;
