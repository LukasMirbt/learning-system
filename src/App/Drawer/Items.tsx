import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import HeadingNavigation from "./HeadingNavigation/HeadingNavigation";
import Typography from "@material-ui/core/Typography";
import Subheadings from "./Subheadings/Subheadings";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;

  background-color: ${({ theme }) => theme.background};

  color: rgba(0, 0, 0, 0.87);

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.values.xl}px) {
    border-right: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  }

  ${({ theme }) => css`
    @media screen and (display-mode: fullscreen) {
      margin-right: 0;
    }
  `}
`;

const Title = styled(Typography)`
  font-size: 1.25rem;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  border-top: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  padding-top: 0.5rem;
  margin-top: 0.5rem;
`;

const Items: FunctionComponent = () => {
  return (
    <Container>
      {/*   <LevelOfDetailButtons /> */}

      <Title variant="h2">Sections</Title>
      <HeadingNavigation />

      <Test>
        <Subheadings />
      </Test>
    </Container>
  );
};

export default Items;
