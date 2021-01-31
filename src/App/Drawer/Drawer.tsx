import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import Typography from "@material-ui/core/Typography";
import Sections from "./Sections/Sections";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "styled-components";
import TemporaryDrawer from "./TemporaryDrawer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 241px;

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
  margin-bottom: 0.25rem;
`;

export const DrawerComponent = (
  <Container>
    <Title variant="h2">Sections</Title>
    <Sections />
  </Container>
);

const Drawer: FunctionComponent = () => {
  const theme = useTheme();

  const isXLScreen = useMediaQuery(theme.breakpoints.up("xl"));
  return isXLScreen === true ? DrawerComponent : <TemporaryDrawer />;
};

export default Drawer;
