import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import Paper from "@material-ui/core/Paper";
import Subheadings from "./Subheadings";
import Typography from "@material-ui/core/Typography";

const Container = styled(Paper)`
  height: min-content;
  width: 240px;
  box-shadow: unset;
  box-sizing: border-box;
  border-left: ${({ theme }) => `1px solid ${theme.palette.divider}`};

  border-radius: unset;
  margin-left: 0.5rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    /*     @media screen and (min-width: ${theme.breakpoints.values.xl}px) {
      margin-right: calc(6.25rem - 1px);
    } */

    @media screen and (display-mode: fullscreen) {
      margin-left: 0;
    }
  `}
`;

const Sidebar: FunctionComponent = () => {
  return (
    <Container>
      {/*    <ProgressBar /> */}

      <Subheadings />

      {/*  <Questions /> */}
      {/* <Challenges /> */}
    </Container>
  );
};

export default Sidebar;
