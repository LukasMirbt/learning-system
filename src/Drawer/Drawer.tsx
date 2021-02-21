import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import Typography from "@material-ui/core/Typography";
import Sections from "./Sections/Sections";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "styled-components";
import TemporaryDrawer from "./TemporaryDrawer";

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: ${({ theme: { drawerWidth } }) => `${drawerWidth}px`};

  background-color: ${({ theme }) => theme.background};

  color: rgba(0, 0, 0, 0.87);

  ${({ theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["xl"]}px`}) {
      border-right: ${`1px solid ${theme.palette.divider}`};
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
    <Title variant="h2">Video sections</Title>
    <Sections />
  </Container>
);

const Drawer: FunctionComponent = () => {
  const theme = useTheme();

  const isXLScreen = useMediaQuery(theme.breakpoints.up("xl"));
  return isXLScreen === true ? DrawerComponent : <TemporaryDrawer />;
};

export default Drawer;
