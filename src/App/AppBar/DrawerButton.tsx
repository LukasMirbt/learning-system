import React, { FunctionComponent } from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "styled-components";
import { useSetRecoilState } from "recoil";
import { isDrawerOpenState } from "../Drawer/TemporaryDrawer";
import { useRouteMatch } from "react-router-dom";

const StyledIconButton = styled(IconButton)`
  margin-right: 0.5rem;
`;

const DrawerButton: FunctionComponent = () => {
  const theme = useTheme();
  const isXLScreen = useMediaQuery(theme.breakpoints.up("xl"));

  const setIsDrawerOpen = useSetRecoilState(isDrawerOpenState);

  const isSearchRoute = useRouteMatch("/search") !== null;

  return (
    <>
      {isXLScreen === false && isSearchRoute === false && (
        <StyledIconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => {
            setIsDrawerOpen((prevIsOpen) => !prevIsOpen);
          }}
          edge="start"
        >
          <MenuIcon />
        </StyledIconButton>
      )}
    </>
  );
};

export default DrawerButton;
