import React, { useLayoutEffect } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import { isTranscriptShowingState } from "../../Transcript/Transcript";

const useResizeOnTranscriptChange = (onResizeCallback: () => void) => {
  const theme = useTheme();

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isTranscriptShowing = useRecoilValue(isTranscriptShowingState);

  useLayoutEffect(() => {
    onResizeCallback();
  }, [isLargeScreen, isTranscriptShowing, onResizeCallback]);
};

export default useResizeOnTranscriptChange;
