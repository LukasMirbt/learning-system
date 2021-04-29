import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useSetRecoilState } from "recoil";
import { isDrawerOpenState } from "../Drawer/TemporaryDrawer";

const StyledIconButton = styled(IconButton)`
  margin-right: 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  &:focus-visible {
    background-color: rgba(255, 255, 255, 0.16);
  }

  ${({ theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["xl"]}px`}) {
      display: none;
    }
  `}
`;

const DrawerButton: FunctionComponent = () => {
  const setIsDrawerOpen = useSetRecoilState(isDrawerOpenState);

  return (
    <StyledIconButton
      data-cy="drawerButton"
      disableFocusRipple
      color="inherit"
      aria-label="Open navigation"
      aria-haspopup
      onClick={() => {
        setIsDrawerOpen((prevIsOpen) => !prevIsOpen);
      }}
      edge="start"
    >
      <MenuIcon />
    </StyledIconButton>
  );
};

export default DrawerButton;
