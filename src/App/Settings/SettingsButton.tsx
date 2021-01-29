import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup, {
  ToggleButtonGroupProps,
} from "@material-ui/lab/ToggleButtonGroup";
/* const { remote, ipcRenderer } = window.require("electron"); */

const ButtonContainer = styled.div`
  background-color: white;
  position: absolute;
  right: 0;
  top: 0;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
`;

const Button = styled(ToggleButton)`
  border: none;
  border-radius: 0;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  border-right: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  color: rgba(0, 0, 0, 0.54);

  &.MuiToggleButton-root.Mui-selected {
    color: rgba(0, 0, 0, 0.87);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.375rem;
`;

const SettingsButton: FunctionComponent = () => {
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuShowing((prev) => !prev);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [setIsMenuShowing]);

  const onChange: ToggleButtonGroupProps["onChange"] = (
    event,
    newValue: boolean
  ) => {
    setIsMenuShowing(newValue);
  };
  return (
    <>
      <ButtonContainer>
        <ToggleButtonGroup value={isMenuShowing} exclusive onChange={onChange}>
          <Button disableTouchRipple value={true} aria-label="centered">
            <Icon icon={faCog} />
          </Button>
        </ToggleButtonGroup>
      </ButtonContainer>

      {isMenuShowing === true && (
        <Menu
          isMenuShowing={isMenuShowing}
          setIsMenuShowing={setIsMenuShowing}
        />
      )}
    </>
  );
};

export default SettingsButton;
