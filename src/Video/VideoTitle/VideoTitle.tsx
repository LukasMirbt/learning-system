import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Citation from "./Citation";

export const videoLabelID = "videoLabel";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: ${({ theme }) => `${theme.titleRowREM}rem`};

  position: absolute;
  bottom: -4rem;
  left: 0;
  padding-top: 1rem;
`;

const Title = styled(Typography)`
  font-size: 1.5rem;
`;

const TitleRow: FunctionComponent<{ path: string }> = ({ path }) => {
  const splitPath = path.split("/");
  const title = splitPath[1].replace(/-+/g, " ");

  return (
    <Container>
      <Title id="videoLabel" variant="h1">
        {title}
      </Title>

      <Citation title={title} />
    </Container>
  );
};

export default TitleRow;
