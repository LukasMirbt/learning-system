import React, { useState, FunctionComponent } from "react";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useRecoilState } from "recoil";
import { isAutoScrollEnabledState } from "../useActiveCueStyle";

const StyledSwitch = styled(Switch)`
  .Mui-focusVisible {
    background-color: rgba(0, 0, 0, 0.08);
  }

  .Mui-checked {
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }

  .Mui-checked.Mui-focusVisible {
    background-color: rgba(0, 0, 0, 0.16);
  }
`;

const AutoScrollSwitch: FunctionComponent = () => {
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useRecoilState(
    isAutoScrollEnabledState
  );

  return (
    <FormControlLabel
      control={
        <StyledSwitch
          checked={isAutoScrollEnabled}
          onChange={() => {
            setIsAutoScrollEnabled((prevEnabled) => !prevEnabled);
          }}
        />
      }
      label="Auto-scroll"
    />
  );
};

export default AutoScrollSwitch;
