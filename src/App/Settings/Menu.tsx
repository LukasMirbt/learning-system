import React, {
  FunctionComponent,
  SetStateAction,
  useEffect,
  Dispatch,
  useState,
} from "react";
import styled from "styled-components";
import MUIModal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
/* const { remote, ipcRenderer } = window.require("electron"); */

const Modal = styled(MUIModal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMenu = styled.div`
  width: 200px;
  border-radius: 4px;
  background-color: white;
  padding: 0.75rem 1rem;
  outline: 0;
`;

const MenuItem = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  transition: none;


  /*   padding: 0.5rem 1rem; */
`;

const Menu: FunctionComponent<{
  isMenuShowing: boolean;
  setIsMenuShowing: Dispatch<SetStateAction<boolean>>;
}> = ({ isMenuShowing, setIsMenuShowing }) => {
  return (
    <Modal
      open={isMenuShowing}
      onClose={() => {
        setIsMenuShowing(false);
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <StyledMenu
        onClick={() => {
          /*    ipcRenderer.send("close"); */
        }}
      >
        <MenuItem disableTouchRipple>Options</MenuItem>
        <MenuItem disableTouchRipple>The other</MenuItem>
        <MenuItem disableTouchRipple>Enter</MenuItem>
        <MenuItem disableTouchRipple>Exit</MenuItem>
      </StyledMenu>
    </Modal>
  );
};

export default Menu;
