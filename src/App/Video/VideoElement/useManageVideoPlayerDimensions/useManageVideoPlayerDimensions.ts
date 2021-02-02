import React, { useCallback } from "react";
import { useTheme } from "styled-components";
import onResize from "./onResize";
import useResizeOnTranscriptChange from "./useResizeOnTranscriptChange";
import useResizeListener from "./useResizeListener";

const useManageVideoPlayerDimensions = (args: {
  sourceWidth: number;
  sourceHeight: number;
}) => {
  const { sourceWidth, sourceHeight } = args;

  const theme = useTheme();

  const onResizeCallback = useCallback(
    () => onResize({ theme, sourceWidth, sourceHeight }),
    [theme, sourceWidth, sourceHeight]
  );

  useResizeOnTranscriptChange(onResizeCallback);
  useResizeListener(onResizeCallback);
};

export default useManageVideoPlayerDimensions;
