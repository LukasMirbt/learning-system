import React, { useState, FunctionComponent } from "react";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useRecoilState } from "recoil";
import { isAutoScrollEnabledState } from "../useActiveCueStyle";

const AutoScrollSwitch: FunctionComponent = () => {
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useRecoilState(
    isAutoScrollEnabledState
  );

  return (
    <FormControlLabel
      control={
        <Switch
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
