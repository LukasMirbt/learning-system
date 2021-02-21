import React, { useLayoutEffect } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import { isTranscriptShowingState } from "../../Transcript/Transcript";
import { videoPlayerState } from "../useVideoPlayer/useVideoPlayer";

const useResizeOnTranscriptChange = (onResizeCallback: () => void) => {
  const theme = useTheme();

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isTranscriptShowing = useRecoilValue(isTranscriptShowingState);

  const videoPlayer = useRecoilValue(videoPlayerState);

  useLayoutEffect(() => {
    if (videoPlayer !== null) {
      onResizeCallback();
    }
  }, [isLargeScreen, isTranscriptShowing, onResizeCallback, videoPlayer]);
};

export default useResizeOnTranscriptChange;
