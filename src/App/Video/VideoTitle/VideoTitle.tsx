import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { videoPaths } from "../Video";

export const videoLabelID = "videoLabel";

const Title = styled(Typography)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => `${theme.titleRowREM}rem`};

  font-size: 1.5rem;

  position: absolute;
  bottom: -4rem;
  left: 0;
`;

const TitleRow: FunctionComponent<{ path: typeof videoPaths[number] }> = ({
  path,
}) => {
  const splitPath = path.split("/");
  const title = splitPath[1].replace(/-+/g, " ");

  return (
    <Title id="videoLabel" variant="h1">
      {title}
    </Title>
  );
};

export default TitleRow;
