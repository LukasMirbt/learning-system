import React, { FunctionComponent } from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "styled-components";
import { useSetRecoilState } from "recoil";
import { isDrawerOpenState } from "../Drawer/TemporaryDrawer";
import { useRouteMatch } from "react-router-dom";
import { drawerContainerID } from "../Drawer/Drawer";

const StyledIconButton = styled(IconButton)`
  margin-right: 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  &:focus-visible {
    background-color: rgba(255, 255, 255, 0.16);
  }
`;

const DrawerButton: FunctionComponent = () => {
  const theme = useTheme();
  const isXLScreen = useMediaQuery(theme.breakpoints.up("xl"));

  const setIsDrawerOpen = useSetRecoilState(isDrawerOpenState);

  const isSearchRoute = useRouteMatch("/search") !== null;

  return isXLScreen === false && isSearchRoute === false ? (
    <StyledIconButton
      disableFocusRipple
      color="inherit"
      aria-label="Open navigation"
      aria-haspopup
      aria-controls={drawerContainerID}
      onClick={() => {
        setIsDrawerOpen((prevIsOpen) => !prevIsOpen);
      }}
      edge="start"
    >
      <MenuIcon />
    </StyledIconButton>
  ) : null;
};

export default DrawerButton;
