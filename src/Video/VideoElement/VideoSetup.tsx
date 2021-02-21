import React, { FunctionComponent } from "react";
import useVideoState from "./useVideoState/useVideoState";
import useVideoPlayer from "./useVideoPlayer/useVideoPlayer";
import useSpacebarListener from "./useSpacebarListener";
import useManageVideoPlayerDimensions from "./useManageVideoPlayerDimensions/useManageVideoPlayerDimensions";
import useTranscriptToggleButton from "./useTranscriptToggleButton/useTranscriptToggleButton";

const VideoSetup: FunctionComponent<{
  sourceWidth: number;
  sourceHeight: number;
}> = ({ sourceWidth, sourceHeight }) => {
  useVideoPlayer({ sourceWidth, sourceHeight });

  useTranscriptToggleButton();

  useManageVideoPlayerDimensions({ sourceWidth, sourceHeight });

  useVideoState();

  useSpacebarListener();

  return null;
};

export default VideoSetup;
