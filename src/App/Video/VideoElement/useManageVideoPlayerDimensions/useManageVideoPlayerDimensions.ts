import React, { useCallback } from "react";
import { useTheme } from "styled-components";
import onResize from "./onResize";
import useResizeOnTranscriptChange from "./useResizeOnTranscriptChange";
import useResizeListener from "./useResizeListener";

const useManageVideoPlayerDimensions = (args: {
  width: number;
  height: number;
}) => {
  const { width, height } = args;

  const theme = useTheme();

  const onResizeCallback = useCallback(
    () => onResize({ theme, width, height }),
    [theme, width, height]
  );

  useResizeOnTranscriptChange(onResizeCallback);
  useResizeListener(onResizeCallback);
};

export default useManageVideoPlayerDimensions;
